import { MiscService } from './MiscService';

test('Gets day index starting from Monday', () => {
    const dataService = new MiscService();
    var dayIndex = dataService.DayIndex('Monday');
    expect(dayIndex).toEqual(0);
});