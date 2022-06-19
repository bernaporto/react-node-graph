import { createToogle } from './utils';

type TUnsubscribe = VoidFunction;

export function onDrag(
  targetEl: HTMLElement,
  listener: (evt: MouseEvent) => void
): TUnsubscribe {
  const dragging = createToogle(false);

  const callback = (evt: MouseEvent) => {
    if (!dragging.value) return;

    listener(evt);
  };

  targetEl.addEventListener('mousedown', dragging.on);
  document.addEventListener('mouseup', dragging.off);
  document.addEventListener('mousemove', callback);

  return () => {
    targetEl.removeEventListener('mousedown', dragging.on);
    document.removeEventListener('mouseup', dragging.off);
    document.removeEventListener('mousemove', callback);
  };
}
