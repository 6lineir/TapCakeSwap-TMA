import { Link } from "react-router-dom";


const Earns = () => {
    return (
        <div className="bg-gradient-main min-h-screen px-4 flex flex-col items-center text-white font-medium">
            <div className="absolute inset-0 h-1/2 bg-gradient-overlay z-0"></div>
            <div className="absolute inset-0 flex items-center justify-center z-0">
                <div className="radial-gradient-overlay"></div>
            </div>

            <div className="w-full z-10 min-h-screen flex flex-col items-center text-white">

                <h1 className="mt-10 font-bold">  Comin Soon ...</h1>
                <Link to="/">
                    <div className="bg-[#1f1f1f] text-center mt-5 py-2 px-2 rounded-xl">
                        <p className="text-lg">Go To Tap</p>
                    </div>
                </Link>
            </div>
        </div>

    )
};

export default Earns;