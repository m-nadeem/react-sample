import { DataService } from './DataService';

test('Fetches data from API', () => {
    const dataService = new DataService();
    dataService.getData()
    expect(dataService.getData()).toBeInstanceOf(Promise);
});