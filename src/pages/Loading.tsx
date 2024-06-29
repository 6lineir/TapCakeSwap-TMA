import { Link } from "react-router-dom";
import { Commet } from "react-loading-indicators";

const Loading = ({ props }) => {
    return (
        <div className="bg-gradient-main min-h-screen px-4 flex flex-col items-center text-white font-medium">
            <div className="absolute inset-0 h-1/2 bg-gradient-overlay z-0"></div>
            <div className="absolute inset-0 flex items-center justify-center z-0">
                <div className="radial-gradient-overlay"></div>
            </div>
            <div className="w-full z-10 mt-10 flex flex-col items-center text-white">
                <Link to="/">
                    <div className="bg-[#444444] text-center py-2 px-4 rounded-2xl">
                        <p className="text-lg">{props}</p>
                    </div>
                </Link>
            </div>
            <div className="flex-grow flex items-center justify-center z-10  text-white">

                <Commet color="#7d31cc" size="large" text="" textColor="" />

            </div>
        </div>

    )
};

export default Loading;