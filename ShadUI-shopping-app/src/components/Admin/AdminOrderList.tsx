import { Button } from "../ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table'
import { Badge } from "../ui/badge"
import { Input } from "../ui/input"
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/dropdown-menu"
import { FilterIcon, MoveHorizontalIcon, Search } from "lucide-react"
import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from '../ui/card'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "../ui/breadcrumb"
import { useEffect, useState } from "react"
import Order from "../../Interfaces/Order"
import axiosHttp from "../../axiosHandler/axiosHandler"
import DisplayOrder from "./DisplayOrder"
import DateFormater from "../DateFormater"

const AdminOrderList = () => {

    const [order, setOrder] = useState<Order[]>([])
    const [selectedOrder, setSelectOrder] = useState<Order | undefined>(undefined)

    useEffect(() => {
        axiosHttp.get("/order").then(res => {
            setOrder(res.data)
            setSelectOrder(res.data[0])
        })
    }, [])

    return (
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
                                    <a href="#">Order</a>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbPage>All Orders</BreadcrumbPage>
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
                                    <Button size="sm" variant="outline">
                                        <FilterIcon className="w-4 h-4 mr-2" />
                                        Filters
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end" className="w-56">
                                    <DropdownMenuLabel>Filter by</DropdownMenuLabel>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuRadioGroup value="date">
                                        <DropdownMenuRadioItem value="date">Date</DropdownMenuRadioItem>
                                        <DropdownMenuRadioItem value="total">Total</DropdownMenuRadioItem>
                                        <DropdownMenuRadioItem value="status">Status</DropdownMenuRadioItem>
                                    </DropdownMenuRadioGroup>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuCheckboxItem>Ascending</DropdownMenuCheckboxItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>
                    </div>
                </header>
                <main className="grid flex-1 grid-cols-4 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
                    <Card className=" lg:col-span-3 col-span-4">
                        <CardHeader>
                            <CardTitle>Orders</CardTitle>
                            <CardDescription>
                                Manage your order and view their sales performance.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Order #</TableHead>
                                        <TableHead>Customer</TableHead>
                                        <TableHead>Date</TableHead>
                                        <TableHead>Total</TableHead>
                                        <TableHead>Status</TableHead>
                                        <TableHead className="text-right">Actions</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {
                                        order.map(item => (
                                            <TableRow key={item.id}>
                                                <TableCell>
                                                    <p className="font-medium hover:underline">
                                                        {`#${item.id}`}
                                                    </p>
                                                </TableCell>
                                                <TableCell>{item.name}</TableCell>
                                                <TableCell><DateFormater isoDate={item?.created_at} /></TableCell>
                                                <TableCell>${item.total_amount}</TableCell>
                                                <TableCell>
                                                    <Badge>{item.status}</Badge>
                                                </TableCell>
                                                <TableCell className="text-right">
                                                    <DropdownMenu>
                                                        <DropdownMenuTrigger asChild>
                                                            <Button size="icon" variant="ghost">
                                                                <MoveHorizontalIcon className="w-4 h-4" />
                                                                <span className="sr-only">Order actions</span>
                                                            </Button>
                                                        </DropdownMenuTrigger>
                                                        <DropdownMenuContent align="end">
                                                            <DropdownMenuItem onClick={() => { setSelectOrder(item) }}>View order</DropdownMenuItem>
                                                            <DropdownMenuItem>Track shipment</DropdownMenuItem>
                                                            <DropdownMenuItem>Cancel order</DropdownMenuItem>
                                                        </DropdownMenuContent>
                                                    </DropdownMenu>
                                                </TableCell>
                                            </TableRow>
                                        ))
                                    }
                                    <TableRow>
                                        <TableCell>
                                            <p className="font-medium hover:underline">
                                                #123
                                            </p>
                                        </TableCell>
                                        <TableCell>John Doe</TableCell>
                                        <TableCell>May 12</TableCell>
                                        <TableCell>$99.99</TableCell>
                                        <TableCell>
                                            <Badge>Delivered</Badge>
                                        </TableCell>
                                        <TableCell className="text-right">
                                            <DropdownMenu>
                                                <DropdownMenuTrigger asChild>
                                                    <Button size="icon" variant="ghost">
                                                        <MoveHorizontalIcon className="w-4 h-4" />
                                                        <span className="sr-only">Order actions</span>
                                                    </Button>
                                                </DropdownMenuTrigger>
                                                <DropdownMenuContent align="end">
                                                    <DropdownMenuItem>View order</DropdownMenuItem>
                                                    <DropdownMenuItem>Track shipment</DropdownMenuItem>
                                                    <DropdownMenuItem>Cancel order</DropdownMenuItem>
                                                </DropdownMenuContent>
                                            </DropdownMenu>
                                        </TableCell>
                                    </TableRow>
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
                    <DisplayOrder order={selectedOrder} />
                </main>
            </div>
        </div>
    )
}

export default AdminOrderList