import { useState } from "react"
import { Avatar, AvatarFallback } from "./ui/avatar"
import { Separator } from "./ui/separator"
import { Label } from "./ui/label"
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table"
import { Badge } from "./ui/badge"

const UserProfileSection = () => {
    const user = {
        name: "Sophia Anderson",
        email: "sophia@example.com",
        profilePicture: "/placeholder-user.jpg",
        orders: [
            {
                id: "ORDER001",
                date: "2023-06-01",
                items: [
                    {
                        name: "Glimmer Lamps",
                        quantity: 2,
                        price: 120,
                    },
                    {
                        name: "Aqua Filters",
                        quantity: 3,
                        price: 49,
                    },
                ],
                total: 150,
                status: "Delivered",
            },
            {
                id: "ORDER002",
                date: "2023-04-15",
                items: [
                    {
                        name: "Eco Planters",
                        quantity: 1,
                        price: 59,
                    },
                ],
                total: 59,
                status: "Delivered",
            },
            {
                id: "ORDER003",
                date: "2023-02-28",
                items: [
                    {
                        name: "Zest Juicers",
                        quantity: 1,
                        price: 99,
                    },
                ],
                total: 99,
                status: "Delivered",
            },
        ],
        reviews: [
            {
                id: "REVIEW001",
                product: "Glimmer Lamps",
                rating: 4,
                comment: "The lamps are beautiful and provide great lighting in my living room.",
            },
            {
                id: "REVIEW002",
                product: "Aqua Filters",
                rating: 5,
                comment: "These filters have really improved the taste of my water. Highly recommend!",
            },
        ],
        shippingAddress: {
            name: "Sophia Anderson",
            address1: "1234 Main St.",
            address2: "",
            city: "Anytown",
            state: "CA",
            zip: "12345",
            country: "USA",
        },
        paymentMethods: [
            {
                id: "CARD001",
                type: "Visa",
                lastFour: "1234",
                expiry: "12/25",
            },
            {
                id: "CARD002",
                type: "Mastercard",
                lastFour: "5678",
                expiry: "06/26",
            },
        ],
    }
    const [editingPersonalInfo, setEditingPersonalInfo] = useState(false)
    const [editingShippingAddress, setEditingShippingAddress] = useState(false)
    const [editingPaymentMethods, setEditingPaymentMethods] = useState(false)
    const handlePersonalInfoSubmit = (updatedInfo: any) => {
        console.log("Updated personal info:", updatedInfo)
        setEditingPersonalInfo(false)
    }
    const handleShippingAddressSubmit = (updatedAddress: any) => {
        console.log("Updated shipping address:", updatedAddress)
        setEditingShippingAddress(false)
    }
    const handlePaymentMethodsSubmit = (updatedMethods: any) => {
        console.log("Updated payment methods:", updatedMethods)
        setEditingPaymentMethods(false)
    }
    const handleReviewSubmit = (review: any) => {
        console.log("New review:", review)
    }
    return (
        <div className="container mx-auto px-4 md:px-6 py-8">
            <div className="grid md:grid-cols-[1fr_2fr] gap-8">
                <div className="bg-white dark:bg-gray-950 rounded-lg shadow-sm p-6">
                    <div className="flex items-center gap-4">
                        <Avatar className="w-16 h-16">
                            <img src="/placeholder.svg" alt={user.name} />
                            <AvatarFallback>SA</AvatarFallback>
                        </Avatar>
                        <div>
                            <h1 className="text-xl font-bold">{user.name}</h1>
                            <p className="text-gray-500 dark:text-gray-400">{user.email}</p>
                        </div>
                    </div>
                    <Separator className="my-6" />
                    <div className="grid gap-6">
                        <div>
                            <h2 className="text-lg font-semibold">Personal Information</h2>
                            {editingPersonalInfo ? (
                                <form
                                    onSubmit={(e) => {
                                        e.preventDefault()
                                        handlePersonalInfoSubmit({
                                            name: "Sophia Anderson",
                                            email: "sophia@example.com",
                                        })
                                    }}
                                    className="grid gap-4"
                                >
                                    <div className="grid gap-2">
                                        <Label htmlFor="name">Name</Label>
                                        <Input id="name" defaultValue={user.name} />
                                    </div>
                                    <div className="grid gap-2">
                                        <Label htmlFor="email">Email</Label>
                                        <Input id="email" type="email" defaultValue={user.email} />
                                    </div>
                                    <div className="flex justify-end gap-2">
                                        <Button variant="outline" onClick={() => setEditingPersonalInfo(false)}>
                                            Cancel
                                        </Button>
                                        <Button type="submit">Save</Button>
                                    </div>
                                </form>
                            ) : (
                                <div className="grid gap-2">
                                    <div className="flex justify-between">
                                        <span>Name</span>
                                        <span>{user.name}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Email</span>
                                        <span>{user.email}</span>
                                    </div>
                                    <Button variant="outline" size="sm" onClick={() => setEditingPersonalInfo(true)}>
                                        Edit
                                    </Button>
                                </div>
                            )}
                        </div>
                        <div>
                            <h2 className="text-lg font-semibold">Shipping Address</h2>
                            {editingShippingAddress ? (
                                <form
                                    onSubmit={(e) => {
                                        e.preventDefault()
                                        handleShippingAddressSubmit({
                                            name: "Sophia Anderson",
                                            address1: "1234 Main St.",
                                            address2: "",
                                            city: "Anytown",
                                            state: "CA",
                                            zip: "12345",
                                            country: "USA",
                                        })
                                    }}
                                    className="grid gap-4"
                                >
                                    <div className="grid gap-2">
                                        <Label htmlFor="name">Name</Label>
                                        <Input id="name" defaultValue={user.shippingAddress.name} />
                                    </div>
                                    <div className="grid gap-2">
                                        <Label htmlFor="address1">Address 1</Label>
                                        <Input id="address1" defaultValue={user.shippingAddress.address1} />
                                    </div>
                                    <div className="grid gap-2">
                                        <Label htmlFor="address2">Address 2</Label>
                                        <Input id="address2" defaultValue={user.shippingAddress.address2} />
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="grid gap-2">
                                            <Label htmlFor="city">City</Label>
                                            <Input id="city" defaultValue={user.shippingAddress.city} />
                                        </div>
                                        <div className="grid gap-2">
                                            <Label htmlFor="state">State</Label>
                                            <Input id="state" defaultValue={user.shippingAddress.state} />
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="grid gap-2">
                                            <Label htmlFor="zip">Zip</Label>
                                            <Input id="zip" defaultValue={user.shippingAddress.zip} />
                                        </div>
                                        <div className="grid gap-2">
                                            <Label htmlFor="country">Country</Label>
                                            <Input id="country" defaultValue={user.shippingAddress.country} />
                                        </div>
                                    </div>
                                    <div className="flex justify-end gap-2">
                                        <Button variant="outline" onClick={() => setEditingShippingAddress(false)}>
                                            Cancel
                                        </Button>
                                        <Button type="submit">Save</Button>
                                    </div>
                                </form>
                            ) : (
                                <div className="grid gap-2">
                                    <div className="flex justify-between">
                                        <span>Name</span>
                                        <span>{user.shippingAddress.name}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Address</span>
                                        <span>
                                            {user.shippingAddress.address1}
                                            {user.shippingAddress.address2 && <>, {user.shippingAddress.address2}</>}
                                            <br />
                                            {user.shippingAddress.city}, {user.shippingAddress.state} {user.shippingAddress.zip}
                                            <br />
                                            {user.shippingAddress.country}
                                        </span>
                                    </div>
                                    <Button variant="outline" size="sm" onClick={() => setEditingShippingAddress(true)}>
                                        Edit
                                    </Button>
                                </div>
                            )}
                        </div>
                        <div>
                            <h2 className="text-lg font-semibold">Payment Methods</h2>
                            {editingPaymentMethods ? (
                                <form
                                    onSubmit={(e) => {
                                        e.preventDefault()
                                        handlePaymentMethodsSubmit([
                                            {
                                                id: "CARD001",
                                                type: "Visa",
                                                lastFour: "1234",
                                                expiry: "12/25",
                                            },
                                            {
                                                id: "CARD002",
                                                type: "Mastercard",
                                                lastFour: "5678",
                                                expiry: "06/26",
                                            },
                                        ])
                                    }}
                                    className="grid gap-4"
                                >
                                    {user.paymentMethods.map((method) => (
                                        <div key={method.id} className="grid gap-2">
                                            <div className="flex justify-between items-center">
                                                <div className="flex items-center gap-2">
                                                    <WalletCardsIcon className="w-6 h-6" />
                                                    <span>
                                                        {method.type} ending in {method.lastFour}
                                                    </span>
                                                </div>
                                                <span>{method.expiry}</span>
                                            </div>
                                            <div className="flex justify-end gap-2">
                                                <Button variant="outline" size="sm">
                                                    Remove
                                                </Button>
                                            </div>
                                        </div>
                                    ))}
                                    <div className="flex justify-end gap-2">
                                        <Button variant="outline" onClick={() => setEditingPaymentMethods(false)}>
                                            Cancel
                                        </Button>
                                        <Button type="submit">Save</Button>
                                    </div>
                                </form>
                            ) : (
                                <div className="grid gap-4">
                                    {user.paymentMethods.map((method) => (
                                        <div key={method.id} className="flex justify-between items-center">
                                            <div className="flex items-center gap-2">
                                                <WalletCardsIcon className="w-6 h-6" />
                                                <span>
                                                    {method.type} ending in {method.lastFour}
                                                </span>
                                            </div>
                                            <span>{method.expiry}</span>
                                        </div>
                                    ))}
                                    <Button variant="outline" size="sm" onClick={() => setEditingPaymentMethods(true)}>
                                        Add Payment Method
                                    </Button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <div className="bg-white dark:bg-gray-950 rounded-lg shadow-sm p-6">
                    <h2 className="text-lg font-semibold">Order History</h2>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Order</TableHead>
                                <TableHead>Date</TableHead>
                                <TableHead>Total</TableHead>
                                <TableHead>Status</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {user.orders.map((order) => (
                                <TableRow key={order.id}>
                                    <TableCell>
                                        <a className="font-medium">
                                            {order.id}
                                        </a>
                                    </TableCell>
                                    <TableCell>{order.date}</TableCell>
                                    <TableCell>${order.total.toFixed(2)}</TableCell>
                                    <TableCell>
                                        <Badge variant={"outline"}>
                                            {order.status}
                                        </Badge>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                    <Separator className="my-6" />
                    <h2 className="text-lg font-semibold">Reviews</h2>
                    <div className="grid gap-6">
                        {user.reviews.map((review) => (
                            <div key={review.id} className="grid gap-2">
                                <div className="flex items-center gap-2">
                                    <div className="flex items-center gap-0.5">
                                        <StarIcon className="w-5 h-5 fill-primary" />
                                        <StarIcon className="w-5 h-5 fill-primary" />
                                        <StarIcon className="w-5 h-5 fill-primary" />
                                        <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
                                        <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
                                    </div>
                                    <span className="font-medium">{review.product}</span>
                                </div>
                                <p className="text-sm leading-loose text-gray-500 dark:text-gray-400">{review.comment}</p>
                            </div>
                        ))}
                        <form
                            onSubmit={(e) => {
                                e.preventDefault()
                                handleReviewSubmit({
                                    id: "REVIEW003",
                                    product: "Zest Juicers",
                                    rating: 5,
                                    comment: "This juicer is amazing! It's so easy",
                                })
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserProfileSection


function StarIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
    )
}


function WalletCardsIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <rect width="18" height="18" x="3" y="3" rx="2" />
            <path d="M3 9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2" />
            <path d="M3 11h3c.8 0 1.6.3 2.1.9l1.1.9c1.6 1.6 4.1 1.6 5.7 0l1.1-.9c.5-.5 1.3-.9 2.1-.9H21" />
        </svg>
    )
}