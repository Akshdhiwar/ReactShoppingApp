import { Edit, ListFilter, PlusCircle, Search } from "lucide-react"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "../ui/breadcrumb"
import { Input } from "../ui/input"
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/dropdown-menu"
import { Button } from "../ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table'
import { Badge } from "../ui/badge"
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import axiosHttp from "../../axiosHandler/axiosHandler"
import iProduct from "../../Interfaces/Products"
import DateFormater from "../DateFormater"
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet"
import AddProduct from "./AddProduct"
import DeleteProduct from "./DeleteProduct"


const ProductList = () => {
    const navigate = useNavigate();
    const [products, setProduct] = useState<iProduct[] | []>([])
    const [sheetOpen, setSheetOpen] = useState(false);
    useEffect(() => {
        if(sheetOpen) return
        getProducts()
    }, [sheetOpen])

    function getProducts(){
        axiosHttp.get(`products/`).then((result) => {
            setProduct(result.data)
        });
    }

    return (
        <Sheet  open={sheetOpen} onOpenChange={setSheetOpen}>
            <div className="flex min-h-screen w-full flex-col bg-muted/40">
                <div className="flex flex-col sm:gap-4 sm:py-4">
                    <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
                        <Breadcrumb className="hidden md:flex">
                            <BreadcrumbList>
                                <BreadcrumbItem>
                                    <BreadcrumbLink asChild>
                                        <a href="#">Dashboard</a>
                                    </BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator />
                                <BreadcrumbItem>
                                    <BreadcrumbLink asChild>
                                        <a href="#">Products</a>
                                    </BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator />
                                <BreadcrumbItem>
                                    <BreadcrumbPage>All Products</BreadcrumbPage>
                                </BreadcrumbItem>
                            </BreadcrumbList>
                        </Breadcrumb>
                        <div className="relative ml-auto flex-1 md:grow-0">
                            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                            <Input
                                type="search"
                                placeholder="Search..."
                                className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[320px]"
                            />
                        </div>
                        <div className="flex items-center">
                            <div className="ml-auto flex items-center gap-2">
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <Button variant="outline" size="sm" className=" gap-1">
                                            <ListFilter className="h-3.5 w-3.5" />
                                            <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                                                Filter
                                            </span>
                                        </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent align="end">
                                        <DropdownMenuLabel>Filter by</DropdownMenuLabel>
                                        <DropdownMenuSeparator />
                                        <DropdownMenuCheckboxItem checked>
                                            Active
                                        </DropdownMenuCheckboxItem>
                                        <DropdownMenuCheckboxItem>Draft</DropdownMenuCheckboxItem>
                                        <DropdownMenuCheckboxItem>
                                            Archived
                                        </DropdownMenuCheckboxItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                                <SheetTrigger asChild>
                                    <Button size="sm" className="gap-1" onClick={()=>setSheetOpen(true)}>
                                        <PlusCircle className="h-3.5 w-3.5" />
                                        <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                                            Add Product
                                        </span>
                                    </Button>
                                </SheetTrigger>
                            </div>
                        </div>
                    </header>
                    <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
                        <Card x-chunk="dashboard-06-chunk-0">
                            <CardHeader>
                                <CardTitle>Products</CardTitle>
                                <CardDescription>
                                    Manage your products and view their sales performance.
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <Table>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead className="hidden w-[100px] sm:table-cell">
                                                <span className="sr-only">Image</span>
                                            </TableHead>
                                            <TableHead>Name</TableHead>
                                            <TableHead>Status</TableHead>
                                            <TableHead>Price</TableHead>
                                            <TableHead className="hidden md:table-cell">
                                                Created at
                                            </TableHead>
                                            <TableHead>
                                                <span className="sr-only">Actions</span>
                                            </TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {
                                            products.map((product) => (
                                                <TableRow>
                                                    <TableCell className="hidden sm:table-cell">
                                                        <img
                                                            alt="Product image"
                                                            className="aspect-square rounded-md object-cover"
                                                            height="64"
                                                            src={product.Image}
                                                            width="64"
                                                        />
                                                    </TableCell>
                                                    <TableCell className="font-medium">
                                                        {product.Title}
                                                    </TableCell>
                                                    <TableCell>
                                                        <Badge variant="outline">Active</Badge>
                                                    </TableCell>
                                                    <TableCell>${product.Price}</TableCell>
                                                    <TableCell className="hidden md:table-cell">
                                                        <DateFormater isoDate={product.CreatedAt}></DateFormater>
                                                    </TableCell>
                                                    <TableCell>
                                                        <div className="flex items-center gap-2">
                                                            <Button variant="outline" size="icon" className="h-8 w-8" onClick={() => navigate(`/admin/products/edit-product/${product.ID}`)} ><Edit className="h-4 w-4"></Edit></Button>
                                                            <DeleteProduct buttonName="Delete" type="icon" id={product.ID}></DeleteProduct>
                                                        </div>
                                                    </TableCell>
                                                </TableRow>
                                            ))
                                        }
                                    </TableBody>
                                </Table>
                            </CardContent>
                            <CardFooter>
                                <div className="text-xs text-muted-foreground">
                                    Showing <strong>1-10</strong> of <strong>32</strong>{" "}
                                    products
                                </div>
                            </CardFooter>
                        </Card>
                    </main>
                </div>
            </div>
            <SheetContent className="w-[450px]">
                <AddProduct closeSheet={setSheetOpen} />
            </SheetContent>
        </Sheet>
    )
}

export default ProductList