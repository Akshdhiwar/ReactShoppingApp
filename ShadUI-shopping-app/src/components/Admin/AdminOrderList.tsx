import { Button } from "../ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table'
import { Badge } from "../ui/badge"
import { Input } from "../ui/input"
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/dropdown-menu"
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "../ui/pagination"
import { ChevronLeft, ChevronRight, Copy, CreditCard, FilterIcon, MoreVertical, MoveHorizontalIcon, SearchIcon, Truck } from "lucide-react"
import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from '../ui/card'
import { Separator } from "../ui/separator"


const AdminOrderList = () => {
    return (
        <div className="flex p-6 gap-4">
            <div className="flex flex-1 flex-col">
                <div className="flex items-center justify-between mb-6">
                    <h1 className="text-2xl font-bold">Orders</h1>
                    <div className="flex items-center gap-4">
                        <div className="relative">
                            <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 dark:text-gray-400" />
                            <Input
                                className="pl-10 pr-4 py-2 rounded-md bg-white dark:bg-gray-800 focus:outline-none focus:ring-1 focus:ring-primary-500 dark:focus:ring-primary-400"
                                placeholder="Search orders..."
                                type="search"
                            />
                        </div>
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
                <div className="overflow-x-auto flex-1">
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
                                <TableCell>May 12, 2023</TableCell>
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
                            <TableRow>
                                <TableCell>
                                    <a className="font-medium hover:underline" href="#">
                                        #124
                                    </a>
                                </TableCell>
                                <TableCell>Jane Smith</TableCell>
                                <TableCell>May 10, 2023</TableCell>
                                <TableCell>$49.99</TableCell>
                                <TableCell>
                                    <Badge>Pending</Badge>
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
                            <TableRow>
                                <TableCell>
                                    <a className="font-medium hover:underline" href="#">
                                        #125
                                    </a>
                                </TableCell>
                                <TableCell>Michael Johnson</TableCell>
                                <TableCell>May 8, 2023</TableCell>
                                <TableCell>$79.99</TableCell>
                                <TableCell>
                                    <Badge>Cancelled</Badge>
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
                                            <DropdownMenuItem>Reorder</DropdownMenuItem>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    <a className="font-medium hover:underline" href="#">
                                        #126
                                    </a>
                                </TableCell>
                                <TableCell>Sarah Lee</TableCell>
                                <TableCell>May 5, 2023</TableCell>
                                <TableCell>$129.99</TableCell>
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
                                            <DropdownMenuItem>Leave review</DropdownMenuItem>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    <a className="font-medium hover:underline" href="#">
                                        #127
                                    </a>
                                </TableCell>
                                <TableCell>David Lee</TableCell>
                                <TableCell>May 2, 2023</TableCell>
                                <TableCell>$59.99</TableCell>
                                <TableCell>
                                    <Badge>Pending</Badge>
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
                </div>
                <Pagination className="mt-8">
                    <PaginationContent>
                        <PaginationItem>
                            <PaginationPrevious href="#" />
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink href="#" isActive>
                                1
                            </PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink href="#">2</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink href="#">3</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationEllipsis />
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationNext href="#" />
                        </PaginationItem>
                    </PaginationContent>
                </Pagination>
            </div>
            <Card className="overflow-hidden hidden md:block">
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
        </div>

    )
}

export default AdminOrderList