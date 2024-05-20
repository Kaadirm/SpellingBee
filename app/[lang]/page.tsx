// pages/en/index.tsx
import Link from 'next/link';
import Game from '../../components/Game';

interface HomePageProps {
    params: {
        lang: string;
    };
}

export type getDictionaryResponse = {
    randomLetters: string[];
    dictionary: string[];
    msg: string;
    status: number;
};

async function getDictionary(lang: string): Promise<getDictionaryResponse> {
    try {
        const response = await fetch(
            `http://localhost:3000/api/dictionaries/${lang}`,
            { cache: 'no-store' }
        );
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching dictionary:', error);
        throw error;
    }
}

const HomePage: React.FC<HomePageProps> = async ({ params: { lang } }) => {
    const data = await getDictionary(lang);
    return (
        <>
            <Game data={data} lang={lang} />
            <div className="absolute right-8 top-8">
                {lang === 'en' && <Link href="/tr">Go to TR page</Link>}
                {lang === 'tr' && <Link href="/en">Go to EN page</Link>}
            </div>
        </>
    );
};

export default HomePage;
