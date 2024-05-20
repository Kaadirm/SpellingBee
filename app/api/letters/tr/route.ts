import { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse } from 'next/server';
import { getRandomLetters } from '@/utils/getRandomLetters';
import dictionary from "@/public/dictonaries/english.json";

export const GET = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const randomLetters = getRandomLetters(dictionary, 'tr');
        return NextResponse.json({ randomLetters, status: 200 });
    } catch (error) {
        return NextResponse.json('An error occurred while processing the data.', { status: 500 });
    }
}