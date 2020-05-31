import React from 'react';
import { render } from '@testing-library/react';
import useRefactorObject from './CustomHooks';
import { DataService } from '../Services/DataService';

test('return array from object', async () => {
    const dataService = new DataService();
    const data = { count: 4 };
    dataService.getData = jest.fn(() => data as any);
    const hookResult = useRefactorObject({});
    expect(hookResult).toEqual([]);
});