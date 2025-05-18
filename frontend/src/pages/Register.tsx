import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Link } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { Button } from "@/components/ui/button.tsx";
import { AxiosError } from "axios";
import { useState } from "react";
import { toast } from "@/hooks/use-toast"; // Add this import
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import AuthLayout from "@/components/Layouts/AuthLayout.tsx";
import { useMutation } from "@tanstack/react-query";
interface ApiErrorResponse {
    success: boolean;
    message: string;
}



const RegisterSchema = z.object({
    username: z.string().min(3, { message: "Username must be at least 6 characters !" }),
    email: z.string().email({ message: "Valid Email required !" }),
    password: z.string().min(6, { message: "Password must be at least 6 characters !" }),
    role: z.enum(["USER", "ADMIN"]),
});


export const Register = () => {
    const { register } = useAuth();
    const [error, setError] = useState<string | null>(null);
    const form = useForm<z.infer<typeof RegisterSchema>>({
        resolver: zodResolver(RegisterSchema),
        defaultValues: {
            username: "",
            email: "",
            password: "",
            role: "USER"
        }
    });

    const registerMutation = useMutation({
        mutationFn: (values: z.infer<typeof RegisterSchema>) => {
            return register(values.username, values.email, values.password, values.role);

        },
        onSuccess: () => {
            toast({
                title: "Register Successful",
                description: "You have been logged in successfully.",
                variant: "default",
            });
        },
        onError: (error: AxiosError<ApiErrorResponse>) => {
            console.log(error.response?.data)
            setError(error.response?.data?.message || "Registration failed. Please try again.");
            toast({
                title: "Registration failed",
                description: error.response?.data?.message,
                variant: "destructive",
            });
        },
    })

    function onSubmit(values: z.infer<typeof RegisterSchema>) {
        console.log(values);
        setError(null);
        registerMutation.mutate(values);
    }

    return (
        <AuthLayout>
            <Form {...form}>
                <div className="flex flex-col sm:flex-row justify-center items-center pb-3 gap-2 sm:gap-0">
                    <img src="/images/logo_noBg.svg" alt="logo" className="w-[30%] sm:w-[25%] md:w-[20%]" />
                    <p className="text-white text-xl sm:text-2xl sm:pl-4 font-black">REGISTER</p>
                </div>
                {error && (
                    <div className="bg-red-100 border border-red-400 text-red-700 px-2 sm:px-4 py-2 sm:py-3 rounded mb-4 text-sm sm:text-base">
                        {error}
                    </div>
                )}
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2 text-white">
                    <FormField
                        control={form.control}
                        name="username"
                        render={({ field }) => (
                            <FormItem className="text-white">
                                <FormLabel>Username</FormLabel>
                                <FormControl>
                                    <Input placeholder="John Doe ..." {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
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
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0">
                        <p className="text-sm sm:text-base">Have an account <Link to="/login" className="text-blue-400"> Login </Link> </p>
                    </div>
                    <Button
                        type="submit"
                        disabled={registerMutation.isPending}
                         className="w-full"
                    >
                        {registerMutation.isPending ? "Registering..." : "Submit"}
                    </Button>
                </form>
            </Form>
        </AuthLayout>
    )
}
