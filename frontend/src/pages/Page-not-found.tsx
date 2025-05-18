import {Link} from "react-router-dom";

export const PageNotFound = () => {
    return (
        <div className="flex justify-center items-center pb-3 flex-col bg-[#191A1C] min-h-screen">
            <div className="flex justify-center items-center pb-3 gap-3 flex-col">
            <img src="/images/logo_noBg.svg" alt="logo" className="w-[20%] h-[20%] [ md:w-[60%] md:h-[20%]"/>
            <p className="pl-4 font-black text-[#FFC83E] text-3xl">PAGE NOT FOUND 404</p>
            </div>
            <p className="text-blue-400"><Link to="/login"> back to Login</Link> </p>
        </div>
    )
}
