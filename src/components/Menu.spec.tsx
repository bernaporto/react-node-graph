import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Menu } from './Menu';
import { TNodeType } from '../nodes';

const addNodeMock = jest.fn();
jest.mock('../store', () => {
  const useNodes = () => ({
    nodes: [],
    addNode: addNodeMock,
    onNodesChange: () => {
      /* noop */
    },
  });

  return {
    ...jest.requireActual('../store'),
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

  it('should include a dropdown menu element', () => {
    const menu = render(<Menu />);

    expect(menu.queryByTestId('menu-dropdown')).toBeTruthy();
  });

  it('should call `addNode` once an option is selected', async () => {
    const menu = render(<Menu />);

    const testOption: TNodeType = 'query';
    const dropdown = menu.getByTestId('menu-dropdown');

    await userEvent.selectOptions(dropdown, testOption);

    expect(addNodeMock).toBeCalledTimes(1);
    expect(addNodeMock).toBeCalledWith(testOption);
  });
});
