import { Button } from "../ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table'
import { Badge } from "../ui/badge"
import { Input } from "../ui/input"
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/dropdown-menu"
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "../ui/pagination"
import { FilterIcon, MoveHorizontalIcon, SearchIcon } from "lucide-react"

const AdminOrderList = () => {
    return (
        <div className="p-6">
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
            <div className="overflow-x-auto">
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
    )
}

export default AdminOrderList