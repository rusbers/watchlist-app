
# Watchlist DB

This personal project is a movie and TV show list app that allows users to explore and search for their favorite titles using the TMDB API. With an extensive database of movies and TV shows, users can easily find almost any product they’re looking for.

In addition, the app lets users create personalized lists, including a watchlist and a list of favorites, to keep track of the movies and TV shows they want to watch. With its user-friendly interface and extensive database, this app is the perfect companion for any movie or TV show enthusiast.

## Demo

https://rusbers.github.io/watchlist-app/
## Features

- **Authentication**: Sign up and log in immediately with chosen credentials, all securely stored in local storage for easy access.
- **Search for Titles**: Easily search for favorite movies and TV shows using the TMDB API.
- **Detailed Information**: Access detailed information about titles, including links to their homepage or streaming services. For TV shows, view detailed information about seasons and episodes. For movies, see which collection they belong to.
- **Personalized Lists**: Add and remove titles from watchlist and favorites (available only for authenticated users).
- **Sort and Filter by Genre**: Find the perfect movie or TV show by sorting and filtering by genre.


## Built with

This app is built using the **React** ecosystem and the interface is designed using **Material UI**. Here are some of the other dependencies used in the project:

- **axios**: for making HTTP requests
- **date-fns**: for manipulating dates
- **devtools**: for debugging forms
- **dotenv**: for loading environment variables
- **hook-form**: for managing forms
- **infinite-scroll-component**: for implementing infinite scrolling
- **reduxjs/toolkit** and **react-redux**: for state management
- **react-router-dom**: for routing
- **swiper**: for creating carousels
- **vite-plugin-svgr**: for using SVGs as React components
## Getting started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Installing

1. Clone the project

```bash
  git clone https://github.com/rusbers/watchlist
```

2. Go to the project directory

```bash
  cd watchlist/
```

3. Install dependencies

```bash
  npm install
```

4. Start the server

```bash
  npm run dev
```

### Environment variables

To run this project, you will need to add the following environment variable to your .env file:

`VITE_TMDB_API_KEY`

You can easily get an API key from [**TMDB**](https://developer.themoviedb.org/).
