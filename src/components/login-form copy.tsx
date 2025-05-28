"use client"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useRouter } from "next/navigation"

export function LoginForm({
  className,
  ...props
  
}: React.ComponentPropsWithoutRef<"div">) {

     const router = useRouter()

    function Login(){

      router.push("/dashboard")
 
    }

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  placeholder="name"
                />
              </div>
              <div className="grid gap-2">
                 <Label htmlFor="name">Password</Label>
                <Input id="password" type="password"   placeholder="*******" />
              </div>
              <Button onClick={Login} type="button" className="w-full">
                Login
              </Button>
            
            </div>
          
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
