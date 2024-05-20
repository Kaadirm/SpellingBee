// components/Score.tsx
interface ScoreProps {
    lang: string;
    score: number;
}

const Score: React.FC<ScoreProps> = ({ lang, score }) => {
    return (
        <div>
            <h2 className="text-2xl text-blue-500">
                {lang === 'en' ? 'Score' : 'Skor'}: {score}
            </h2>
        </div>
    );
};

export default Score;
