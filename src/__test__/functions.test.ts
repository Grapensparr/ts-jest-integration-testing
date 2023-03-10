import * as functions from '../ts/functions';
import { IMovie } from '../ts/models/Movie';

describe('Tests related to movieSort', () => {
    test('Should sort movies in alpabetical order', () => {
        //Arrange
        const listOfMovies: IMovie[] = [
            {Title: 'Remember Me', Year: '2010', imdbID: 'tt1403981', Type: 'movie', Poster: 'https://m.media-amazon.com/images/M/MV5BOTA4MTg1ODkwNF5BMl5BanBnXkFtZTcwMzE5ODAxMw@@._V1_SX300.jpg'},
            {Title: 'The Green Mile', Year: '1999', imdbID: 'tt0120689', Type: 'movie', Poster: 'https://m.media-amazon.com/images/M/MV5BMTUxMzQyNjA5MF5BMl5BanBnXkFtZTYwOTU2NTY3._V1_SX300.jpg'},
            {Title: 'The Departed', Year: '2006', imdbID: 'tt0407887', Type: 'movie', Poster: 'https://m.media-amazon.com/images/M/MV5BMTI1MTY2OTIxNV5BMl5BanBnXkFtZTYwNjQ4NjY3._V1_SX300.jpg'},
            {Title: 'Anaconda', Year: '1997', imdbID: 'tt0118615', Type: 'movie', Poster: 'https://m.media-amazon.com/images/M/MV5BZDc4ODcyNWMtMzI2Zi00YzcwLWE4ZTUtYWM3OWI1MTgwYTc1XkEyXkFqcGdeQXVyNzc5MjA3OA@@._V1_SX300.jpg'},
            {Title: 'Remember Me', Year: '2010', imdbID: 'tt1403981', Type: 'movie', Poster: 'https://m.media-amazon.com/images/M/MV5BOTA4MTg1ODkwNF5BMl5BanBnXkFtZTcwMzE5ODAxMw@@._V1_SX300.jpg'},
            {Title: 'Shutter Island', Year: '2010', imdbID: 'tt1130884', Type: 'movie', Poster: 'https://m.media-amazon.com/images/M/MV5BYzhiNDkyNzktNTZmYS00ZTBkLTk2MDAtM2U0YjU1MzgxZjgzXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg'}
        ];

        //Act
        functions.movieSort(listOfMovies);

        //Assert
        expect(listOfMovies[0].Title).toEqual('Anaconda');
        expect(listOfMovies[listOfMovies.length - 1].Title).toEqual('The Green Mile');
    })
    test('Should sort movies in reverse alpabetical order', () => {
        //Arrange
        const listOfMovies: IMovie[] = [
            {Title: 'Remember Me', Year: '2010', imdbID: 'tt1403981', Type: 'movie', Poster: 'https://m.media-amazon.com/images/M/MV5BOTA4MTg1ODkwNF5BMl5BanBnXkFtZTcwMzE5ODAxMw@@._V1_SX300.jpg'},
            {Title: 'The Green Mile', Year: '1999', imdbID: 'tt0120689', Type: 'movie', Poster: 'https://m.media-amazon.com/images/M/MV5BMTUxMzQyNjA5MF5BMl5BanBnXkFtZTYwOTU2NTY3._V1_SX300.jpg'},
            {Title: 'The Departed', Year: '2006', imdbID: 'tt0407887', Type: 'movie', Poster: 'https://m.media-amazon.com/images/M/MV5BMTI1MTY2OTIxNV5BMl5BanBnXkFtZTYwNjQ4NjY3._V1_SX300.jpg'},
            {Title: 'Anaconda', Year: '1997', imdbID: 'tt0118615', Type: 'movie', Poster: 'https://m.media-amazon.com/images/M/MV5BZDc4ODcyNWMtMzI2Zi00YzcwLWE4ZTUtYWM3OWI1MTgwYTc1XkEyXkFqcGdeQXVyNzc5MjA3OA@@._V1_SX300.jpg'},
            {Title: 'Remember Me', Year: '2010', imdbID: 'tt1403981', Type: 'movie', Poster: 'https://m.media-amazon.com/images/M/MV5BOTA4MTg1ODkwNF5BMl5BanBnXkFtZTcwMzE5ODAxMw@@._V1_SX300.jpg'},
            {Title: 'Shutter Island', Year: '2010', imdbID: 'tt1130884', Type: 'movie', Poster: 'https://m.media-amazon.com/images/M/MV5BYzhiNDkyNzktNTZmYS00ZTBkLTk2MDAtM2U0YjU1MzgxZjgzXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg'}
        ];

        //Act
        functions.movieSort(listOfMovies, false);

        //Assert
        expect(listOfMovies[0].Title).toEqual('The Green Mile');
        expect(listOfMovies[listOfMovies.length - 1].Title).toEqual('Anaconda');
    });
});