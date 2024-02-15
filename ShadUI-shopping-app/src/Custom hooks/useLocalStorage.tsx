export const useLocalStorage = (key: string) => {
  const setItem = (value: unknown) => {
    localStorage.setItem(key, JSON.stringify(value));
  };

  const getItem = () => {
    try {
      const item = localStorage.getItem(key);
      if (item) {
        return JSON.parse(item);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return { setItem, getItem };
};
