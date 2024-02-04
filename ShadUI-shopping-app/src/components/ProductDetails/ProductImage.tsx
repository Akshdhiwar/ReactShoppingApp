import { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

interface ProductImageProps {
  productImage: string | undefined;
}

const ProductImage: React.FC<ProductImageProps> = ({ productImage }) => {
  const [selectedImage, setSelectedImage] = useState(0);

  let imageArray = [
    productImage,
    "https://images.unsplash.com/photo-1706016868884-4d0e348a1647?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1684164601910-e4e179d574f0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1706441919995-d0d0320b4fe5?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1706720094778-5156e8b656e2?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1682687979601-082a1295b78f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1706782775091-02834fb6cae8?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  return (
    <div className="flex sm:flex-row flex-col-reverse">
      <div className="sm:w-[120px] sm:py-14 sm:px-0 px-12 w-full">
        <Carousel
          opts={{
            align: "start",
          }}
          orientation={window.innerWidth < 640 ? "horizontal" : "vertical"}
          className="w-full"
        >
          <CarouselContent className="-mt-1 max-h-[600px] w-full">
            {imageArray.map((ele, index) => (
              <CarouselItem key={index} className="basis-2/5">
                <img
                  key={index}
                  src={ele}
                  alt=""
                  className={`lg:h-[120px] h-[90px] w-full aspect-square object-cover p-2 hover:cursor-pointer ${
                    selectedImage == index ? "border" : ""
                  }`}
                  onClick={() => setSelectedImage(index)}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
      <div className=" flex-1">
        <img
          src={imageArray[selectedImage]}
          alt=""
          className="h-full w-full aspect-square object-cover p-2"
        />
      </div>
    </div>
  );
};

export default ProductImage;
