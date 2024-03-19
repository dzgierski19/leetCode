type Counter = {
  increment: () => number;
  decrement: () => number;
  reset: () => number;
};

function createCounter(init: number): Counter {
  const init2 = init;
  const object: Counter = {
    increment: () => {
      return (init += 1);
    },
    decrement: () => {
      return (init -= 1);
    },
    reset: () => {
      return (init = init2);
    },
  };
  return object;
}
