import type { Metadata } from "next"
import SettingsPage from "@/components/account/settings-page"

export const metadata: Metadata = {
    title: "Account Settings",
    description: "Manage your personal information and account settings",
}

export default function Settings() {
    return <SettingsPage />
}
