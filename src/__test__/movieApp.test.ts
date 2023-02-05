/**
    * @jest-environment jsdom
*/

import * as movieApp from '../ts/movieApp';
import { mockListOfMovies } from '../ts/services/__mocks__/movieservicemock';
import { IMovie } from '../ts/models/Movie';
import { getData } from '../ts/services/movieservice';
import axios from 'axios';

jest.mock('axios');
const mockAxios = axios as jest.Mocked<typeof axios>;

beforeEach(() => {
    document.body.innerHTML = '';
});

test('Should call handleSubmit on submit', () => {
    //Arrange
    document.body.innerHTML = `
        <form id="searchForm">
            <input type="text" id="searchText" placeholder="Skriv titel här" />
            <button type="submit" id="search">Sök</button>
        </form>
    `;

    const submitForm = document.getElementById('searchForm') as HTMLFormElement;
    const spyOnHandleSubmit = jest.spyOn(movieApp, 'handleSubmit').mockReturnValue(
        new Promise<void>((resolve)=> {
            resolve();
        })
    );

    //Act
    movieApp.init();
    submitForm.submit();

    //Assert
    expect(spyOnHandleSubmit).toHaveBeenCalled();
    spyOnHandleSubmit.mockRestore();
});

describe('Tests related to handleSubmit', () => {
    test('Should call createHtml', async () => {
        document.body.innerHTML = `
            <input type="text" id="searchText" placeholder="Skriv titel här" />
            <div id="movie-container"></div>
        `;

        const searchText = (document.getElementById('searchText') as HTMLInputElement).value = 'Success';
        const movieContainer: HTMLDivElement = document.getElementById("movie-container") as HTMLDivElement;
        const spyOnCreateHtml = jest.spyOn(movieApp, 'createHtml').mockReturnValue();

        mockAxios.get.mockResolvedValue({ data: { Search: mockListOfMovies } });

        //act
        await movieApp.handleSubmit();
        const listOfMovies: IMovie[] = await getData(searchText);
    
        //assert
        expect(listOfMovies.length).toEqual(mockListOfMovies.length);
        expect(spyOnCreateHtml).toHaveBeenCalled();
        expect(spyOnCreateHtml).toHaveBeenCalledWith(listOfMovies, movieContainer);
        spyOnCreateHtml.mockRestore();
    });

    test('Should call displayNoResults', async () => {
        //Arrange
        document.body.innerHTML = `
            <input type="text" id="searchText" placeholder="Skriv titel här" />
            <div id="movie-container"></div>
        `;

        (document.getElementById('searchText') as HTMLInputElement).value = 'Display error';
        const spyOnDisplayNoResults = jest.spyOn(movieApp, 'displayNoResult').mockReturnValue();

        mockAxios.get.mockRejectedValue({ data: { Search: mockListOfMovies } });

        //act
        await movieApp.handleSubmit();
    
        //assert
        expect(spyOnDisplayNoResults).toHaveBeenCalled();
        spyOnDisplayNoResults.mockRestore();
    });

    test('Should call displayNoResults on catch path', async () => {
        //Arrange
        document.body.innerHTML = `
            <input type="text" id="searchText" placeholder="Skriv titel här" />
            <div id="movie-container"></div>
        `;

        (document.getElementById('searchText') as HTMLInputElement).value = 'Display error';
        const spyOnDisplayNoResult = jest.spyOn(movieApp, 'displayNoResult').mockReturnValue();

        mockAxios.get.mockImplementation(() => {
            throw new Error('Display error');
        });
        
        // Act
        await movieApp.handleSubmit();
        
        // Assert
        expect(spyOnDisplayNoResult).toHaveBeenCalled();
        spyOnDisplayNoResult.mockRestore();
    });
});

test('Should create HTML elements', () => {
    //Arrange
    document.body.innerHTML = `
        <div id="movie-container"></div>
    `;

    const movieContainer = document.getElementById('movie-container') as HTMLDivElement;

    //Act
    movieApp.createHtml(mockListOfMovies, movieContainer);

    //Assert
    const listOfMovies = document.querySelectorAll('.movie');
    expect(listOfMovies.length).toEqual(mockListOfMovies.length);
    expect(movieContainer.innerHTML).toContain('h3');
    expect(movieContainer.innerHTML).toContain('img');
});

test('Should display the noMessage', () => {
    //Arrange
    document.body.innerHTML = `
        <div id="movie-container"></div>
    `;

    const movieContainer = document.getElementById('movie-container') as HTMLDivElement;

    //Act
    movieApp.displayNoResult(movieContainer);

    //Assert
    expect(movieContainer.innerHTML).toContain('p');
    expect(movieContainer.textContent).toEqual('Inga sökresultat att visa');
});