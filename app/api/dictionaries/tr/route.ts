import { getRandomLetters } from '@/utils/getRandomLetters';
import dictionary from "@/public/dictonaries/turkish.json";
export const dynamic = 'force-dynamic';

export const GET = async () => {
    try {
        const randomLetters = getRandomLetters(dictionary, 'en');
        return Response.json({ randomLetters, dictionary, msg: 'Success', status: 200 });
    } catch (error) {
        return Response.json({ msg: 'An error occurred while processing the data.', status: 500 });
    }
}
