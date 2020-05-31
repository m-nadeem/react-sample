import React from 'react';
import { render } from '@testing-library/react';
import ClinicList from './ClinicList';
import { IClinic } from '../../Interfaces/IClinic';
import { mock } from 'jest-mock-extended';

test('hooks test', () => {
    const state = mock<Array<IClinic>>();
  const { getByText } = render(<ClinicList clinics={state} />);  
  expect(getByText).toBeDefined();
});
