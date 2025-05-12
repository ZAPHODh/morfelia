"use client"

import { useState } from "react"
import { Bell, Mail, Phone, MessageSquare, Save, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Separator } from "@/components/ui/separator"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function NotificationsPage() {
    const [isSubmitting, setIsSubmitting] = useState(false)

    const [emailPreferences, setEmailPreferences] = useState({
        orderUpdates: true,
        promotions: true,
        newProducts: true,
        events: false,
        blogPosts: false,
        feedback: true,
    })

    const [smsPreferences, setSmsPreferences] = useState({
        orderUpdates: true,
        promotions: false,
        events: false,
        securityAlerts: true,
    })

    const [pushPreferences, setPushPreferences] = useState({
        orderUpdates: true,
        promotions: false,
        newProducts: false,
        priceDrops: true,
        backInStock: true,
    })

    const [frequency, setFrequency] = useState("weekly")

    const [contactInfo, setContactInfo] = useState({
        email: "jane.doe@example.com",
        phone: "+1 (555) 123-4567",
    })

    const handleSavePreferences = () => {
        setIsSubmitting(true)

        setTimeout(() => {
            setIsSubmitting(false)
        }, 1500)
    }

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-2xl font-serif mb-2">Notification Preferences</h1>
                <p className="text-muted-foreground">Manage how and when we contact you</p>
            </div>

            <Card>
                <CardHeader>
                    <div className="flex items-center gap-2">
                        <Mail className="h-5 w-5 text-gold-600" />
                        <CardTitle>Email Notifications</CardTitle>
                    </div>
                    <CardDescription>Choose which email notifications you&apos;d like to receive</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                            <h4 className="font-medium">Order Updates</h4>
                            <p className="text-sm text-muted-foreground">Receive emails about your orders and shipping updates</p>
                        </div>
                        <Switch
                            checked={emailPreferences.orderUpdates}
                            onCheckedChange={(checked) => setEmailPreferences({ ...emailPreferences, orderUpdates: checked })}
                        />
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                            <h4 className="font-medium">Promotions & Sales</h4>
                            <p className="text-sm text-muted-foreground">Receive notifications about special offers and discounts</p>
                        </div>
                        <Switch
                            checked={emailPreferences.promotions}
                            onCheckedChange={(checked) => setEmailPreferences({ ...emailPreferences, promotions: checked })}
                        />
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                            <h4 className="font-medium">New Products</h4>
                            <p className="text-sm text-muted-foreground">Be the first to know about new collections and products</p>
                        </div>
                        <Switch
                            checked={emailPreferences.newProducts}
                            onCheckedChange={(checked) => setEmailPreferences({ ...emailPreferences, newProducts: checked })}
                        />
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                            <h4 className="font-medium">Events & Exhibitions</h4>
                            <p className="text-sm text-muted-foreground">
                                Get invitations to exclusive jewelry events and exhibitions
                            </p>
                        </div>
                        <Switch
                            checked={emailPreferences.events}
                            onCheckedChange={(checked) => setEmailPreferences({ ...emailPreferences, events: checked })}
                        />
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                            <h4 className="font-medium">Blog Posts & Jewelry Care Tips</h4>
                            <p className="text-sm text-muted-foreground">Receive our latest blog posts and jewelry care advice</p>
                        </div>
                        <Switch
                            checked={emailPreferences.blogPosts}
                            onCheckedChange={(checked) => setEmailPreferences({ ...emailPreferences, blogPosts: checked })}
                        />
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                            <h4 className="font-medium">Surveys & Feedback</h4>
                            <p className="text-sm text-muted-foreground">Help us improve by participating in surveys</p>
                        </div>
                        <Switch
                            checked={emailPreferences.feedback}
                            onCheckedChange={(checked) => setEmailPreferences({ ...emailPreferences, feedback: checked })}
                        />
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <div className="flex items-center gap-2">
                        <Phone className="h-5 w-5 text-gold-600" />
                        <CardTitle>SMS Notifications</CardTitle>
                    </div>
                    <CardDescription>Choose which text message notifications you&apos;d like to receive</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                            <h4 className="font-medium">Order Updates</h4>
                            <p className="text-sm text-muted-foreground">
                                Receive text messages about your orders and shipping updates
                            </p>
                        </div>
                        <Switch
                            checked={smsPreferences.orderUpdates}
                            onCheckedChange={(checked) => setSmsPreferences({ ...smsPreferences, orderUpdates: checked })}
                        />
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                            <h4 className="font-medium">Promotions & Sales</h4>
                            <p className="text-sm text-muted-foreground">Receive text messages about special offers and discounts</p>
                        </div>
                        <Switch
                            checked={smsPreferences.promotions}
                            onCheckedChange={(checked) => setSmsPreferences({ ...smsPreferences, promotions: checked })}
                        />
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                            <h4 className="font-medium">Events & Exhibitions</h4>
                            <p className="text-sm text-muted-foreground">Get text invitations to exclusive jewelry events</p>
                        </div>
                        <Switch
                            checked={smsPreferences.events}
                            onCheckedChange={(checked) => setSmsPreferences({ ...smsPreferences, events: checked })}
                        />
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                            <h4 className="font-medium">Security Alerts</h4>
                            <p className="text-sm text-muted-foreground">
                                Receive text alerts about account security and suspicious activity
                            </p>
                        </div>
                        <Switch
                            checked={smsPreferences.securityAlerts}
                            onCheckedChange={(checked) => setSmsPreferences({ ...smsPreferences, securityAlerts: checked })}
                        />
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <div className="flex items-center gap-2">
                        <Bell className="h-5 w-5 text-gold-600" />
                        <CardTitle>Push Notifications</CardTitle>
                    </div>
                    <CardDescription>Choose which push notifications you&apos;d like to receive on your devices</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                            <h4 className="font-medium">Order Updates</h4>
                            <p className="text-sm text-muted-foreground">
                                Receive push notifications about your orders and shipping updates
                            </p>
                        </div>
                        <Switch
                            checked={pushPreferences.orderUpdates}
                            onCheckedChange={(checked) => setPushPreferences({ ...pushPreferences, orderUpdates: checked })}
                        />
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                            <h4 className="font-medium">Promotions & Sales</h4>
                            <p className="text-sm text-muted-foreground">
                                Receive push notifications about special offers and discounts
                            </p>
                        </div>
                        <Switch
                            checked={pushPreferences.promotions}
                            onCheckedChange={(checked) => setPushPreferences({ ...pushPreferences, promotions: checked })}
                        />
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                            <h4 className="font-medium">New Products</h4>
                            <p className="text-sm text-muted-foreground">
                                Be notified when new collections and products are released
                            </p>
                        </div>
                        <Switch
                            checked={pushPreferences.newProducts}
                            onCheckedChange={(checked) => setPushPreferences({ ...pushPreferences, newProducts: checked })}
                        />
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                            <h4 className="font-medium">Price Drops</h4>
                            <p className="text-sm text-muted-foreground">Get notified when items in your wishlist go on sale</p>
                        </div>
                        <Switch
                            checked={pushPreferences.priceDrops}
                            onCheckedChange={(checked) => setPushPreferences({ ...pushPreferences, priceDrops: checked })}
                        />
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                            <h4 className="font-medium">Back in Stock</h4>
                            <p className="text-sm text-muted-foreground">
                                Get notified when out-of-stock items become available again
                            </p>
                        </div>
                        <Switch
                            checked={pushPreferences.backInStock}
                            onCheckedChange={(checked) => setPushPreferences({ ...pushPreferences, backInStock: checked })}
                        />
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <div className="flex items-center gap-2">
                        <MessageSquare className="h-5 w-5 text-gold-600" />
                        <CardTitle>Communication Preferences</CardTitle>
                    </div>
                    <CardDescription>Set your preferred communication frequency and contact information</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div>
                        <h4 className="font-medium mb-3">Communication Frequency</h4>
                        <RadioGroup value={frequency} onValueChange={setFrequency} className="space-y-3">
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="daily" id="daily" />
                                <Label htmlFor="daily">Daily (Get the latest updates every day)</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="weekly" id="weekly" />
                                <Label htmlFor="weekly">Weekly (Receive a weekly digest)</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="monthly" id="monthly" />
                                <Label htmlFor="monthly">Monthly (Get a monthly summary)</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="important" id="important" />
                                <Label htmlFor="important">Important Only (Order updates and security alerts)</Label>
                            </div>
                        </RadioGroup>
                    </div>

                    <Separator />

                    <div className="space-y-4">
                        <h4 className="font-medium">Contact Information</h4>
                        <div className="space-y-2">
                            <Label htmlFor="email">Email Address</Label>
                            <Input
                                id="email"
                                type="email"
                                value={contactInfo.email}
                                onChange={(e) => setContactInfo({ ...contactInfo, email: e.target.value })}
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="phone">Phone Number</Label>
                            <Input
                                id="phone"
                                type="tel"
                                value={contactInfo.phone}
                                onChange={(e) => setContactInfo({ ...contactInfo, phone: e.target.value })}
                            />
                            <p className="text-xs text-muted-foreground">Used for SMS notifications and order updates</p>
                        </div>
                    </div>
                </CardContent>
                <CardFooter className="flex justify-between border-t pt-6">
                    <Button variant="outline">Reset to Default</Button>
                    <Button onClick={handleSavePreferences} disabled={isSubmitting}>
                        {isSubmitting ? (
                            <>
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                Saving
                            </>
                        ) : (
                            <>
                                <Save className="mr-2 h-4 w-4" />
                                Save Preferences
                            </>
                        )}
                    </Button>
                </CardFooter>
            </Card>
        </div>
    )
}
