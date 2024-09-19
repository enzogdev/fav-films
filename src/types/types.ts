export interface Film {
    Poster: string;
    Year: string;
    Title: string;
    imdbID: string;
    ratings?: Rating[];
}
export interface SearchResponse {
    Search: APIFilm[];
    totalResults: string;
    Response: string;
    Error?: string;
}
export interface APIFilm {
    Title: string
    Year: string
    Rated: string
    Released: string
    Runtime: string
    Genre: string
    Director: string
    Writer: string
    Actors: string
    Plot: string
    Language: string
    Country: string
    Awards: string
    Poster: string
    Ratings: Rating[]
    Metascore: string
    imdbRating: string
    imdbVotes: string
    imdbID: string
    Type: string
    DVD: string
    BoxOffice: string
    Production: string
    Website: string
    Response: string
}

export interface Rating {
    Source: string
    Value: string
}
