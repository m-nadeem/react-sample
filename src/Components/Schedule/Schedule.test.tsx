import React from 'react';
import { render } from '@testing-library/react';
import { mock } from 'jest-mock-extended';
import Schedule from './Schedule';
import { IOpeningHours } from '../../Interfaces/IOpeningHours';

test('Schedule test', () => {
    const state = mock<IOpeningHours>();
    const { getByText } = render(<Schedule openingHours={state} />);
    expect(getByText).toBeDefined();
});
