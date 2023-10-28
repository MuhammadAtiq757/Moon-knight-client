import Work from "./Work";
import card1 from "./../../../assets/images/WorkSectionImg/icons8-shop-location-64.png"
import card2 from "./../../../assets/images/WorkSectionImg/icons8-shop-location-64.png"
import card3 from "./../../../assets/images/WorkSectionImg/icons8-shop-location-64.png"

const WorkSection = () => {
    return (
       <div>
         <Work/>
         <div className="grid p-8 pt-8 lg:grid-cols-3 md:grid-cols-3 xl:grid-cols-3 gap-4">
            <div className="shadow-2xl card bg-base-100 h-72 pt-8 w-11/12">
                <div className='flex justify-center items-center'>
                    <span className='h-24 w-24 rounded-full bg-indigo-500'>
                    <img className='h-20 w-20 pt-6 pl-4 text-white' src={card1} alt="" />
                    </span>
                </div>
                <div className='text-center p-3'>
                    <h1 className='text-slate-700 text-xl font-mono pt-2'>01. Search for Location</h1>
                    <p className='text-slate-500 text-base font-mono pt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis et sem sed sollicitudin. Donec non odio…</p>
                </div>
            </div>

            <div className="shadow-2xl card bg-base-100 h-72 pt-8 w-11/12">
                <div className='flex justify-center items-center'>
                    <span className='h-24 w-24 rounded-full bg-red-500'>
                    <img className='h-20 w-20 pt-6 pl-4 text-white' src={card2} alt="" />
                    </span>
                </div>
                <div className='text-center p-3'>
                    <h1 className='text-slate-700 text-xl font-mono pt-2'>01. Search for Location</h1>
                    <p className='text-slate-500 text-base font-mono pt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis et sem sed sollicitudin. Donec non odio…</p>
                </div>
            </div>

            <div className="shadow-2xl card bg-base-100 h-72 pt-8 w-11/12">
                <div className='flex justify-center items-center'>
                    <span className='h-24 w-24 rounded-full bg-sky-500'>
                    <img className='h-20 w-20 pt-6 pl-4 text-white' src={card3} alt="" />
                    </span>
                </div>
                <div className='text-center p-3'>
                    <h1 className='text-slate-700 text-xl font-mono pt-2'>01. Search for Location</h1>
                    <p className='text-slate-500 text-base font-mono pt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis et sem sed sollicitudin. Donec non odio…</p>
                </div>
            </div>

        </div>
       </div>
    );
};

export default WorkSection;