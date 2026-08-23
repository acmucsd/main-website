import type { NextApiRequest, NextApiResponse } from "next";
import { getBoardData } from "src/api/BoardAPI";

// list of origins allowed to use this route
const allowedOrigins = [
    "https://projects.acmucsd.com",
    "https://ai.acmucsd.com",
    "https://cyber.acmucsd.com",
    "https://hack.acmucsd.com",
    "https://outreach.acmucsd.com",
    "https://diamondhacks.acmucsd.com",
    "https://portal.diamondhacks.acmucsd.com"
];

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const origin = req.headers.origin;

    // CORS
    if (origin && allowedOrigins.includes(origin)) {
        res.setHeader("Access-Control-Allow-Origin", origin);
    }

    if (req.method !== "GET") {
        return res.status(405).json({ error: "Method not allowed" });
    }

    try {
        // acmucsd.com/api/board -> to get all board members
        // or
        // acmucsd.com/api/board?team=... -> to get board members from a specified team
        const { team } = req.query;

        const boardData = await getBoardData();

        if (team) {
            const teamMembers = boardData.filter(
                // either org (as in General, AI, Design, etc.) or subteam (Dev, Hackathon, Outreach, etc.) work
                (member) => member.org === team || member.subteam === team
            );

            return res.status(200).json({
                // return all board members if query is invalid
                board: teamMembers.length !== 0 ? teamMembers : boardData
            });
        }

        res.status(200).json({ board: boardData });
    }
    catch (error) {
        console.error("Failed to get board data:", error);

        res.status(500).json({
            error: "Failed to retreive board data"
        });
    }
}
