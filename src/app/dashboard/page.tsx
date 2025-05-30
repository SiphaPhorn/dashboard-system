import { redirect } from "next/navigation"

export default function Page() {

    const isLoggedIn = true

    if (isLoggedIn) {
        return redirect("/dashboard/overview")
    } else {
        return redirect("/login")
    }
}