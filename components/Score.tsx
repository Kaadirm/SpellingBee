// components/Score.tsx
interface ScoreProps {
    score: number;
}

const Score: React.FC<ScoreProps> = ({ score }) => {
    return (
        <div>
            <h2 className="text-2xl text-blue-500">Score: {score}</h2>
        </div>
    );
};

export default Score;
