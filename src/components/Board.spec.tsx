import React from 'react';
import { render } from '@testing-library/react';
import { Board } from './Board';

describe('Board', () => {
  it('should render', () => {
    const board = render(<Board />);

    expect(board.queryByTestId('board-root')).toBeTruthy();
  });
});
