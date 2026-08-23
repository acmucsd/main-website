import type { NextApiRequest, NextApiResponse } from "next";
import { getBoardData } from "src/api/BoardAPI";

const allowedOrigins = [
    "https://projects.acmucsd.com/",
    "https://ai.acmucsd.com/",
    "https://cyber.acmucsd.com/",
    "https://hack.acmucsd.com/",
    "https://outreach.acmucsd.com/",
    "https://diamondhacks.acmucsd.com/",
    "https://portal.diamondhacks.acmucsd.com/"
];

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const origin = req.headers.origin;

    if (origin && allowedOrigins.includes(origin)) {
        res.setHeader("Access-Control-Allow-Origin", origin);
    }

    if (req.method !== "GET") {
        return res.status(405).json({ error: "Method not allowed" });
    }

    try {
        const { team } = req.query;

        const boardData = await getBoardData();

        if (team) {
            const teamMembers = boardData.filter(
                (member) => member.org === team || member.subteam === team
            );

            return res.status(200).json({
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
