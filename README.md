# Movie and TV Show Search Application

## Project Overview

This is a **Movie and TV Show Search** web application built as a technical challenge. The goal of the application is to search for movies and TV shows using the **OMDb API**, allowing users to browse through the results, view details, and create a list of favorites. The application emphasizes best practices in code structuring, state management, data filtering, and user interactions.

## Features

1. **Movie and TV Show Search**: A search input field allows users to search for movies and TV shows, with results dynamically displayed.
2. **Display Search Results**: A list of search results shows the poster and title of each movie or TV show. Clicking on a poster will open a detailed view with more information about the selected item.
3. **Favorites List**: Users can mark movies or TV shows as favorites, which will be saved to a favorites list. The UI will visually indicate which items are in the favorites list.
4. **Type Filter**: Users can filter search results by type (movie or series), with a counter displaying the number of results for each category.
5. **Favorites Counter**: A global state tracks the number of items in the favorites list, and this count is displayed in the UI.
6. **Persistent Favorites**: Favorites are persisted using **Redux Toolkit**, ensuring the list remains even after a page refresh.
7. **SASS Styling**: Custom styles are implemented using SASS for the main screen and search results.
8. **TypeScript**: All data structures are typed, ensuring better code quality and error prevention.
9. **API Services**: The API calls to OMDb are made independently of the state management system (Redux) for better separation of concerns.

## Technology Stack

- **UI Framework**: PrimeReact
- **State Management**: Redux Toolkit
- **API Calls**: Fetch
- **Language**: TypeScript
- **Styling**: SASS and CSS for custom styles
- **OMDb API**: To fetch movie and series data from OMDb

## Getting Started

### Prerequisites

- **Node.js** (version 14+ recommended)
- **npm** or **yarn** as the package manager

### OMDb API Key

To use this application, you will need to get an API key from OMDb. You can get one by registering on the [OMDb website](http://www.omdbapi.com/).

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/enzogdev/fav-films.git
   cd fav-films

   ```

2. **Install dependencies**: If you're using npm
   ```bash
   npm install
   ```
   Or if you're using yarn
   ```bash
   yarn install
   ```
3. **Set up environment variables**: Create a `.env` file in the root of the project and add your OMDb API key:

   ```
   VITE_OMDB_API_KEY=YOUR-API-KEY-HERE

   ```

4. **Run the application**: If you're using npm:

```bash
npm start
```

Or if you're using yarn:

```bash
yarn start
```

The app will be running at `http://localhost:5173`.
