import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Link } from "react-router-dom";
import { AxiosError } from "axios";
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
import AuthLayout from "@/components/Layouts/AuthLayout.tsx";
import { useAuth } from "@/context/AuthContext";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

interface ApiErrorResponse {
    success: boolean;
    message: string;
}


const loginSchema = z.object({
    email: z.string().email({ message: "Valid Email required !" }),
    password: z.string().min(6, { message: "Password must be at least 6 characters !" }),
});

export const Login = () => {
    const { login } = useAuth();
    const [error, setError] = useState<string | null>(null);
    const form = useForm<z.infer<typeof loginSchema>>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });



    //Mutating a User
    const loginMutation = useMutation({
        mutationFn: (values: z.infer<typeof loginSchema>) => {
            return login(values.email, values.password);
        },
        onSuccess: () => {
            toast({
                title: "Register Successful",
                description: "You have been logged in successfully.",
                variant: "default",
            });
        },
        onError: (error: AxiosError<ApiErrorResponse>) => {
            setError(error.response?.data?.message || "Login failed. Please try again.");
            toast({
                title: "Login Failed",
                description: error.response?.data?.message,
                variant: "destructive",
            });
        },
    });



    function onSubmit(values: z.infer<typeof loginSchema>) {
        setError(null);
        loginMutation.mutate(values);
    }

    return (
        <AuthLayout>
            <Form {...form}>
            <div className="flex flex-col sm:flex-row justify-center items-center pb-3 gap-2 sm:gap-0">
                <img src="/images/logo_noBg.svg" alt="logo" className="w-[30%] sm:w-[25%] md:w-[20%]" />
                <p className="text-white text-xl sm:text-2xl sm:pl-4 font-black">LOGIN</p>
            </div>
            {error && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-2 sm:px-4 py-2 sm:py-3 rounded mb-4 text-sm sm:text-base">
                    {error}
                </div>
            )}
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3 sm:space-y-4 text-white">
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

                    <div className="flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0">
                        <p className="text-sm sm:text-base">Don't have an account <Link to="/register" className="text-blue-400"> Register </Link> </p>
                    </div>
                    <Button type="submit" disabled={loginMutation.isPending}  className="w-full">
                        {loginMutation.isPending ? "Logging in..." : "Submit"}
                    </Button>
                </form>
            </Form>
        </AuthLayout>
    )
}
