export const useIncrement = (counter: number, setCounter: any) => {
  const increment = () => {
    setCounter(counter + 1);
  };
  return increment;
};


export const useDecrement = (counter: number, setCounter: any) => {
  const decrement = () => {
    setCounter(counter - 1);
  };
  return decrement;
};
