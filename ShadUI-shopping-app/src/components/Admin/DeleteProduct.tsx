import { useNavigate } from "react-router-dom"
import axiosHttp from "../../axiosHandler/axiosHandler"
import { Button } from "../ui/button"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog"
import { Trash } from "lucide-react"

interface DeleteProductProps {
    buttonName: string
    id: string
    type: string
}

const DeleteProduct: React.FC<DeleteProductProps> = ({ buttonName, id, type }) => {

    const navigate = useNavigate()

    function deleteProduct() {
        axiosHttp.delete(`/products/${id}`).then(
            () => navigate(-1)
        )
    }

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className={type === "icon" ? "h-8 w-8 text-red-500" : ""} variant="outline" size={type === "icon" ? type : "sm"}>{type === "icon" ? <Trash className="h-4 w-4" ></Trash> : buttonName}</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Delete Product</DialogTitle>
                    <DialogDescription>
                        Are you sure you want to delete the specific product ?
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                    <Button onClick={deleteProduct}>Delete</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

export default DeleteProduct