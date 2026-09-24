import type { NextApiRequest, NextApiResponse } from "next";
import { getBoardData } from "src/api/BoardAPI";

// list of subdomains allowed to use this route
const allowedSubdomains = [
    "projects",
    "ai",
    "cyber",
    "hack",
    "outreach",
    "diamondhacks",
    "portal.diamondhacks"
];

// generate list of origins allowed to use this route
const allowedOrigins = allowedSubdomains.flatMap((subdomain) => {
    const protocolSubdomain = "https://" + subdomain + ".";
    const domains = ["acmucsd.com", "acmatucsd.org"];

    return domains.map((domain) => protocolSubdomain + domain);
});

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

            // if no team members found, team doesn't exist
            if (teamMembers.length === 0) {
                return res.status(404).json({
                    error: "Route does not exist"
                });
            }

            return res.status(200).json({
                board: teamMembers
            });
        }

        // prevents invalid query parameters from accessing data
        if (Object.keys(req.query).length > 0) {
            return res.status(400).json({
                error: "Invalid query parameters"
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
