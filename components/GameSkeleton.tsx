import React from 'react';

const GameSkeleton: React.FC = () => {
    return (
        <div className="flex items-center justify-center min-h-screen py-2">
            <div className="flex gap-8">
                <div className="flex flex-col items-center justify-center">
                    <h1 className="text-4xl font-bold mb-4"></h1>
                    <div className="flex gap-8">
                        <div></div>
                        <div></div>
                    </div>
                    <div className="hexagon-container flex uppercase text-2xl font-bold">
                        <div className="translate-x-8">
                            <div className="hexagon rounded-hexagon"></div>
                            <div className="hexagon rounded-hexagon"></div>
                        </div>
                        <div>
                            <div className="hexagon rounded-hexagon"></div>
                            <div className="hexagon rounded-hexagon center-hexagon"></div>
                            <div className="hexagon rounded-hexagon"></div>
                        </div>
                        <div className="-translate-x-8">
                            <div className="hexagon rounded-hexagon"></div>
                            <div className="hexagon rounded-hexagon"></div>
                        </div>
                    </div>
                    <form className="mt-4 ">
                        <div className="relative">
                            <input
                                type="text"
                                className="border p-2 rounded-lg mr-2 uppercase text-center text-2xl font-bold absolute min-h-14 min-w-96 max-w-96 z-10"
                                style={{
                                    color: 'transparent',
                                    backgroundColor: 'transparent',
                                    caretColor: 'black'
                                }}
                                maxLength={20}
                            />
                            <div className="relative overflow-hidden border flex justify-center items-center p-2 rounded-lg mr-2 uppercase text-2xl font-bold min-h-14 min-w-96">
                                <span className="text-gray-300 normal-case font-normal"></span>
                            </div>
                        </div>
                        <div className="flex w-full justify-center gap-4">
                            <button
                                type="button"
                                className="bg-red-500 text-white px-4 py-2 rounded-2xl mt-2"
                            ></button>
                            <button
                                type="submit"
                                className="bg-blue-500 text-white px-4 py-2 rounded-2xl mt-2"
                            ></button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default GameSkeleton;
