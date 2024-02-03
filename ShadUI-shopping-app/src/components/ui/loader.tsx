import { Icons } from "./Icons";

const Loader = () => {
  return (
    <div className="h-full w-full flex items-center justify-center">
      <Icons.spinner className="mr-2 h-12 w-12 animate-spin" />
    </div>
  );
};

export default Loader;
