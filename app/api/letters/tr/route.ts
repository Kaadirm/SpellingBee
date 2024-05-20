import { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse } from 'next/server';
import { getRandomLetters } from '@/utils/getRandomLetters';
import dictionary from "@/public/dictonaries/english.json";

export const GET = async () => {
    try {
        const randomLetters = getRandomLetters(dictionary, 'tr');
        return Response.json({ randomLetters, msg: 'Success', status: 200 });
    } catch (error) {
        return Response.json({ msg: 'An error occurred while processing the data.', status: 500 });
    }
}