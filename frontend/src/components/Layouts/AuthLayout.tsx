
const AuthLayout = ({children}:{ children: React.ReactNode }) => {
    return (
        <div className="flex justify-center items-center min-h-screen bg-[#191A1C] p-4">
            <div className="bg-[#272829] w-full sm:w-[85%] md:w-[65%] lg:w-[45%] xl:w-[35%] p-4 sm:p-6 md:p-[3%] rounded-md shadow-xl">
                {children}
            </div>
        </div>
    )
}
export default AuthLayout
