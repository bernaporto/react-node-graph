import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Menu } from './Menu';
import { TNodeType } from '../nodes';

const addNodeMock = jest.fn();
jest.mock('../hooks', () => {
  const useNodes = () => ({
    nodes: [],
    addNode: addNodeMock,
    onNodesChange: () => {
      /* noop */
    },
  });

  return {
    ...jest.requireActual('../hooks'),
    useNodes,
  };
});

describe('Menu', () => {
  afterEach(() => {
    addNodeMock.mockClear();
  });

  it('should render', () => {
    const menu = render(<Menu />);

    expect(menu.queryByTestId('menu-root')).toBeTruthy();
  });

  it('should call `addNode` once an option is clicked', async () => {
    const menu = render(<Menu />);

    const testOption: TNodeType = 'query';
    const button = menu.getByTestId(`menu-button-${testOption}`);

    await userEvent.click(button);

    expect(addNodeMock).toBeCalledTimes(1);
    expect(addNodeMock).toBeCalledWith(testOption);
  });
});
