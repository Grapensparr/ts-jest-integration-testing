import * as functions from "../ts/functions";
import { mockListOfMovies } from "../ts/services/__mocks__/movieservicemock";

describe('Tests related to movieSort', () => {
    test('Should sort movies in alpabetical order', () => {
        //Arrange
        const movies = mockListOfMovies;

        //Act
        functions.movieSort(movies);

        //Assert
        expect(movies[0].Title).toBe('Anaconda')
        expect(movies[5].Title).toBe('The Green Mile')
    })
    test('Should sort movies in reverse alpabetical order', () => {
        //Arrange
        const movies = mockListOfMovies;

        //Act
        functions.movieSort(movies, false);

        //Assert
        expect(movies[0].Title).toBe('The Green Mile')
        expect(movies[5].Title).toBe('Anaconda')
    })
})