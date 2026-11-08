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
        // or
        // acmucsd.com/api/board?team=...&team=... -> to get board members from multiple specified teams
        const { team } = req.query;
        const teams = Array.isArray(team) ? team : null;
        const foundTeams = new Set();

        const boardData = await getBoardData();

        // if team is the only query key used, filter board members by team(s)
        if (Object.keys(req.query).length === 1 && team) {
            const teamMembers = boardData.filter(
                // either org (as in General, AI, Design, etc.) or subteam (Dev, Hackathon, Outreach, etc.) work
                (member) => {
                    if (member.org === team || teams?.includes(member.org)) {
                        foundTeams.add(member.org);
                    }
                    if (member.subteam === team || teams?.includes(member.subteam)) {
                        foundTeams.add(member.subteam);
                    }

                    return foundTeams.has(member.org) || foundTeams.has(member.subteam);
                }
            );

            // if no team members found, team(s) doesn't exist
            if (teamMembers.length === 0) {
                return res.status(404).json({
                    error: "Route does not exist"
                });
            }

            // if a team wasn't found, team doesn't exist
            for (const t of teams ?? []) {
                if (!foundTeams.has(t)) {
                    return res.status(404).json({
                        error: "Route does not exist"
                    });
                }
            };

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
