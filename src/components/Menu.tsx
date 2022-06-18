import './Menu.css';
import React, { ChangeEventHandler } from 'react';

export interface IOptionDescriptor<T extends string> {
  type: T;
  label: string;
}

export interface IMenuProps<T extends string> {
  onSelectOption: (option: T) => void;
  options: IOptionDescriptor<T>[];
  title: string;
}

export function Menu<T extends string>(props: IMenuProps<T>) {
  const { onSelectOption, options, title } = props;

  const handleOnChange: ChangeEventHandler<HTMLSelectElement> = (event) => {
    event.preventDefault();

    onSelectOption(event.target.value as T);
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
        {options.map(({ type, label }) => (
          <option key={type} value={type}>
            {label}
          </option>
        ))}
      </select>
    </section>
  );
}
