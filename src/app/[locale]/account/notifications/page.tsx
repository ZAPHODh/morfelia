import type { Metadata } from "next"
import NotificationsPage from "@/components/account/notifications-page"

export const metadata: Metadata = {
    title: "Notification Preferences",
    description: "Manage your notification and communication preferences",
}

export default function Notifications() {
    return <NotificationsPage />
}
