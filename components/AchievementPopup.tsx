'use client';
import React from 'react';
import dynamic from 'next/dynamic';

interface AchievementPopupProps {
    lang: string;
}

const AchievementPopup: React.FC<AchievementPopupProps> = ({ lang }) => {
    let words: string[];

    if (lang === 'tr') {
        words = [
            'harika',
            'mükemmel',
            'şahane',
            'muhteşem',
            'olağanüstü',
            'parlak',
            'çarpıcı',
            'olağanüstü',
            'şaşırtıcı',
            'fenomenal'
        ];
    } else {
        words = [
            'super',
            "you're crushing it",
            'awesome',
            'amazing',
            'fantastic',
            'brilliant',
            'outstanding',
            'excellent',
            'spectacular',
            'phenomenal'
        ];
    }

    const randomWord = words[Math.floor(Math.random() * words.length)];

    return (
        <>
            <div
                className="flex gap-1 items-center px-2 py-1 achievement-text rounded-md text-2xl font-medium capitalize"
                style={{
                    color: '#168019',
                    backgroundColor: 'rgba(22, 130, 26, 0.4)'
                }}
                suppressHydrationWarning
            >
                <span>
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M5 14L8.23309 16.4248C8.66178 16.7463 9.26772 16.6728 9.60705 16.2581L18 6"
                            stroke="#168019"
                            stroke-width="2"
                            stroke-linecap="round"
                        />
                    </svg>
                </span>
                {randomWord}
            </div>
        </>
    );
};

export default AchievementPopup;
