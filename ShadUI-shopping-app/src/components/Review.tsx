import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const Review = () => {
  return (
    <ul className="md:columns-2 lg:columns-3 xl:columns-4 space-y-4 md:space-y-6 md:gap-6 mx-auto">
      {
        [1, 2, 3, 4, 5, 6, 7, 8].map((e) => {
          return (
            <li className="break-inside-avoid" key={e}>
              <figure className="relative h-full w-full max-w-[500px] p-6 rounded-xl border border-orange-500/50 bg-base-100 ">
                {
                  e == 4 && (<img src="https://github.com/shadcn.png" className="mb-2" alt="review" />)
                }

                <blockquote>
                  I managed to exit & <span className=" text-primary-content px-0.5">sell for 5 figures in a few weeks.</span>  Best investment I've made in so long.
                </blockquote>
                <figcaption className="relative flex items-center justify-start gap-4 pt-4 mt-4 border-t border-base-content/10">
                  <div className="overflow-hidden rounded-full bg-base-300 shrink-0">
                    <Avatar>
                      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                  </div>
                  <div className="w-full flex items-end justify-between gap-2">
                    <p className="text-sm font-medium text-base-content">Akash Dhiwar</p>
                  </div>
                </figcaption>
              </figure>
            </li>
          )
        })
      }

      <li className="break-inside-avoid">
        <figure className="relative h-full w-full max-w-[500px] p-6 rounded-xl border border-orange-500/50 bg-base-100 hover:shadow-sm">
          <video className="mb-2" controls> <source src="https://d1wkquwg5s1b04.cloudfront.net/landing/jack2.mp4"/></video>
          <blockquote>
            I managed to exit & <span className=" text-primary-content px-0.5">sell for 5 figures in a few weeks.</span>  Best investment I've made in so long.
          </blockquote>
          <figcaption className="relative flex items-center justify-start gap-4 pt-4 mt-4 border-t border-base-content/10">
            <div className="overflow-hidden rounded-full bg-base-300 shrink-0">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>
            <div className="w-full flex items-end justify-between gap-2">
              <p className="text-sm font-medium text-base-content">Akash Dhiwar</p>
            </div>
          </figcaption>
        </figure>
      </li>
    </ul>
  );
};

export default Review;
