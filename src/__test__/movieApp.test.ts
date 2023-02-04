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
    let spyOnHandleSubmit = jest.spyOn(movieApp, 'handleSubmit').mockReturnValue(
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