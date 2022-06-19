interface IToggle {
  value: boolean;
  on: VoidFunction;
  off: VoidFunction;
}

export function createToogle(initialValue = true): IToggle {
  let active = initialValue;

  return {
    get value() {
      return active;
    },
    on: () => (active = true),
    off: () => (active = false),
  };
}
