import { useNavigate } from "react-router-dom"
import { Button } from "./ui/button"


const OrderFailed = () => {

    const navigate = useNavigate()

    return (
        <div className="flex flex-col items-center justify-center min-h-screen gap-6 px-4 md:px-6">
            <div className="max-w-md w-full space-y-4 text-center">
                <CircleAlertIcon className="w-12 h-12 mx-auto text-red-500" />
                <h1 className="text-2xl font-bold">Order Failed</h1>
                <p className="text-gray-500 dark:text-gray-400">
                    We're sorry, but there was an issue processing your order. Please try again.
                </p>
                <div className="space-x-4">
                    <Button variant={"secondary"} onClick={()=>navigate("/dashboard")}>Back</Button>
                    <Button >Try Again</Button>
                </div>
            </div>
        </div>
    )
}

export default OrderFailed

interface CircleAlertIconProps {
    className: string
}

function CircleAlertIcon(props: CircleAlertIconProps) {
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
            <circle cx="12" cy="12" r="10" />
            <line x1="12" x2="12" y1="8" y2="12" />
            <line x1="12" x2="12.01" y1="16" y2="16" />
        </svg>
    )
}