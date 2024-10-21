import React from "react";
import Navbar from "./Navbar";
import { albumsData } from "../assets/assets/frontend-assets/assets";
import Albumitem from "./Albumitem";
import { songsData } from "../assets/assets/frontend-assets/assets";
import Songitem from "./Songsitem";
const DisplayHome =()=>{
    return (
        <>
        <Navbar />
        <div className="mb-2">
            <h1 className="font-bold my-5 text-2xl">Featured Data</h1>
            <div  className="flex overflow-auto">
            {albumsData.map((item,index)=>(<Albumitem key={index} name={item.name} desc={item.desc} id={item.id} image={item.image} />))}
            </div>
        </div>
        <div className="mb-2">
            <h1 className="font-bold my-5 text-2xl">Today's biggest Hits</h1>
            <div  className="flex overflow-auto">
            {songsData.map((item,index)=>(<Songitem key={index} name={item.name} desc={item.desc} id={item.id} image={item.image}/ >))}
            </div>
        </div>
        </>
    )
}
export default DisplayHome;