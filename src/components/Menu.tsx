import './Menu.css';
import React, { ChangeEventHandler, FC } from 'react';

export interface IMenuProps {
  onSelectOption: (option: string) => void;
  options: string[];
  title: string;
}

export const Menu: FC<IMenuProps> = (props) => {
  const { onSelectOption, options, title } = props;

  const handleOnChange: ChangeEventHandler<HTMLSelectElement> = (event) => {
    event.preventDefault();

    onSelectOption(event.target.value);
  };

  return (
    <section className="menu-container" data-testid="menu-root">
      <select
        className="menu-dropdown"
        data-testid="menu-dropdown"
        value="title"
        onChange={handleOnChange}
      >
        {/* Menu title */}
        <option value="title" disabled>
          {title}
        </option>

        {/* Menu options */}
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </section>
  );
};
