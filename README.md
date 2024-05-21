# Spelling Bee Game

[Live Demo](https://spelling-bee-indol.vercel.app)

This is a simple spelling bee game built with Next.js and TypeScript. The game supports multiple languages and includes features such as fetching dictionary data, handling user input, and tracking scores.

![SpellingBee](https://github.com/Kaadirm/SpellingBee/assets/141996672/3e216bc1-44c0-4676-8d5a-85f0c2770897)

## Table of Contents

-   [Getting Started](#getting-started)
-   [Folder Structure](#folder-structure)
-   [Available Scripts](#available-scripts)
-   [API Routes](#api-routes)
-   [Components](#components)
-   [Styling](#styling)
-   [License](#license)

## Getting Started

To get started with this project, follow these steps:

1. Clone the repository:
    ```sh
    git clone https://github.com/your-username/spelling-bee-game.git
    ```
2. Navigate into the project directory:
    ```sh
    cd spelling-bee-game
    ```
3. Install the dependencies:
    ```sh
    npm install
    ```
4. Run the development server:
    ```sh
    npm run dev
    ```
5. Open your browser and go to `http://localhost:3000`.

## Folder Structure

Here is the folder structure of the project:

app <br/>
├── [lang] <br/>
│ ├── layout.tsx <br/>
│ └── page.tsx <br/>
├── api <br/>
│ ├── dictionaries <br/>
│ │ ├── en <br/>
│ │ │ └── route.ts <br/>
│ │ └── tr <br/>
│ │ └── route.ts <br/>
│ └── letters <br/>
│ ├── en <br/>
│ │ └── route.ts <br/>
│ └── tr <br/>
│ └── route.ts <br/>
components <br/>
├── AchievementPopup.tsx <br/>
├── Game.tsx <br/>
├── GameSkeleton.tsx <br/>
├── LetterHive.tsx <br/>
├── Score.tsx <br/>
└── Timer.tsx <br/>
public <br/>
├── assets <br/>
└── dictionaries <br/>
├── english.json <br/>
└── turkish.json <br/>
styles <br/>
└── globals.css <br/>
utils <br/>
└── getRandomLetters.ts <br/>
│ <br/>
middleware.ts <br/>

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm run build`

Builds the app for production to the `out` folder.

### `npm run start`

Starts the production build.

## API Routes

### Dictionaries and Letters

-   `/api/dictionaries/en`
-   `/api/dictionaries/tr`

These endpoints fetch dictionary and random letters data based on the language.

### Letters

-   `/api/letters/en`
-   `/api/letters/tr`

These endpoints fetch random letters for the game based on the language.

## Components

### `Game.tsx`

The main component for the game logic, including:

-   Handling user input (User Input letters styled according to letters which user must use)
-   Fetching dictionary data
-   Managing game state (score, timer, submitted words)

### `Timer.tsx`

A component for the game timer.

### `Score.tsx`

A component to display the player's score.

### `AchievementPopup.tsx`

A component to display achievement notifications.

## Styling

Global styles are located in `styles/globals.css`.

## Middleware

### `middleware.ts`

The middleware is used to redirect users to a language-specific path based on their browser's `accept-language` header.

## License

This project is licensed under the MIT License.
