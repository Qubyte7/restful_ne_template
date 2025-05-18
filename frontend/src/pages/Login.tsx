import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button.tsx";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import AuthLayout from "@/components/Layouts/AuthLayout.tsx";


const loginSchema = z.object({
    email: z.string().email({ message: "Valid Email required !" }),
    password: z.string().min(6, { message: "Password must be at least 6 characters !" }),
    role: z.enum(["USER", "ADMIN"]), // Make role required, remove .default
});

export const Login = () => {
    const form = useForm<z.infer<typeof loginSchema>>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: "",
            password: "",
            role: "USER", // Set a default role
        },
    });

    function onSubmit(values: z.infer<typeof loginSchema>) {
        console.log(values);
    }

    return (
        <AuthLayout>
            <Form {...form}>
                <div className="flex justify-center items-center pb-3">
                    <img src="/images/logo_noBg.svg" alt="logo" className="w-[20%] h-[20%] [ md:w-[20%] md:h-[20%]" />
                    <p className="text-white pl-4 font-black">LOGIN</p>
                </div>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2 text-white">
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem className="text-white">
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input placeholder="client@yahoo.dev ..." {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Password</FormLabel>
                                <FormControl>
                                    <Input placeholder=" * * *" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="role"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Role</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select your role" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        <SelectItem value="USER">User</SelectItem>
                                        <SelectItem value="ADMIN">Admin</SelectItem>
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <div className="flex justify-end items-center">
                        <p>Don't have an account <Link to="/register" className="text-blue-400"> Register </Link> </p>
                    </div>
                    <Button type="submit">Submit</Button>
                </form>
            </Form>
        </AuthLayout>
    )
}
