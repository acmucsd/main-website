import type { NextApiRequest, NextApiResponse } from "next";
import { getBoardData } from "src/api/BoardAPI";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method !== "GET") {
        return res.status(405).json({ error: "Method not allowed" });
    }

    try {
        const boardData = await getBoardData();

        res.status(200).json({
            board: boardData || []
        });
    }
    catch (error) {
        console.error("Failed to get board data:", error);

        res.status(500).json({
            error: "Failed to retreive board data"
        });
    }
}
