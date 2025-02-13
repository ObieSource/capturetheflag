import type { NextApiRequest, NextApiResponse } from 'next'



type ResponseData = {
    authorized: boolean
} | {
    flag: string
};

// This is just an example. Would probs be a beginner problem from backend standpoint

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<ResponseData>
) {
    if (req.query?.username === "admin") {
        res.status(200).json({flag: "CTF-LOG-H7LR"})
    } else {
        res.status(200).json({authorized: false})
    }
}