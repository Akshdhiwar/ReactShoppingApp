import { useLocation } from "react-router-dom"
import OrderSuccess from "../components/OrderSuccess";
import OrderFailed from "../components/OrderFailed";

const OrderStatus = () => {

    const location = useLocation()
    const query = new URLSearchParams(location.search)
    const successParam = query.get("success");


    return (
        <>
            {
                successParam === "true" ? <OrderSuccess /> : <OrderFailed />
            }
        </>
    )
}

export default OrderStatus