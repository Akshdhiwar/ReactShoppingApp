import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "../ui/breadcrumb"
import { Button } from "../ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table'
import { Badge } from "../ui/badge"
import { Input } from "../ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card"
import { ChevronLeft, PlusCircle, Upload } from "lucide-react"
import { Label } from "../ui/label"
import { Textarea } from "../ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select"
import { useNavigate, useParams } from "react-router-dom"
import { useEffect, useReducer, useState } from "react"
import axiosHttp from "../../axiosHandler/axiosHandler"
import iProduct from "../../Interfaces/Products"


function reducer(state: any, action: any) {
    switch (action.type) {
        case 'name': {
            return {
                ...state,
                Title: action.name,
            }
        }
            break
        case 'data': {
            return {
                ...action.data
            }
        }
        case 'description': {
            return {
                ...state,
                Description: action.description
            }
        }
        case 'price': {
            return {
                ...state,
                Price: action.price
            }
        }
    }
}

let initialData = {
    Title: '',
    Description: '',
    Price: 0
};

const EditProduct = () => {

    const { id } = useParams();
    const navigate = useNavigate()
    const [state, dispatch] = useReducer(reducer, initialData)
    const [originalProduct , setOriginalProduct] = useState<iProduct | undefined>(undefined)


    function saveProduct() {
        if(!originalProduct) return
        // Destructure properties for a clearer comparison
        const { Title, Description, Price, Category, Image, ID } = state;

        // Check if any of the fields have changed
        const hasChanged = (
            Title !== originalProduct.Title ||
            Description !== originalProduct.Description ||
            Price !== originalProduct.Price ||
            Category !== originalProduct.Category ||
            Image !== originalProduct.Image
        );

        // If nothing has changed, return early
        if (!hasChanged) {
            return;
        }

        // Create the payload object
        const payload = {
            Title,
            Description,
            Price,
            Category,
            Image,
        };

        // Send the PUT request to update the product
        axiosHttp.put(`products/${ID}`, payload)
            .then(result => {
                console.log(result.data);
            })
            .catch(error => {
                console.error('Error updating the product:', error);
            });
    }
    useEffect(() => {
        getProductData()
    }, [])

    useEffect(() => {
        console.log("render")
    })

    function getProductData() {
        axiosHttp(`/admin/product/${id}`).then(result => {
            setOriginalProduct(result.data)
            dispatch({
                type: 'data',
                data: result.data
            })
        })
    }

    function updateTitle(event: any) {
        dispatch({
            type: 'name',
            name: event.target.value
        })
    }

    function updateDescription(event: any) {
        dispatch({
            type: 'description',
            description: event.target.value
        })
    }

    function updatePrice(event: any) {
        dispatch({
            type: 'price',
            price: event.target.value
        })
    }

    return (
        <div className="flex min-h-screen w-full flex-col bg-muted/40">
            <div className="flex flex-col sm:gap-4 sm:py-4 md:pl-14">
                <header className=" hidden top-0 z-30 sm:flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
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
                                <BreadcrumbPage>Edit Product</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </header>
                <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
                    <div className="mx-auto grid max-w-[59rem] flex-1 auto-rows-max gap-4">
                        <div className="flex items-center gap-4">
                            <Button variant="outline" size="icon" className="h-7 w-7" onClick={() => { navigate(-1) }}>
                                <ChevronLeft className="h-4 w-4" />
                                <span className="sr-only">Back</span>
                            </Button>
                            <h1 className="whitespace-nowrap text-xl font-semibold tracking-tight overflow-hidden w-[250px] sm:w-[50%] truncate">
                                {state.Title}
                            </h1>
                            <Badge variant="outline" className="ml-auto sm:ml-0">
                                In stock
                            </Badge>
                            <div className="hidden items-center gap-2 md:ml-auto md:flex">
                                <Button variant="outline" size="sm">
                                    Discard
                                </Button>
                                <Button size="sm" onClick={saveProduct}>Save Product</Button>
                            </div>
                        </div>
                        <div className="grid gap-4 md:grid-cols-[1fr_250px] lg:grid-cols-3 lg:gap-8">
                            <div className="grid auto-rows-max items-start gap-4 lg:col-span-2 lg:gap-8">
                                <Card x-chunk="dashboard-07-chunk-0">
                                    <CardHeader>
                                        <CardTitle>Product Details</CardTitle>
                                        <CardDescription>
                                            Lipsum dolor sit amet, consectetur adipiscing elit
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="grid gap-6">
                                            <div className="grid gap-3">
                                                <Label htmlFor="name">Name</Label>
                                                <Input
                                                    id="name"
                                                    type="text"
                                                    className="w-full"
                                                    defaultValue={state.Title}
                                                    onInput={updateTitle}
                                                />
                                            </div>
                                            <div className="grid gap-3">
                                                <Label htmlFor="description">Description</Label>
                                                <Textarea
                                                    id="description"
                                                    defaultValue={state.Description}
                                                    className="min-h-32"
                                                    onChange={updateDescription}
                                                />
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                                <Card x-chunk="dashboard-07-chunk-1">
                                    <CardHeader>
                                        <CardTitle>Stock</CardTitle>
                                        <CardDescription>
                                            Lipsum dolor sit amet, consectetur adipiscing elit
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <Table>
                                            <TableHeader>
                                                <TableRow>
                                                    <TableHead className="w-[100px]">SKU</TableHead>
                                                    <TableHead>Stock</TableHead>
                                                    <TableHead>Price</TableHead>
                                                    <TableHead className="w-[100px]">Size</TableHead>
                                                </TableRow>
                                            </TableHeader>
                                            <TableBody>
                                                <TableRow>
                                                    <TableCell className="font-semibold">
                                                        GGPC-001
                                                    </TableCell>
                                                    <TableCell>
                                                        <Label htmlFor="stock-1" className="sr-only">
                                                            Stock
                                                        </Label>
                                                        <Input
                                                            id="stock-1"
                                                            type="number"
                                                            defaultValue="100"
                                                        />
                                                    </TableCell>
                                                    <TableCell>
                                                        <Label htmlFor="price-1" className="sr-only">
                                                            Price
                                                        </Label>
                                                        <Input
                                                            id="price-1"
                                                            type="number"
                                                            defaultValue={state.Price}
                                                            onChange={updatePrice}
                                                        />
                                                    </TableCell>
                                                    {/* <TableCell>
                                                        <ToggleGroup
                                                            type="single"
                                                            defaultValue="s"
                                                            variant="outline"
                                                        >
                                                            <ToggleGroupItem value="s">S</ToggleGroupItem>
                                                            <ToggleGroupItem value="m">M</ToggleGroupItem>
                                                            <ToggleGroupItem value="l">L</ToggleGroupItem>
                                                        </ToggleGroup>
                                                    </TableCell> */}
                                                </TableRow>
                                            </TableBody>
                                        </Table>
                                    </CardContent>
                                    <CardFooter className="justify-center border-t p-4">
                                        <Button size="sm" variant="ghost" className="gap-1">
                                            <PlusCircle className="h-3.5 w-3.5" />
                                            Add Variant
                                        </Button>
                                    </CardFooter>
                                </Card>
                                <Card x-chunk="dashboard-07-chunk-2">
                                    <CardHeader>
                                        <CardTitle>Product Category</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="grid gap-6 sm:grid-cols-3">
                                            <div className="grid gap-3">
                                                <Label htmlFor="category">Category</Label>
                                                <Select>
                                                    <SelectTrigger
                                                        id="category"
                                                        aria-label="Select category"
                                                    >
                                                        <SelectValue placeholder="Select category" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectItem value="clothing">Clothing</SelectItem>
                                                        <SelectItem value="electronics">
                                                            Electronics
                                                        </SelectItem>
                                                        <SelectItem value="accessories">
                                                            Accessories
                                                        </SelectItem>
                                                    </SelectContent>
                                                </Select>
                                            </div>
                                            <div className="grid gap-3">
                                                <Label htmlFor="subcategory">
                                                    Subcategory (optional)
                                                </Label>
                                                <Select>
                                                    <SelectTrigger
                                                        id="subcategory"
                                                        aria-label="Select subcategory"
                                                    >
                                                        <SelectValue placeholder="Select subcategory" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectItem value="t-shirts">T-Shirts</SelectItem>
                                                        <SelectItem value="hoodies">Hoodies</SelectItem>
                                                        <SelectItem value="sweatshirts">
                                                            Sweatshirts
                                                        </SelectItem>
                                                    </SelectContent>
                                                </Select>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                            <div className="grid auto-rows-max items-start gap-4 lg:gap-8">
                                <Card x-chunk="dashboard-07-chunk-3">
                                    <CardHeader>
                                        <CardTitle>Product Status</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="grid gap-6">
                                            <div className="grid gap-3">
                                                <Label htmlFor="status">Status</Label>
                                                <Select>
                                                    <SelectTrigger id="status" aria-label="Select status">
                                                        <SelectValue placeholder="Select status" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectItem value="draft">Draft</SelectItem>
                                                        <SelectItem value="published">Active</SelectItem>
                                                        <SelectItem value="archived">Archived</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                                <Card
                                    className="overflow-hidden" x-chunk="dashboard-07-chunk-4"
                                >
                                    <CardHeader>
                                        <CardTitle>Product Images</CardTitle>
                                        <CardDescription>
                                            Lipsum dolor sit amet, consectetur adipiscing elit
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="grid gap-2">
                                            <img
                                                alt="Product image"
                                                className="aspect-square w-full rounded-md object-cover"
                                                height="300"
                                                src={state.Image}
                                                width="300"
                                            />
                                            <div className="grid grid-cols-3 gap-2">
                                                <button>
                                                    <img
                                                        alt="Product image"
                                                        className="aspect-square w-full rounded-md object-cover"
                                                        height="84"
                                                        src={state.Image}
                                                        width="84"
                                                    />
                                                </button>
                                                <button>
                                                    <img
                                                        alt="Product image"
                                                        className="aspect-square w-full rounded-md object-cover"
                                                        height="84"
                                                        src={state.Image}
                                                        width="84"
                                                    />
                                                </button>
                                                <button className="flex aspect-square w-full items-center justify-center rounded-md border border-dashed">
                                                    <Upload className="h-4 w-4 text-muted-foreground" />
                                                    <span className="sr-only">Upload</span>
                                                </button>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                                <Card x-chunk="dashboard-07-chunk-5">
                                    <CardHeader>
                                        <CardTitle>Archive Product</CardTitle>
                                        <CardDescription>
                                            Lipsum dolor sit amet, consectetur adipiscing elit.
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <div></div>
                                        <Button size="sm" variant="secondary">
                                            Archive Product
                                        </Button>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                        <div className="flex items-center justify-center gap-2 md:hidden">
                            <Button variant="outline" size="sm">
                                Discard
                            </Button>
                            <Button size="sm" onClick={saveProduct}>Save Product</Button>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}

export default EditProduct
