// components/LetterHive.tsx
interface LetterHiveProps {
    letters: string[];
}

const LetterHive: React.FC<LetterHiveProps> = ({ letters }) => {
    return (
        <div>
            <h2 className="text-2xl">Letters:</h2>
            <div className="flex space-x-2">
                {letters.map((letter, index) => (
                    <span key={index} className="text-xl font-bold">
                        {letter}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default LetterHive;
