import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";

const OrderSuccess = () => {

  const navigate = useNavigate()

  return (
    <>
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
      <div className="container px-4 md:px-6 flex flex-col items-center justify-center text-center space-y-6">
        <div className="bg-green-100 dark:bg-green-900 p-4 rounded-full">
          <CheckIcon className="h-12 w-12 text-green-500 dark:text-green-400" />
        </div>
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Order Placed Successfully!</h1>
        <div className="max-w-md space-y-4">
          <p className="text-gray-500 dark:text-gray-400">
            Thank you for your order. We've received your order and will begin processing it shortly. You'll receive a
            confirmation email with your order details.
          </p>
          <div className="grid sm:grid-cols-2 gap-4 text-left">
            <div>
              <h3 className="text-lg font-medium">Order #</h3>
              <p>12345</p>
            </div>
            <div>
              <h3 className="text-lg font-medium">Total</h3>
              <p>$99.00</p>
            </div>
            <div>
              <h3 className="text-lg font-medium">Payment Method</h3>
              <p>Visa ending in 1234</p>
            </div>
            <div>
              <h3 className="text-lg font-medium">Delivery</h3>
              <p>2-3 business days</p>
            </div>
            <div>
              <h3 className="text-lg font-medium">Product</h3>
              <div className="flex items-center gap-4">
                <img
                  alt="Product Image"
                  className="rounded-md"
                  height={64}
                  src="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"
                  style={{
                    aspectRatio: "64/64",
                    objectFit: "cover",
                  }}
                  width={64}
                />
                <div>
                  <p className="font-medium">Acme Circles T-Shirt</p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">Quantity: 1</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6 flex flex-col items-center justify-center text-center space-y-6">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Explore More Products</h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-md">
            Check out our latest collection and find something you'll love.
          </p>
        </div>
        <Button
          onClick={() => {
            navigate("/dashboard");
          }}
        >
          Shop Now
        </Button>
      </div>
    </section>
  </>
  )
}

export default OrderSuccess

interface CheckIconProps {
    className?: string;
    // Define other props here if needed
  }
  

function CheckIcon(props : CheckIconProps) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M20 6 9 17l-5-5" />
      </svg>
    )
  }