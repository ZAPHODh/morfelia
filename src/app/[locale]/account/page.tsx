import AccountOverview from "@/components/account/overview-page"
import type { Metadata } from "next"


export const metadata: Metadata = {
    title: "Account Overview",
    description: "View your account overview and recent activity",
}

export default function AccountPage() {
    return <AccountOverview />
}
