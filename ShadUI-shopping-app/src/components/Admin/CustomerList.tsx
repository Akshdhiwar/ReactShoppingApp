import { Button } from "../ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table'
import { Input } from "../ui/input"
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuLabel, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/dropdown-menu"
import { FilterIcon, Search } from "lucide-react"
import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from '../ui/card'
import { Separator } from "../ui/separator"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "../ui/breadcrumb"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"

const CustomerList = () => {
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
                                    <a href="#">Customer</a>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbPage>All Customers</BreadcrumbPage>
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
                                    <DropdownMenuRadioGroup value="name">
                                        <DropdownMenuRadioItem value="name">Name</DropdownMenuRadioItem>
                                        <DropdownMenuRadioItem value="id">ID</DropdownMenuRadioItem>
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
                            <CardTitle>Customers</CardTitle>
                            <CardDescription>
                                Manage your customer and view their sales performance.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>ID</TableHead>
                                        <TableHead>Name</TableHead>
                                        <TableHead>Email</TableHead>
                                        <TableHead>Phone</TableHead>
                                        <TableHead>Address</TableHead>
                                        <TableHead>Actions</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    <TableRow>
                                        <TableCell>123</TableCell>
                                        <TableCell>John Doe</TableCell>
                                        <TableCell>jhondoe@gmail.com</TableCell>
                                        <TableCell>1234567890</TableCell>
                                        <TableCell>
                                            las vegas , san fransisco , 22556
                                        </TableCell>
                                        <TableCell>
                                            <Button>View Details</Button>
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
                    <Card className="w-full max-w-md">
                        <CardContent className="space-y-6 p-6">
                            <div className="flex flex-col items-center space-y-2">
                                <Avatar className="h-16 w-16">
                                    <AvatarImage alt="User Avatar" src="/placeholder-avatar.jpg" />
                                    <AvatarFallback>JD</AvatarFallback>
                                </Avatar>
                                <div className="text-center">
                                    <h3 className="text-2xl font-bold">John Doe</h3>
                                    <p className="text-gray-500 dark:text-gray-400">john@example.com</p>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <div className="flex items-center justify-between">
                                    <span className="text-gray-500 dark:text-gray-400">Phone:</span>
                                    <span>+1 (555) 123-4567</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-gray-500 dark:text-gray-400">Address:</span>
                                    <span>123 Main St, Anytown USA</span>
                                </div>
                            </div>
                            <Separator />
                            <div className="space-y-4">
                                <h4 className="text-lg font-semibold">Order History</h4>
                                <div className="space-y-2">
                                    <div className="flex items-center justify-between">
                                        <div className="space-y-1">
                                            <p className="font-medium">Order #12345</p>
                                            <p className="text-sm text-gray-500 dark:text-gray-400">Placed on June 15, 2023</p>
                                        </div>
                                        <p className="font-medium">$99.99</p>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <div className="space-y-1">
                                            <p className="font-medium">Order #67890</p>
                                            <p className="text-sm text-gray-500 dark:text-gray-400">Placed on April 22, 2023</p>
                                        </div>
                                        <p className="font-medium">$49.99</p>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </main>
            </div>
        </div>
    )
}

export default CustomerList