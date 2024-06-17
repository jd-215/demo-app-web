import arrowtwo from "./../assets/Arrow 2.svg";
import arrowone from "./../assets/Arrow 1.svg";
import gseven from "./../assets/Group 17.svg";
import gsix from "./../assets/Group 16.svg";
import elipse from "./../assets/Ellipse 3.svg";
export const MainCard = () => {
    return (
        <>
            <div className="bg-[#ECECE5] w-full m-4 rounded-lg p-2 flex flex-col">
                <div className="w-full flex flex-row justify-evenly">
                    <div className="flex flex-1 flex-row justify-start w-fit h-fit">
                        <div className="bg-black mx-2 p-2 rounded-full"></div>
                        <div className="bg-black mx-2 p-2 rounded-full"></div>
                    </div>
                    <div className="w-full">
                        <div className="w-full flex flex-1 flex-row justify-end">
                            <button className="hover:bg-slate-400 rounded px-2 font-semibold ">
                                EN
                            </button>
                            <button className="hover:bg-slate-400 rounded px-2 font-semibold flex flex-row">
                                CONTACT US{" "}
                                <img className="py-1 px-2" src={arrowtwo} />
                            </button>
                            <button className="mx-4 hover:bg-slate-400 rounded px-2 ">
                                <img src={gseven} />
                            </button>
                        </div>
                    </div>
                </div>
                {/* middle section */}
                <div className=" w-full h-full flex flex-col justify-evenly px-4">
                    <div className=" text-8xl font-semibold flex flex-row justify-start">
                        WE CREATE
                    </div>
                    <div className=" text-8xl font-semibold flex flex-row justify-end pr-52">
                        BEST DIGITAL <img className=" -z-9  absolute right-28 top-24" src={elipse} />
                    </div>
                    <div className=" text-8xl font-semibold flex flex-row justify-start">
                        PRODUCTS
                    </div>
                </div>
                <div className="w-full flex flex-col">
                    <div className="w-full flex flex-row justify-between px-4">
                        <img src={gsix} />
                        <button className=" flex flex-row font-semibold">
                            WHO WE ARE{" "}
                            <img className="py-2 px-4" src={arrowone} />
                        </button>
                    </div>

                    <div className="w-full flex flex-row justify-between font-semibold px-4">
                        <div className=" w-80">
                            WE ARE THE LEADERS IN WEB & MOBILE DESIGN AND
                            DEVELOPEMENT INDUSTRY.
                        </div>
                        <div className=" w-2/6 text-left font-semibold text-xs">
                            We create quality content and cool ideas. we create
                            websites, applications, 3d design, motion design and
                            animation. We bring the most daring ideas to life.
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
