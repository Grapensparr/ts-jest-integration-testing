import { mockListOfMovies } from '../ts/services/__mocks__/movieservicemock';
import { IMovie } from '../ts/models/Movie';
import { getData } from '../ts/services/movieservice';

jest.mock('axios', () => ({
    get: async (url: string) => {
        return new Promise((resolve, reject) => {
            if(url.endsWith('Display error')) {
                reject([]);
            } else {
                resolve({ data: { Search: mockListOfMovies } });
            };
        });
    }
}));

describe('Tests related to getData', () => {
    test('Should retrieve mock data', async () => {
        //Arrange
        
        //Act
        const listOfMovies: IMovie[] = await getData('Success');
  
        //Assert
        expect(listOfMovies.length).toEqual(6);
    });

    test("should not retrieve mock data", async () => {
        //Arrange

        //Act
        const listOfMovies: IMovie[] = await getData('Display error');
    
        //Assert
        expect(listOfMovies.length).toEqual(0);
    });
});
