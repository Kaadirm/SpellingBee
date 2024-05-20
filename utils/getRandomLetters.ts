const alphabets = {
    en: 'abcdefghijklmnopqrstuvwxyz',
    tr: 'abcçdefgğhıijklmnoöprsştuüvyz'
};

const vowels = {
    en: ['a', 'e', 'i', 'o', 'u'],
    tr: ['a', 'e', 'ı', 'i', 'o', 'ö', 'u', 'ü']
};

export const getRandomLetters = (
    dictionary: string[],
    language: 'en' | 'tr'
): string[] => {
    const alphabet = alphabets[language];
    const vowelArray = vowels[language];

    let letters: string[] = [];
    let vowelCount = 0;

    while (letters.length < 7) {
        const randomLetter =
            alphabet[Math.floor(Math.random() * alphabet.length)];

        if (!letters.includes(randomLetter)) {
            letters.push(randomLetter);

            if (vowelArray.includes(randomLetter)) {
                vowelCount++;
            }
        }
    }

    // Ensure at least 2 vowels
    while (vowelCount < 2) {
        const randomIndex = Math.floor(Math.random() * letters.length);
        const randomLetter =
            alphabet[Math.floor(Math.random() * alphabet.length)];

        if (
            !vowelArray.includes(letters[randomIndex]) &&
            vowelArray.includes(randomLetter)
        ) {
            letters[randomIndex] = randomLetter;
            vowelCount++;
        }
    }



    // dictionary.forEach(word => {
    //     letters.forEach(letter => {
    //         if(word.includes(letter)){
    //             wordCounter++;
    //         }
    //     })
    // })

    let wordCounter = 0;

    // dictionary.forEach(word => {
    //     if (word.includes(letters[3])) {
    //         if (word.split('').every(letter => letters.includes(letter))) {
    //             if (wordCounter === 2) {
    //                 return letters;
    //             }
    //             wordCounter++;
    //         }
    //     }
    // })

    // if (wordCounter < 2) {
    //     getRandomLetters(dictionary, language);
    // }

    return letters;
};

