import { mockListOfMovies } from '../ts/services/__mocks__/movieservicemock';
import { IMovie } from '../ts/models/Movie';
import { getData } from '../ts/services/movieservice';
import axios from 'axios';

jest.mock('axios');
const mockAxios = axios as jest.Mocked<typeof axios>;

describe('Functions related to getData', () => {
    test('Should retrieve mock data', async () => {
        //Arrange
        mockAxios.get.mockResolvedValue({ data: { Search: mockListOfMovies } });
        
        //Act
        const listOfMovies: IMovie[] = await getData('test');
  
        //Assert
        expect(listOfMovies.length).toEqual(6);
    });

    test("should not retrieve mock data", async () => {
        //Arrange
        mockAxios.get.mockRejectedValue({ data: { Search: mockListOfMovies } });

        //Act
        const listOfMovies: IMovie[] = await getData('error');
    
        //Assert
        expect(listOfMovies.length).toEqual(0);
    });
});
