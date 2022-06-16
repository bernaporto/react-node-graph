import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { IMenuProps, Menu } from './Menu';

const noop = () => {
  /* noop */
};
const testOptions = ['optionA', 'optionB'];

const menuTestProps: IMenuProps = {
  onSelectOption: noop,
  options: testOptions,
  title: 'Test Title',
};

describe('Menu', () => {
  it('should render', () => {
    const menu = render(<Menu {...menuTestProps} />);

    expect(menu.queryByTestId('menu-root')).toBeTruthy();
  });

  it('should include a dropdown menu element', () => {
    const menu = render(<Menu {...menuTestProps} />);

    expect(menu.queryByTestId('menu-dropdown')).toBeTruthy();
  });

  it('should call `onSelectOption` once an option is selected', async () => {
    const spyFn = jest.fn();
    const menu = render(<Menu {...menuTestProps} onSelectOption={spyFn} />);

    const testOption = testOptions[0];
    const dropdown = menu.getByTestId('menu-dropdown');

    await userEvent.selectOptions(dropdown, testOption);

    expect(spyFn).toBeCalledTimes(1);
    expect(spyFn).toBeCalledWith(testOption);
  });
});
