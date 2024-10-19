import React from "react";
import {assets} from "../assets/assets/frontend-assets/assets"
const Sidebar=()=>{
    return(
        <div className="w-[25%] h-full p-2 flex-col hidden gap-2 text-white lg:flex">
            <div className="h-[15%] bg-[#121212] flex flex-col rounded justify-around">
                <div className="flex items-center gap-3 pl-8 cursor-pointer">
                   <img className="w-6" src={assets.home_icon} alt="" />
                   <p className="font-bold">Home</p>
                </div>
                <div className="flex items-center gap-3 pl-8 cursor-pointer">
                   <img className="w-6" src={assets.search_icon} alt="" />
                   <p className="font-bold">Search</p>
                </div>
            </div>
            <div className="h-[85%] rounded bg-[#121212]">
            <div className="p-4 items-center justify-between flex">
                 <div className="flex items-center gap-3">
                    <img className="w-7" src={assets.stack_icon} alt="" />
                    <p className="font-semibold">Your Library</p>
                 </div>
                 <div className="flex items-center gap-3">
                    <img className="w-5" src={assets.arrow_icon} alt="" />
                    <img className="w-5" src={assets.plus_icon} alt="" />
                 </div>
            </div>
            <div className="p-4 bg-[#242424] font-semibold m-2 flex flex-col items-start justify-start gap-1 pl-4">
            <h1>Create your first playlist</h1>
            <p className="font-light">It's easy we will help you.</p>
            <button className="px-4 py-1.5 bg-white text-black rounded-full text-[15px] mt-4">Create Playlist</button>
            </div>
            <div className="p-4 bg-[#242424] font-semibold m-2 flex flex-col items-start justify-start gap-1 pl-4 mt-4">
            <h1>Let's findsome podcasts to follow</h1>
            <p className="font-light">We'll keep you update on new episode</p>
            <button className="px-4 py-1.5 bg-white text-black rounded-full text-[15px] mt-4">Browse Podcast</button>
            </div>
            </div>
        </div>
    )
}
export default Sidebar;