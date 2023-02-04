/**
    * @jest-environment jsdom
*/

import * as movieApp from '../ts/movieApp'

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

describe('Functions related to handleSubmit', () => {
    test('Should call createHtml', async () => {
        document.body.innerHTML = `
            <input type="text" id="searchText" placeholder="Skriv titel här" />
            <div id="movie-container"></div>
        `;

        (document.getElementById('searchText') as HTMLInputElement).value = 'test';
        const spyOnCreateHtml = jest.spyOn(movieApp, 'createHtml').mockReturnValue();

        //Act
        await movieApp.handleSubmit();

        //Assert
        expect(spyOnCreateHtml).toHaveBeenCalled();
        spyOnCreateHtml.mockRestore();
    });

    test('Should call displayNoResults again', async () => {
        //Arrange
        document.body.innerHTML = `
            <input type="text" id="searchText" placeholder="Skriv titel här" />
            <div id="movie-container"></div>
        `;

        (document.getElementById('searchText') as HTMLInputElement).value = '';
        const spyOnDisplayNoResults = jest.spyOn(movieApp, 'displayNoResult').mockReturnValue();

        //Act
        await movieApp.handleSubmit();

        //Assert
        expect(spyOnDisplayNoResults).toHaveBeenCalled();
        spyOnDisplayNoResults.mockRestore();
    })
})

        //Arrange

        //Act

        //Assert