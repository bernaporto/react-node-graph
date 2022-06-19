import React, { FC, useEffect, useRef } from 'react';
import { onDrag } from './onDrag';

export function makeDraggable<P>(Component: FC<P>, targetId: string): FC<P> {
  return function DraggableComponent(props: P) {
    const rootRef = useRef<HTMLElement>();

    useEffect(() => {
      if (!rootRef.current) return;
      const evtTargetEl = rootRef.current.querySelector(
        `#${targetId}`
      ) as HTMLElement;

      if (!evtTargetEl) {
        console.error(
          `Failed to configure draggable component. Missing element with targetId '${targetId}'`
        );
      }

      return configDraggableElement(rootRef.current, evtTargetEl);
    }, [rootRef.current]);

    return <Component {...props} ref={rootRef} />;
  };
}

function configDraggableElement(
  draggableEl: HTMLElement,
  evtTargetEl: HTMLElement
) {
  if (draggableEl.style.position !== 'absolute') {
    draggableEl.style.position = 'absolute';
  }

  return onDrag(evtTargetEl, (evt) => {
    const { movementX: x, movementY: y } = evt;

    const { left, top } = draggableEl.getBoundingClientRect();
    draggableEl.style.left = `${left + x}px`;
    draggableEl.style.top = `${top + y}px`;
  });
}
