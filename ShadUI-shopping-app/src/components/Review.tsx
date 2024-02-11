import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const Review = () => {
  return (
    <div className="group h-[300px] w-[300px] rounded-xl bg-[url(https://images.unsplash.com/photo-1707593655398-a9eb0f94ffe9?q=80&w=1970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] relative overflow-hidden bg-center bg-cover">
      <div className="bg-slate-200/80 rounded-xl absolute w-full p-2 -mt-[20%] group-hover:mt-0 h-full transform translate-y-full transition delay-75 group-hover:translate-y-0 ease-in-out">
        <div className="flex gap-2 items-center ">
          <Avatar className="h-8 w-8 border border-slate-600">
            <AvatarImage
              src="https://ui.shadcn.com/avatars/01.png"
              alt="@shadcn"
            />
            <AvatarFallback>AD</AvatarFallback>
          </Avatar>
          <p className="text-sm font-medium leading-none">Sofia Davis</p>
        </div>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Reprehenderit, culpa possimus. Rem illo maiores aliquam, eveniet sunt
          vel iusto. Neque quae dignissimos nobis fugit iusto id dolore nihil
          assumenda culpa!
        </p>
      </div>
    </div>
  );
};

export default Review;
