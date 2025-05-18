
const AuthLayout = ({children}:{ children: React.ReactNode }) => {
    return (
        <div className="flex justify-center items-center min-h-screen bg-[#191A1C]">
            <div className="bg-[#272829] w-[35%] p-[3%] rounded-md shadow-xl">
                {children}
            </div>
        </div>
    )
}
export default AuthLayout
