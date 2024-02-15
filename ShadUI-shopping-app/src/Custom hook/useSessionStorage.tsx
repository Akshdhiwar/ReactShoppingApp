export const useSessionStorage = (key: string) => {
  const getItem = () => {
    try {
      let item = sessionStorage.getItem(key);
      return item ? JSON.parse(item) : undefined;
    } catch (error) {
      console.log(error);
    }
  };

  const setItem = (value: unknown) => {
    try {
      sessionStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.log(error);
    }
  };

  return { getItem, setItem };
};
