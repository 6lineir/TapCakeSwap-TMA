
import { useEffect, useState } from 'react';
import { bear, coin, highVoltage, rocket, trophy, tcs } from './../images';
import { Link } from "react-router-dom";


const TapClick = () => {
    // console.log(preCoin);
    if (localStorage.getItem('coin') === null) {
        localStorage.setItem('coin', parseInt(0))
        localStorage.setItem('energy', parseInt(100))
    }
    const preCoin = parseInt(localStorage.getItem('coin'))
    let energy_int = parseInt(localStorage.getItem('energy'))
    const [points, setPoints] = useState(preCoin);
    const [energy, setEnergy] = useState(energy_int);
    const [clicks, setClicks] = useState<{ id: number, x: number, y: number }[]>([]);
    const pointsToAdd = 1;
    const energyToReduce = 1;
    const handleLevel = (points) => {
        // console.warn(points);
        if (points <= 500) {
            energy_int = 100
            return 'Bronze'
        }
        if (points <= 1000) {
            energy_int = 200
            return 'Silver'
        }
        if (points <= 10000) {
            energy_int = 300
            return 'Gold'
        }
        if (points <= 100000) {
            energy_int = 400
            return 'Platinum'
        }
        if (points <= 1000000) {
            energy_int = 500
            return 'Diamond'
        }
        if (points <= 10000000) {
            energy_int = 600
            return 'Epic'
        }
        if (points <= 100000000) {
            energy_int = 700
            return 'Legendary'
        }
        if (points <= 1000000000) {
            energy_int = 800
            return 'Master'
        }
        if (points <= 10000000000) {
            energy_int = 900
            return 'GrandMaster'
        }
        if (points <= 100000000000) {
            energy_int = 1000
            return 'Lord'
        }


    }

    const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (energy - energyToReduce < 0) {
            return;
        }

        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        setPoints(points + pointsToAdd);
        localStorage.setItem('coin', points + pointsToAdd)
        setEnergy(energy - energyToReduce < 0 ? 0 : energy - energyToReduce);
        localStorage.setItem('energy', energy - energyToReduce < 0 ? 0 : energy - energyToReduce)
        setClicks([...clicks, { id: Date.now(), x, y }]);
    };

    const handleAnimationEnd = (id: number) => {
        setClicks((prevClicks) => prevClicks.filter(click => click.id !== id));
    };

    // useEffect hook to restore energy over time
    useEffect(() => {
        const interval = setInterval(() => {
            setEnergy((prevEnergy) => Math.min(prevEnergy + 1, energy_int));
            localStorage.setItem('energy',energy + 1)


        }, 1000); // Restore 10 energy points every second

        return () => clearInterval(interval); // Clear interval on component unmount
    }, [energy, energy_int]);

    return (
        <div className="bg-gradient-main min-h-screen px-4 flex flex-col items-center text-white font-medium">
            <div className="absolute inset-0 h-1/2 bg-gradient-overlay z-0"></div>
            <div className="absolute inset-0 flex items-center justify-center z-0">
                <div className="radial-gradient-overlay"></div>
            </div>

            <div className="w-full z-10 min-h-screen flex flex-col items-center text-white">

                <div className="fixed top-0 left-0 w-full px-4 pt-8 z-10 flex flex-col items-center text-white">
                    <div className="w-full cursor-pointer">
                        <div className="bg-[#1f1f1f] text-center py-2 rounded-xl">
                            <a href="https://t.me/test" target='_blank'>
                                <p className="text-lg">Join Channel</p>
                            </a>
                        </div>
                    </div>
                    <div className="mt-10 flex items-center">
                        <img src={tcs} width={40} height={40} />
                        <span className="count-point ml-2">{points.toLocaleString()}</span>
                    </div>
                    <div className="text-base mt-2 flex items-center">
                        <img src={trophy} width={24} height={24} />
                        <span className="ml-1"> {handleLevel(points)}</span>
                    </div>

                </div>


                <div className="fixed bottom-0 left-0 w-full px-4 pb-4 z-10">
                    <div className="w-full flex justify-between gap-2">
                        <div className="w-1/3 flex items-center justify-start max-w-32">
                            <div className="flex items-center justify-center">
                                <img src={highVoltage} width={35} height={35} alt="High Voltage" />
                                <div className="ml-2 text-left">
                                    <span className="text-white text-2xl font-bold block">{energy}</span>
                                    <span className="text-white text-large opacity-75">/ {energy_int}</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex-grow flex items-center max-w-60 text-sm">
                            <div className="w-full bg-[#fad258] py-4 rounded-2xl flex justify-around">
                                <button className="flex flex-col items-center gap-1">
                                    <img src={bear} width={24} height={24} alt="High Voltage" />
                                    <span>Frens</span>
                                </button>
                                <div className="h-[48px] w-[2px] bg-[#fddb6d]"></div>
                                <Link to="/eran">
                                    <button className="flex flex-col items-center gap-1">
                                        <img src={coin} width={24} height={24} alt="High Voltage" />
                                        <span>Earn</span>
                                    </button>
                                </Link>
                                <div className="h-[48px] w-[2px] bg-[#fddb6d]"></div>
                                <Link to="/boost">
                                    <button className="flex flex-col items-center gap-1">
                                        <img src={rocket} width={24} height={24} alt="High Voltage" />
                                        <span>Boosts</span>
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="w-full bg-[#f9c035] rounded-full mt-4">
                        <div className="bg-gradient-to-r from-[#f3c45a] to-[#fffad0] h-4 rounded-full" style={{ width: `${(energy / energy_int) * 100}%` }}></div>
                    </div>
                </div>


                <div className="flex-grow flex items-center justify-center">
                    <div className="relative mt-4 csscoin" onClick={handleClick}>
                        <img src={tcs} width={256} height={256} alt="coin" />
                        {clicks.map((click) => (
                            <div
                                key={click.id}
                                className="absolute text-3xl font-bold opacity-0 "
                                style={{
                                    top: `${click.y - 42}px`,
                                    left: `${click.x - 28}px`,
                                    animation: `float 1s ease-out`
                                }}
                                onAnimationEnd={() => handleAnimationEnd(click.id)}
                            >
                                1
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div >
    );

}
export default TapClick