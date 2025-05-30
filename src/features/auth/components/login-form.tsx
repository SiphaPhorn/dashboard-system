"use client"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { authUser } from "@/constants/data"
import { useState } from "react"


const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 chars"
  })
    .max(50, {
      message: "Username must be 50 max chars"
    }),
  password: z.string().nonempty({
    message: "Password is required"
  })
})

// type LoginRequest = {
//   username: string;
//   password: string;
// }



export function LoginForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {

  const router = useRouter()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: ""
    }
  })

  const {
    handleSubmit,
    watch
  } = form

  const username = watch("username")

  const [authMessage, setAuthMessage] = useState<string>()

  function onSubmit(data: z.infer<typeof formSchema>) {
    const { username, password } = authUser

    if (username === data.username &&
      password === data.password) {
        router.replace("/dashboard/overview")
      } else {
          setAuthMessage("Bad credentials")
      }
  }

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>

      <Form {...form}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col items-center gap-2">
              <Link
                href="/"
                className="flex flex-col items-center gap-2 font-medium"
              >
                <div className="flex items-center justify-center rounded-md">
                  <Image src="/RTR-LOGO.png" width={80} height={80} alt="ISTAD Course" />
                </div>
                <span className="sr-only">iSTAD</span>
              </Link>
              <h1 className="text-xl font-bold">Welcome {username} to iSTAD</h1>
              <p className="text-red-500">{authMessage}</p>
            </div>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Username</FormLabel>
                      <FormControl>
                        <Input placeholder="istad" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="grid gap-2">
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input type="password" placeholder="****" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <Button
                type="submit" className="w-full">
                Login
              </Button>
            </div>
          </div>
        </form>
      </Form>

      <div className="text-balance text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 hover:[&_a]:text-primary">
        By clicking log in, you agree to our <a href="#">Terms of Service</a>{" "}
        and <a href="#">Privacy Policy</a>.
      </div>
    </div>
  )
}
