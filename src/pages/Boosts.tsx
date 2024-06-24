import { Link } from "react-router-dom";

const Boosts = () => {
    return (
        <div className="bg-gradient-main min-h-screen px-4 flex flex-col items-center text-white font-medium">
            <div className="absolute inset-0 h-1/2 bg-gradient-overlay z-0"></div>
            <div className="absolute inset-0 flex items-center justify-center z-0">
                <div className="radial-gradient-overlay"></div>
            </div>

            <div className="w-full z-10 min-h-screen flex flex-col items-center text-white">

                <Link to="/">
                    <div className="bg-[#1f1f1f] text-center mt-10 py-2 px-2 rounded-xl">
                        <p className="text-lg">Go To Tap</p>
                    </div>
                </Link>
            </div>
        </div>

    )
};

export default Boosts;