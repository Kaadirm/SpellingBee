'use client';

// components/Game.tsx
import { useEffect, useRef, useState } from 'react';
import Timer from './Timer';
import Score from './Score';
import AchievementPopup from './AchievementPopup';
import { getDictionaryResponse } from '@/app/[lang]/page';

interface GameProps {
    lang: string;
    data: getDictionaryResponse;
}

const Game: React.FC<GameProps> = ({ data, lang }) => {
    const [letters, setLetters] = useState<string[]>(data.randomLetters);
    const [dictionary, setDictionary] = useState<string[]>(data.dictionary);
    const [word, setWord] = useState('');
    const [score, setScore] = useState(0);
    const [time, setTime] = useState(60);
    const [submittedWords, setSubmittedWords] = useState<string[]>([]); // Track submitted words
    const [isGameOver, setIsGameOver] = useState<boolean>(false); // Track game over state
    const inputRef = useRef(null);
    const [isAchievementPopupOpen, setIsAchievementPopupOpen] =
        useState<boolean>(false);

    const handleInputClick = () => {
        if (inputRef.current) {
            (inputRef.current as HTMLInputElement).focus();
        }
    };

    // useEffect(() => {
    //     async function fetchData() {
    //         const res = await fetch(`/api/dictionaries/${lang}`);
    //         const data = await res.json();
    //         // setDictionary(data.dictionary);
    //         setLetters(data.randomLetters);
    //         console.log('render');
    //     }
    //     fetchData();
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [lang]);

    const newGame = async () => {
        const res = await fetch(`/api/letters/${lang}`);
        const data = await res.json();
        setLetters(data.randomLetters);
        setScore(0);
        setTime(60);
        setSubmittedWords([]);
        setIsGameOver(false);
        setWord('');
    };

    const handleHexagonClick = (clickedLetter: string) => {
        if (word.length >= 20) return;
        setWord(word + clickedLetter); // Append clicked letter to the word state
    };

    const handleWordSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Check if the word has already been submitted in this session
        if (submittedWords.includes(word.toLowerCase())) {
            alert('You have already submitted this word.');
            return;
        }

        // Check if the word includes the center letter
        if (!word.toLowerCase().includes(letters[3])) {
            alert(
                `Invalid word. You must use the center letter: ${letters[3].toUpperCase()}`
            );
            return;
        }

        // Check if the word is at least 3 letters long
        if (word.length < 3) {
            alert('Invalid word. The word must be at least 3 letters long.');
            return;
        }

        // Check if the word contains letters that are not in the available letters
        const wordLetters = word.toLowerCase().split('');
        const availableLetters = letters.map((letter) => letter.toLowerCase());
        const invalidLetters = wordLetters.filter(
            (letter) => !availableLetters.includes(letter)
        );

        if (invalidLetters.length > 0) {
            alert(
                `Invalid word. The word contains letters that are not in the available letters: ${invalidLetters.join(
                    ', '
                )}`
            );
            return;
        }

        if (dictionary.includes(word.toLowerCase())) {
            setScore(score + word.length * 10);
            setTime(time + 15);
            setSubmittedWords([...submittedWords, word.toLowerCase()]);
            setWord('');
            setIsAchievementPopupOpen(true);
            setTimeout(() => {
                setIsAchievementPopupOpen(false);
            }, 1000);
        } else {
            alert('Invalid word.');
        }
    };

    useEffect(() => {
        if (time === 0) {
            setIsGameOver(true);
        }
    }, [time]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setWord(e.target.value);
    };

    return (
        <div className="flex items-center justify-center min-h-screen py-2">
            <div className="flex gap-8">
                <div className="flex flex-col items-center justify-center relative">
                    {isAchievementPopupOpen && (
                        <div className="absolute -top-12">
                            <AchievementPopup lang={lang} />
                        </div>
                    )}
                    <h1 className="text-4xl font-bold mb-4">
                        {lang === 'en' ? 'Spelling Bee' : 'Heceleme Oyunu'}
                    </h1>
                    <div className="flex gap-8">
                        <Timer
                            lang={lang}
                            letters={letters}
                            time={time}
                            setTime={setTime}
                        />
                        <Score lang={lang} score={score} />
                    </div>
                    <div className="hexagon-container flex uppercase text-2xl font-bold">
                        <div className="translate-x-8">
                            <div
                                className="hexagon rounded-hexagon"
                                onClick={() => handleHexagonClick(letters[0])}
                            >
                                {letters[0]}
                            </div>
                            <div
                                className="hexagon rounded-hexagon"
                                onClick={() => handleHexagonClick(letters[1])}
                            >
                                {letters[1]}
                            </div>
                        </div>
                        <div>
                            <div
                                className="hexagon rounded-hexagon"
                                onClick={() => handleHexagonClick(letters[2])}
                            >
                                {letters[2]}
                            </div>
                            <div
                                className="hexagon rounded-hexagon center-hexagon"
                                onClick={() => handleHexagonClick(letters[3])}
                            >
                                {letters[3]}
                            </div>
                            <div
                                className="hexagon rounded-hexagon"
                                onClick={() => handleHexagonClick(letters[4])}
                            >
                                {letters[4]}
                            </div>
                        </div>
                        <div className="-translate-x-8">
                            <div
                                className="hexagon rounded-hexagon"
                                onClick={() => handleHexagonClick(letters[5])}
                            >
                                {letters[5]}
                            </div>
                            <div
                                className="hexagon rounded-hexagon"
                                onClick={() => handleHexagonClick(letters[6])}
                            >
                                {letters[6]}
                            </div>
                        </div>
                    </div>
                    <form onSubmit={handleWordSubmit} className="mt-4 ">
                        <div className="relative">
                            <input
                                ref={inputRef}
                                type="text"
                                value={word}
                                onChange={handleInputChange}
                                className="border p-2 rounded-lg mr-2 uppercase text-center text-2xl font-bold absolute min-h-14 min-w-96 max-w-96 z-10"
                                style={{
                                    color: 'transparent',
                                    backgroundColor: 'transparent',
                                    caretColor: 'black'
                                }}
                                maxLength={20}
                            />
                            <div
                                className="relative overflow-hidden border flex justify-center items-center p-2 rounded-lg mr-2 uppercase text-2xl font-bold min-h-14 min-w-96"
                                onClick={handleInputClick}
                            >
                                {word ? (
                                    word
                                        .split('')
                                        .map((item: string, index: number) => (
                                            <span
                                                className={
                                                    letters[3] === item
                                                        ? 'text-[#FFCC4A]'
                                                        : letters.includes(item)
                                                        ? ''
                                                        : 'text-gray-400'
                                                }
                                                key={index}
                                            >
                                                {item}
                                            </span>
                                        ))
                                ) : (
                                    <span className="text-gray-300 normal-case font-normal">
                                        {lang === 'en'
                                            ? 'Type or Click'
                                            : 'Yaz ya da Tıkla'}
                                    </span>
                                )}
                            </div>
                        </div>
                        <div className="flex w-full justify-center gap-4">
                            <button
                                type="button"
                                onClick={newGame}
                                className="bg-red-500 text-white px-4 py-2 rounded-2xl mt-2"
                            >
                                {lang === 'en' ? 'New Game' : 'Yeni Oyun'}
                            </button>
                            <button
                                type="submit"
                                disabled={isGameOver}
                                className="bg-blue-500 text-white px-4 py-2 rounded-2xl mt-2"
                            >
                                {lang === 'en' ? 'Submit' : 'Gönder'}
                            </button>
                        </div>
                    </form>
                </div>
                {submittedWords && submittedWords.length > 0 && (
                    <div className="self-start pl-4 border-l-[1px] border-l-gray-400 h-[600px]">
                        <h2 className="text-xl border-b-2 border-b-gray-300 ">
                            Submitted Words
                        </h2>
                        <ul className="text-lg uppercase mt-4">
                            {submittedWords.map((word, index) => (
                                <li key={index}>- {word}</li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Game;
