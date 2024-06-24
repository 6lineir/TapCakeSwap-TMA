const NoPage = () => {
    return <div className="bg-gradient-main min-h-screen px-4 flex flex-col items-center text-white font-medium">
        <div className="absolute inset-0 h-1/2 bg-gradient-overlay z-0"></div>
        <div className="absolute inset-0 flex items-center justify-center z-0">
            <div className="radial-gradient-overlay"></div>
        </div>

        <div className="w-full z-10 min-h-screen flex flex-col items-center text-white">

            <div className="fixed top-0 left-0 w-full px-4 pt-8 z-10 flex flex-col items-center text-white">
                {/* <div className="w-full cursor-pointer">
                    <div className="bg-[#1f1f1f] text-center py-2 rounded-xl">
                        <a href="https://t.me/test" target='_blank'>
                            <p className="text-lg"></p>
                        </a>
                    </div>
                </div> */}
                <div className="mt-10 flex items-center">
                  
                    <span className="count-point ml-2">Error 404</span>
                </div>
                <div className="text-base mt-2 flex items-center">
                   
                    <span className="ml-1">Page Not Found</span>
                </div>

            </div>

        </div>
    </div>;
};

export default NoPage;