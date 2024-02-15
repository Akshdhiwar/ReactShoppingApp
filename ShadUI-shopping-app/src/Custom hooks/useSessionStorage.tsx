export const useSessionStorage = (key: string) => {
  const setItem = (value: unknown) => {
    sessionStorage.setItem(key, JSON.stringify(value));
  };

  const getItem = () => {
    try {
      const item = sessionStorage.getItem(key);
      if (item) {
        return JSON.parse(item);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return { setItem, getItem };
};
