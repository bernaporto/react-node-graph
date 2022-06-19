import './Menu.css';
import React, { FC, MouseEventHandler } from 'react';
import { INodeMenuButtonConfig, nodeConfig } from '../nodes';
import { useNodes } from '../hooks';

export const Menu: FC = () => (
  <section className="menu-root" data-testid="menu-root">
    <p className="menu-title">Add Node</p>

    {Object.values(nodeConfig).map((buttonConfig, index) => (
      <MenuButton key={`${buttonConfig.nodeType}_${index}`} {...buttonConfig} />
    ))}
  </section>
);

function MenuButton(props: INodeMenuButtonConfig) {
  const { label, nodeType: type, max } = props;
  const { addNode, nodes } = useNodes();

  const isDisabled = max
    ? nodes.filter(({ data: { nodeType } }) => nodeType === type).length >= max
    : false;

  const handleClick: MouseEventHandler<HTMLDivElement> = (evt) => {
    if (isDisabled) return;

    evt.preventDefault();
    addNode(type);
  };

  const classes = ['menu-option', isDisabled ? 'disabled' : ''].join(' ');

  return (
    <div
      className={classes}
      onClick={handleClick}
      data-testid={`menu-button-${type}`}
    >
      <p className="menu-option-label">{label}</p>
      <p>&#x2B;</p>
    </div>
  );
}
