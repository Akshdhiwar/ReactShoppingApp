import { Sheet, SheetContent, SheetTrigger } from '../components/ui/sheet'
import { Button } from '../components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '../components/ui/dropdown-menu'
import { CircleUser, Menu, Package2 } from 'lucide-react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

const AdminMenu = ["Dashboard", "Orders", "Products", "Customers", "Analytics"]

const AdminPage = () => {
    const [activeMenu, setActiveMenu] = useState(AdminMenu[0])
    const [sheetOpen, setSheetOpen] = useState(false);
    const location = useLocation()
    const navigate = useNavigate()
    console.log(location.pathname.split("/"))

    useEffect(() => {
        AdminMenu.forEach(menu => {
            if (location.pathname.includes(menu.toLowerCase())) {
                setActiveMenu(menu.toLowerCase());
                return;
            }
        });
    }, [location.pathname]);

    function navigateToLinks(link: string) {
        setSheetOpen(false);
        navigate(`/admin/${link.toLowerCase()}`);
    }


    return (
        <div className='content-grid flex min-h-screen w-full flex-col'>
            <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6 fullwidth z-50">
                <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
                    <Button
                        className="p-0 flex items-center gap-2 text-lg font-semibold md:text-base"
                        variant="link"
                    >
                        <Package2 className="h-6 w-6" />
                        <span className="sr-only">Acme Inc</span>
                    </Button>
                    {
                        AdminMenu.map(ele => (
                            <Button
                                variant="link"
                                key={ele}
                                onClick={() => navigate(`/admin/${ele.toLowerCase()}`)}
                                className={`p-0 transition-colors hover:text-foreground ${activeMenu === ele.toLowerCase() ? "text-foreground" : "text-muted-foreground"}`}
                            >
                                {ele}
                            </Button>
                        ))
                    }
                </nav>
                <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
                    <SheetTrigger asChild>
                        <Button
                            variant="outline"
                            size="icon"
                            className="shrink-0 md:hidden"
                        >
                            <Menu className="h-5 w-5" />
                            <span className="sr-only">Toggle navigation menu</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="left">
                        <nav className="grid gap-6 text-lg font-medium">
                            <a
                                href="#"
                                className="flex items-center gap-2 text-lg font-semibold"
                            >
                                <Package2 className="h-6 w-6" />
                                <span className="sr-only">Acme Inc</span>
                            </a>
                            {
                                AdminMenu.map(ele => (
                                    <Button
                                        variant="link" key={ele} onClick={() => navigateToLinks(ele)} className={`p-0 transition-colors hover:text-foreground ${activeMenu === ele.toLowerCase() ? "text-foreground" : "text-muted-foreground"}`}>
                                        {ele}
                                    </Button>
                                ))
                            }
                        </nav>
                    </SheetContent>
                </Sheet>
                <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4 justify-end">
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="secondary" size="icon" className="rounded-full">
                                <CircleUser className="h-5 w-5" />
                                <span className="sr-only">Toggle user menu</span>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuLabel>My Account</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>Settings</DropdownMenuItem>
                            <DropdownMenuItem>Support</DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>Logout</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </header>
            <Outlet></Outlet>
        </div>
    )

}

export default AdminPage
