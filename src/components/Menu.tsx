import './Menu.css';
import React, { ChangeEventHandler } from 'react';
import { capitalize } from '../tools';
import { useNodes } from '../store';
import { nodeType, TNodeType } from '../nodes';

export function Menu() {
  const { addNode } = useNodes();

  const handleOnChange: ChangeEventHandler<HTMLSelectElement> = (event) => {
    event.preventDefault();

    addNode(event.target.value as TNodeType);
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
          Add Node
        </option>

        {/* Menu options */}
        {nodeType.map((type) => (
          <option key={type} value={type} className="menu-dropdown-option">
            {capitalize(type)}
          </option>
        ))}
      </select>
    </section>
  );
}
