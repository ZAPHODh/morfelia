"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { Resolver, useForm } from "react-hook-form"
import { z } from "zod"
import { Plus, Pencil, Trash2, Check, Home, Building, MapPin, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"

const initialAddresses = [
    {
        id: "1",
        type: "home",
        isDefault: true,
        firstName: "Jane",
        lastName: "Doe",
        address1: "123 Main Street",
        address2: "Apt 4B",
        city: "New York",
        state: "NY",
        postalCode: "10001",
        country: "United States",
        phone: "+1 (555) 123-4567",
    },
    {
        id: "2",
        type: "work",
        isDefault: false,
        firstName: "Jane",
        lastName: "Doe",
        address1: "456 Park Avenue",
        address2: "Suite 789",
        city: "New York",
        state: "NY",
        postalCode: "10022",
        country: "United States",
        phone: "+1 (555) 987-6543",
    },
]

const addressFormSchema = z.object({
    type: z.string(),
    firstName: z.string().min(2, { message: "First name must be at least 2 characters." }),
    lastName: z.string().min(2, { message: "Last name must be at least 2 characters." }),
    address1: z.string().min(5, { message: "Address must be at least 5 characters." }),
    address2: z.string().optional(),
    city: z.string().min(2, { message: "City must be at least 2 characters." }),
    state: z.string().min(2, { message: "State must be at least 2 characters." }),
    postalCode: z.string().min(5, { message: "Postal code must be at least 5 characters." }),
    country: z.string().min(2, { message: "Country must be at least 2 characters." }),
    phone: z.string().min(10, { message: "Phone number must be at least 10 characters." }),
    isDefault: z.boolean().default(false),
})

type AddressFormValues = z.infer<typeof addressFormSchema>

export default function AddressesPage() {
    const [addresses, setAddresses] = useState(initialAddresses)
    const [isEditing, setIsEditing] = useState<string | null>(null)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isDialogOpen, setIsDialogOpen] = useState(false)

    const form = useForm<AddressFormValues>({
        resolver: zodResolver(addressFormSchema) as Resolver<AddressFormValues>,
        defaultValues: {
            type: "home",
            firstName: "",
            lastName: "",
            address1: "",
            address2: "",
            city: "",
            state: "",
            postalCode: "",
            country: "United States",
            phone: "",
            isDefault: false,
        },
    })

    const handleEdit = (id: string) => {
        const addressToEdit = addresses.find(address => address.id === id)
        if (addressToEdit) {
            form.reset(addressToEdit)
            setIsEditing(id)
            setIsDialogOpen(true)
        }
    }

    const handleDelete = (id: string) => {
        setAddresses(addresses.filter(address => address.id !== id))
    }

    const handleSetDefault = (id: string) => {
        setAddresses(addresses.map(address => ({
            ...address,
            isDefault: address.id === id,
        })))
    }

    const onSubmit = (values: AddressFormValues) => {
        console.log(values)
        setIsSubmitting(false)
    }

    const getAddressIcon = (type: string) => {
        switch (type) {
            case "home":
                return <Home className="h-5 w-5" />
            case "work":
                return <Building className="h-5 w-5" />
            default:
                return <MapPin className="h-5 w-5" />
        }
    }

    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-serif mb-2">My Addresses</h1>
                    <p className="text-muted-foreground">
                        Manage your shipping and billing addresses
                    </p>
                </div>
                <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                    <DialogTrigger asChild>
                        <Button onClick={() => {
                            form.reset({
                                type: "home",
                                firstName: "",
                                lastName: "",
                                address1: "",
                                address2: "",
                                city: "",
                                state: "",
                                postalCode: "",
                                country: "United States",
                                phone: "",
                                isDefault: false,
                            })
                            setIsEditing(null)
                        }}>
                            <Plus className="mr-2 h-4 w-4" />
                            Add New Address
                        </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[550px]">
                        <DialogHeader>
                            <DialogTitle>
                                {isEditing ? "Edit Address" : "Add New Address"}
                            </DialogTitle>
                            <DialogDescription>
                                {isEditing
                                    ? "Update your address information below"
                                    : "Fill in the details for your new address"}
                            </DialogDescription>
                        </DialogHeader>
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                                <div className="space-y-6">
                                    <div className="space-y-4">
                                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                            <FormField
                                                control={form.control}
                                                name="type"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel>Address Type</FormLabel>
                                                        <Select
                                                            onValueChange={field.onChange}
                                                            defaultValue={field.value}
                                                        >
                                                            <FormControl>
                                                                <SelectTrigger>
                                                                    <SelectValue placeholder="Select type" />
                                                                </SelectTrigger>
                                                            </FormControl>
                                                            <SelectContent>
                                                                <SelectItem value="home">Home</SelectItem>
                                                                <SelectItem value="work">Work</SelectItem>
                                                                <SelectItem value="other">Other</SelectItem>
                                                            </SelectContent>
                                                        </Select>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                            <FormField
                                                control={form.control}
                                                name="firstName"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel>First Name</FormLabel>
                                                        <FormControl>
                                                            <Input {...field} />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                            <FormField
                                                control={form.control}
                                                name="lastName"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel>Last Name</FormLabel>
                                                        <FormControl>
                                                            <Input {...field} />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                        </div>

                                        <FormField
                                            control={form.control}
                                            name="address1"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>Address Line 1</FormLabel>
                                                    <FormControl>
                                                        <Input {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />

                                        <FormField
                                            control={form.control}
                                            name="address2"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>Address Line 2 (Optional)</FormLabel>
                                                    <FormControl>
                                                        <Input {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />

                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            <FormField
                                                control={form.control}
                                                name="city"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel>City</FormLabel>
                                                        <FormControl>
                                                            <Input {...field} />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                            <FormField
                                                control={form.control}
                                                name="state"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel>State/Province</FormLabel>
                                                        <FormControl>
                                                            <Input {...field} />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                        </div>

                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            <FormField
                                                control={form.control}
                                                name="postalCode"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel>Postal Code</FormLabel>
                                                        <FormControl>
                                                            <Input {...field} />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                            <FormField
                                                control={form.control}
                                                name="country"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel>Country</FormLabel>
                                                        <Select
                                                            onValueChange={field.onChange}
                                                            defaultValue={field.value}
                                                        >
                                                            <FormControl>
                                                                <SelectTrigger>
                                                                    <SelectValue placeholder="Select country" />
                                                                </SelectTrigger>
                                                            </FormControl>
                                                            <SelectContent>
                                                                <SelectItem value="United States">United States</SelectItem>
                                                                <SelectItem value="Canada">Canada</SelectItem>
                                                                <SelectItem value="United Kingdom">United Kingdom</SelectItem>
                                                                <SelectItem value="Australia">Australia</SelectItem>
                                                                <SelectItem value="France">France</SelectItem>
                                                                <SelectItem value="Germany">Germany</SelectItem>
                                                                <SelectItem value="Italy">Italy</SelectItem>
                                                                <SelectItem value="Spain">Spain</SelectItem>
                                                                <SelectItem value="Japan">Japan</SelectItem>
                                                            </SelectContent>
                                                        </Select>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                        </div>

                                        <FormField
                                            control={form.control}
                                            name="phone"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>Phone Number</FormLabel>
                                                    <FormControl>
                                                        <Input {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />

                                        <FormField
                                            control={form.control}
                                            name="isDefault"
                                            render={({ field }) => (
                                                <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                                                    <FormControl>
                                                        <Checkbox
                                                            checked={field.value}
                                                            onCheckedChange={field.onChange}
                                                        />
                                                    </FormControl>
                                                    <div className="space-y-1 leading-none">
                                                        <FormLabel>
                                                            Set as default address
                                                        </FormLabel>
                                                    </div>
                                                </FormItem>
                                            )}
                                        />
                                    </div>

                                    <DialogFooter>
                                        <Button
                                            type="button"
                                            variant="outline"
                                            onClick={() => {
                                                setIsDialogOpen(false)
                                                setIsEditing(null)
                                                form.reset()
                                            }}
                                        >
                                            Cancel
                                        </Button>
                                        <Button type="submit" disabled={isSubmitting}>
                                            {isSubmitting ? (
                                                <>
                                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                                    {isEditing ? "Updating" : "Adding"}
                                                </>
                                            ) : (
                                                <>{isEditing ? "Update Address" : "Add Address"}</>
                                            )}
                                        </Button>
                                    </DialogFooter>
                                </div>
                            </form>
                        </Form>
                    </DialogContent>
                </Dialog>
            </div>

            {addresses.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {addresses.map((address) => (
                        <Card key={address.id}>
                            <CardHeader className="pb-2">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <div className="p-1.5 rounded-full bg-muted">
                                            {getAddressIcon(address.type)}
                                        </div>
                                        <CardTitle className="text-base capitalize">
                                            {address.type} Address
                                        </CardTitle>
                                    </div>
                                    {address.isDefault && (
                                        <Badge variant="outline" className="bg-gold-50 text-gold-700 border-gold-200">
                                            Default
                                        </Badge>
                                    )}
                                </div>
                            </CardHeader>
                            <CardContent className="pb-2">
                                <div className="space-y-1 text-sm">
                                    <p className="font-medium">{address.firstName} {address.lastName}</p>
                                    <p>{address.address1}</p>
                                    {address.address2 && <p>{address.address2}</p>}
                                    <p>{address.city}, {address.state} {address.postalCode}</p>
                                    <p>{address.country}</p>
                                    <p className="pt-1">{address.phone}</p>
                                </div>
                            </CardContent>
                            <CardFooter className="flex justify-between pt-4 border-t">
                                <div className="flex gap-2">
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        onClick={() => handleEdit(address.id)}
                                    >
                                        <Pencil className="mr-2 h-3.5 w-3.5" />
                                        Edit
                                    </Button>
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        className="text-red-500 hover:text-red-600"
                                        onClick={() => handleDelete(address.id)}
                                    >
                                        <Trash2 className="mr-2 h-3.5 w-3.5" />
                                        Delete
                                    </Button>
                                </div>
                                {!address.isDefault && (
                                    <Button
                                        variant="ghost"
                                        size="sm"
                                        onClick={() => handleSetDefault(address.id)}
                                    >
                                        <Check className="mr-2 h-3.5 w-3.5" />
                                        Set as Default
                                    </Button>
                                )}
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            ) : (
                <div className="text-center py-12 border rounded-lg">
                    <MapPin className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                    <h3 className="text-lg font-medium mb-2">No addresses saved</h3>
                    <p className="text-muted-foreground mb-6">
                        Add an address to make checkout faster
                    </p>
                    <Button onClick={() => setIsDialogOpen(true)}>
                        <Plus className="mr-2 h-4 w-4" />
                        Add New Address
                    </Button>
                </div>
            )}
        </div >
    );
}
