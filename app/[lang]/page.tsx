// pages/en/index.tsx
import Link from 'next/link';
import Game from '../../components/Game';
import GameSkeleton from '@/components/GameSkeleton';
import { Suspense } from 'react';

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
    const response = await fetch(
        `http://localhost:3000/api/dictionaries/${lang}`,
        { cache: 'no-store' }
    );
    const data = await response.json();
    console.log(data);
    return data;
}

const HomePage: React.FC<HomePageProps> = async ({ params: { lang } }) => {
    const data = await getDictionary(lang);
    return (
        <>
            <Suspense fallback={<GameSkeleton />}>
                <Game data={data} lang={lang} />
            </Suspense>

            <div className="absolute right-8 top-8">
                {lang === 'en' && <Link href="/tr">Go to TR page</Link>}
                {lang === 'tr' && <Link href="/en">Go to EN page</Link>}
            </div>
        </>
    );
};

export default HomePage;
