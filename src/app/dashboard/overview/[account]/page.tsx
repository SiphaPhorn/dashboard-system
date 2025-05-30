"use client"

import { useParams, usePathname, useSearchParams } from "next/navigation";

export default function Page() {

    const params = useParams<{ account: string }>()
    const pathname = usePathname()
    const searchParams = useSearchParams()

    return (
        <h2 className="text-center">
            Overview: {params.account}
            Path Name: {pathname}
            Search Param: {searchParams.get("id")}
            Search Param: {searchParams.get("transacId")}
        </h2>
    )
}