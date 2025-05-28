
import AppFooter from "@/components/layout/AppFooter"
import { Navbar } from "@/components/layout/navbar"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
        <Navbar/>
        {children}
        <AppFooter/>
    </div>
  )
}