import { Button } from "../ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table'
import { Badge } from "../ui/badge"
import { Input } from "../ui/input"
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/dropdown-menu"
import { Pagination, PaginationContent, PaginationItem } from "../ui/pagination"
import { ChevronLeft, ChevronRight, Copy, CreditCard, FilterIcon, MoreVertical, MoveHorizontalIcon, Search, Truck } from "lucide-react"
import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from '../ui/card'
import { Separator } from "../ui/separator"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "../ui/breadcrumb"


const AdminOrderList = () => {
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
                                    <TableRow>
                                        <TableCell>
                                            <a className="font-medium hover:underline" href="#">
                                                #123
                                            </a>
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
                    <Card className="overflow-hidden hidden lg:block ">
                        <CardHeader className="flex flex-row items-start bg-muted/50">
                            <div className="grid gap-0.5">
                                <CardTitle className="group flex items-center gap-2 text-lg">
                                    Order Oe31b70H
                                    <Button
                                        size="icon"
                                        variant="outline"
                                        className="h-6 w-6 opacity-0 transition-opacity group-hover:opacity-100"
                                    >
                                        <Copy className="h-3 w-3" />
                                        <span className="sr-only">Copy Order ID</span>
                                    </Button>
                                </CardTitle>
                                <CardDescription>Date: November 23, 2023</CardDescription>
                            </div>
                            <div className="ml-auto flex items-center gap-1">
                                <Button size="sm" variant="outline" className="h-8 gap-1">
                                    <Truck className="h-3.5 w-3.5" />
                                    <span className="lg:sr-only xl:not-sr-only xl:whitespace-nowrap">
                                        Track Order
                                    </span>
                                </Button>
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <Button size="icon" variant="outline" className="h-8 w-8">
                                            <MoreVertical className="h-3.5 w-3.5" />
                                            <span className="sr-only">More</span>
                                        </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent align="end">
                                        <DropdownMenuItem>Edit</DropdownMenuItem>
                                        <DropdownMenuItem>Export</DropdownMenuItem>
                                        <DropdownMenuSeparator />
                                        <DropdownMenuItem>Trash</DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </div>
                        </CardHeader>
                        <CardContent className="p-6 text-sm">
                            <div className="grid gap-3">
                                <div className="font-semibold">Order Details</div>
                                <ul className="grid gap-3">
                                    <li className="flex items-center justify-between">
                                        <span className="text-muted-foreground">
                                            Glimmer Lamps x <span>2</span>
                                        </span>
                                        <span>$250.00</span>
                                    </li>
                                    <li className="flex items-center justify-between">
                                        <span className="text-muted-foreground">
                                            Aqua Filters x <span>1</span>
                                        </span>
                                        <span>$49.00</span>
                                    </li>
                                </ul>
                                <Separator className="my-2" />
                                <ul className="grid gap-3">
                                    <li className="flex items-center justify-between">
                                        <span className="text-muted-foreground">Subtotal</span>
                                        <span>$299.00</span>
                                    </li>
                                    <li className="flex items-center justify-between">
                                        <span className="text-muted-foreground">Shipping</span>
                                        <span>$5.00</span>
                                    </li>
                                    <li className="flex items-center justify-between">
                                        <span className="text-muted-foreground">Tax</span>
                                        <span>$25.00</span>
                                    </li>
                                    <li className="flex items-center justify-between font-semibold">
                                        <span className="text-muted-foreground">Total</span>
                                        <span>$329.00</span>
                                    </li>
                                </ul>
                            </div>
                            <Separator className="my-4" />
                            <div className="grid grid-cols-2 gap-4">
                                <div className="grid gap-3">
                                    <div className="font-semibold">Shipping Information</div>
                                    <address className="grid gap-0.5 not-italic text-muted-foreground">
                                        <span>Liam Johnson</span>
                                        <span>1234 Main St.</span>
                                        <span>Anytown, CA 12345</span>
                                    </address>
                                </div>
                                <div className="grid auto-rows-max gap-3">
                                    <div className="font-semibold">Billing Information</div>
                                    <div className="text-muted-foreground">
                                        Same as shipping address
                                    </div>
                                </div>
                            </div>
                            <Separator className="my-4" />
                            <div className="grid gap-3">
                                <div className="font-semibold">Customer Information</div>
                                <dl className="grid gap-3">
                                    <div className="flex items-center justify-between">
                                        <dt className="text-muted-foreground">Customer</dt>
                                        <dd>Liam Johnson</dd>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <dt className="text-muted-foreground">Email</dt>
                                        <dd>
                                            <a href="mailto:">liam@acme.com</a>
                                        </dd>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <dt className="text-muted-foreground">Phone</dt>
                                        <dd>
                                            <a href="tel:">+1 234 567 890</a>
                                        </dd>
                                    </div>
                                </dl>
                            </div>
                            <Separator className="my-4" />
                            <div className="grid gap-3">
                                <div className="font-semibold">Payment Information</div>
                                <dl className="grid gap-3">
                                    <div className="flex items-center justify-between">
                                        <dt className="flex items-center gap-1 text-muted-foreground">
                                            <CreditCard className="h-4 w-4" />
                                            Visa
                                        </dt>
                                        <dd>**** **** **** 4532</dd>
                                    </div>
                                </dl>
                            </div>
                        </CardContent>
                        <CardFooter className="flex flex-row items-center border-t bg-muted/50 px-6 py-3">
                            <div className="text-xs text-muted-foreground">
                                Updated <time dateTime="2023-11-23">November 23, 2023</time>
                            </div>
                            <Pagination className="ml-auto mr-0 w-auto">
                                <PaginationContent>
                                    <PaginationItem>
                                        <Button size="icon" variant="outline" className="h-6 w-6">
                                            <ChevronLeft className="h-3.5 w-3.5" />
                                            <span className="sr-only">Previous Order</span>
                                        </Button>
                                    </PaginationItem>
                                    <PaginationItem>
                                        <Button size="icon" variant="outline" className="h-6 w-6">
                                            <ChevronRight className="h-3.5 w-3.5" />
                                            <span className="sr-only">Next Order</span>
                                        </Button>
                                    </PaginationItem>
                                </PaginationContent>
                            </Pagination>
                        </CardFooter>
                    </Card>
                </main>
            </div>
        </div>
    )
}

export default AdminOrderList



// return (
//     <div className="flex flex-col sm:p-6 p-4 pt-2 ">
//         <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background sm:static sm:h-auto sm:border-0 sm:bg-transparent">
//             <Breadcrumb className="hidden md:flex">
//                 <BreadcrumbList>
//                     <BreadcrumbItem>
//                         <BreadcrumbLink asChild>
//                             <a href="#">Dashboard</a>
//                         </BreadcrumbLink>
//                     </BreadcrumbItem>
//                     <BreadcrumbSeparator />
//                     <BreadcrumbItem>
//                         <BreadcrumbLink asChild>
//                             <a href="#">Products</a>
//                         </BreadcrumbLink>
//                     </BreadcrumbItem>
//                     <BreadcrumbSeparator />
//                     <BreadcrumbItem>
//                         <BreadcrumbPage>All Products</BreadcrumbPage>
//                     </BreadcrumbItem>
//                 </BreadcrumbList>
//             </Breadcrumb>
//             <div className="relative ml-auto flex-1 md:grow-0">
//                 <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
//                 <Input
//                     type="search"
//                     placeholder="Search..."
//                     className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[320px]"
//                 />
//             </div>
//             <div className="flex items-center">
//                 <div className="ml-auto flex items-center gap-2">
//                     <DropdownMenu>
//                         <DropdownMenuTrigger asChild>
//                             <Button size="sm" variant="outline">
//                                 <FilterIcon className="w-4 h-4 mr-2" />
//                                 Filters
//                             </Button>
//                         </DropdownMenuTrigger>
//                         <DropdownMenuContent align="end" className="w-56">
//                             <DropdownMenuLabel>Filter by</DropdownMenuLabel>
//                             <DropdownMenuSeparator />
//                             <DropdownMenuRadioGroup value="date">
//                                 <DropdownMenuRadioItem value="date">Date</DropdownMenuRadioItem>
//                                 <DropdownMenuRadioItem value="total">Total</DropdownMenuRadioItem>
//                                 <DropdownMenuRadioItem value="status">Status</DropdownMenuRadioItem>
//                             </DropdownMenuRadioGroup>
//                             <DropdownMenuSeparator />
//                             <DropdownMenuCheckboxItem>Ascending</DropdownMenuCheckboxItem>
//                         </DropdownMenuContent>
//                     </DropdownMenu>
//                 </div>
//             </div>
//         </header>
//         <div className="flex gap-6 pt-4">
//             <div className="flex flex-1 flex-col">
//                 <div className="flex items-center justify-between mb-6">
//                     <h1 className="text-2xl font-bold">Orders</h1>
//                 </div>
//                 <div className="overflow-x-auto flex-1">
//                     <Table>
//                         <TableHeader>
//                             <TableRow>
//                                 <TableHead>Order #</TableHead>
//                                 <TableHead>Customer</TableHead>
//                                 <TableHead>Date</TableHead>
//                                 <TableHead>Total</TableHead>
//                                 <TableHead>Status</TableHead>
//                                 <TableHead className="text-right">Actions</TableHead>
//                             </TableRow>
//                         </TableHeader>
//                         <TableBody>
//                             <TableRow>
//                                 <TableCell>
//                                     <a className="font-medium hover:underline" href="#">
//                                         #123
//                                     </a>
//                                 </TableCell>
//                                 <TableCell>John Doe</TableCell>
//                                 <TableCell>May 12</TableCell>
//                                 <TableCell>$99.99</TableCell>
//                                 <TableCell className="hidden sm:flex">
//                                     <Badge>Delivered</Badge>
//                                 </TableCell>
//                                 <TableCell className="text-right">
//                                     <DropdownMenu>
//                                         <DropdownMenuTrigger asChild>
//                                             <Button size="icon" variant="ghost">
//                                                 <MoveHorizontalIcon className="w-4 h-4" />
//                                                 <span className="sr-only">Order actions</span>
//                                             </Button>
//                                         </DropdownMenuTrigger>
//                                         <DropdownMenuContent align="end">
//                                             <DropdownMenuItem>View order</DropdownMenuItem>
//                                             <DropdownMenuItem>Track shipment</DropdownMenuItem>
//                                             <DropdownMenuItem>Cancel order</DropdownMenuItem>
//                                         </DropdownMenuContent>
//                                     </DropdownMenu>
//                                 </TableCell>
//                             </TableRow>
//                         </TableBody>
//                     </Table>
//                 </div>
//                 <Pagination className="mt-8">
//                     <PaginationContent>
//                         <PaginationItem>
//                             <PaginationPrevious href="#" />
//                         </PaginationItem>
//                         <PaginationItem>
//                             <PaginationLink href="#" isActive>
//                                 1
//                             </PaginationLink>
//                         </PaginationItem>
//                         <PaginationItem>
//                             <PaginationLink href="#">2</PaginationLink>
//                         </PaginationItem>
//                         <PaginationItem>
//                             <PaginationLink href="#">3</PaginationLink>
//                         </PaginationItem>
//                         <PaginationItem>
//                             <PaginationEllipsis />
//                         </PaginationItem>
//                         <PaginationItem>
//                             <PaginationNext href="#" />
//                         </PaginationItem>
//                     </PaginationContent>
//                 </Pagination>
//             </div>
//             <Card className="overflow-hidden hidden md:block">
//                 <CardHeader className="flex flex-row items-start bg-muted/50">
//                     <div className="grid gap-0.5">
//                         <CardTitle className="group flex items-center gap-2 text-lg">
//                             Order Oe31b70H
//                             <Button
//                                 size="icon"
//                                 variant="outline"
//                                 className="h-6 w-6 opacity-0 transition-opacity group-hover:opacity-100"
//                             >
//                                 <Copy className="h-3 w-3" />
//                                 <span className="sr-only">Copy Order ID</span>
//                             </Button>
//                         </CardTitle>
//                         <CardDescription>Date: November 23, 2023</CardDescription>
//                     </div>
//                     <div className="ml-auto flex items-center gap-1">
//                         <Button size="sm" variant="outline" className="h-8 gap-1">
//                             <Truck className="h-3.5 w-3.5" />
//                             <span className="lg:sr-only xl:not-sr-only xl:whitespace-nowrap">
//                                 Track Order
//                             </span>
//                         </Button>
//                         <DropdownMenu>
//                             <DropdownMenuTrigger asChild>
//                                 <Button size="icon" variant="outline" className="h-8 w-8">
//                                     <MoreVertical className="h-3.5 w-3.5" />
//                                     <span className="sr-only">More</span>
//                                 </Button>
//                             </DropdownMenuTrigger>
//                             <DropdownMenuContent align="end">
//                                 <DropdownMenuItem>Edit</DropdownMenuItem>
//                                 <DropdownMenuItem>Export</DropdownMenuItem>
//                                 <DropdownMenuSeparator />
//                                 <DropdownMenuItem>Trash</DropdownMenuItem>
//                             </DropdownMenuContent>
//                         </DropdownMenu>
//                     </div>
//                 </CardHeader>
//                 <CardContent className="p-6 text-sm">
//                     <div className="grid gap-3">
//                         <div className="font-semibold">Order Details</div>
//                         <ul className="grid gap-3">
//                             <li className="flex items-center justify-between">
//                                 <span className="text-muted-foreground">
//                                     Glimmer Lamps x <span>2</span>
//                                 </span>
//                                 <span>$250.00</span>
//                             </li>
//                             <li className="flex items-center justify-between">
//                                 <span className="text-muted-foreground">
//                                     Aqua Filters x <span>1</span>
//                                 </span>
//                                 <span>$49.00</span>
//                             </li>
//                         </ul>
//                         <Separator className="my-2" />
//                         <ul className="grid gap-3">
//                             <li className="flex items-center justify-between">
//                                 <span className="text-muted-foreground">Subtotal</span>
//                                 <span>$299.00</span>
//                             </li>
//                             <li className="flex items-center justify-between">
//                                 <span className="text-muted-foreground">Shipping</span>
//                                 <span>$5.00</span>
//                             </li>
//                             <li className="flex items-center justify-between">
//                                 <span className="text-muted-foreground">Tax</span>
//                                 <span>$25.00</span>
//                             </li>
//                             <li className="flex items-center justify-between font-semibold">
//                                 <span className="text-muted-foreground">Total</span>
//                                 <span>$329.00</span>
//                             </li>
//                         </ul>
//                     </div>
//                     <Separator className="my-4" />
//                     <div className="grid grid-cols-2 gap-4">
//                         <div className="grid gap-3">
//                             <div className="font-semibold">Shipping Information</div>
//                             <address className="grid gap-0.5 not-italic text-muted-foreground">
//                                 <span>Liam Johnson</span>
//                                 <span>1234 Main St.</span>
//                                 <span>Anytown, CA 12345</span>
//                             </address>
//                         </div>
//                         <div className="grid auto-rows-max gap-3">
//                             <div className="font-semibold">Billing Information</div>
//                             <div className="text-muted-foreground">
//                                 Same as shipping address
//                             </div>
//                         </div>
//                     </div>
//                     <Separator className="my-4" />
//                     <div className="grid gap-3">
//                         <div className="font-semibold">Customer Information</div>
//                         <dl className="grid gap-3">
//                             <div className="flex items-center justify-between">
//                                 <dt className="text-muted-foreground">Customer</dt>
//                                 <dd>Liam Johnson</dd>
//                             </div>
//                             <div className="flex items-center justify-between">
//                                 <dt className="text-muted-foreground">Email</dt>
//                                 <dd>
//                                     <a href="mailto:">liam@acme.com</a>
//                                 </dd>
//                             </div>
//                             <div className="flex items-center justify-between">
//                                 <dt className="text-muted-foreground">Phone</dt>
//                                 <dd>
//                                     <a href="tel:">+1 234 567 890</a>
//                                 </dd>
//                             </div>
//                         </dl>
//                     </div>
//                     <Separator className="my-4" />
//                     <div className="grid gap-3">
//                         <div className="font-semibold">Payment Information</div>
//                         <dl className="grid gap-3">
//                             <div className="flex items-center justify-between">
//                                 <dt className="flex items-center gap-1 text-muted-foreground">
//                                     <CreditCard className="h-4 w-4" />
//                                     Visa
//                                 </dt>
//                                 <dd>**** **** **** 4532</dd>
//                             </div>
//                         </dl>
//                     </div>
//                 </CardContent>
//                 <CardFooter className="flex flex-row items-center border-t bg-muted/50 px-6 py-3">
//                     <div className="text-xs text-muted-foreground">
//                         Updated <time dateTime="2023-11-23">November 23, 2023</time>
//                     </div>
//                     <Pagination className="ml-auto mr-0 w-auto">
//                         <PaginationContent>
//                             <PaginationItem>
//                                 <Button size="icon" variant="outline" className="h-6 w-6">
//                                     <ChevronLeft className="h-3.5 w-3.5" />
//                                     <span className="sr-only">Previous Order</span>
//                                 </Button>
//                             </PaginationItem>
//                             <PaginationItem>
//                                 <Button size="icon" variant="outline" className="h-6 w-6">
//                                     <ChevronRight className="h-3.5 w-3.5" />
//                                     <span className="sr-only">Next Order</span>
//                                 </Button>
//                             </PaginationItem>
//                         </PaginationContent>
//                     </Pagination>
//                 </CardFooter>
//             </Card>
//         </div>
//     </div>
// )