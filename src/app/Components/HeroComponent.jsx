import Image from "next/image";
import React from "react";

const  HeroComponent=()=>{

    const benifits=[
        {
            url:"https://ik.imagekit.io/balaharisankar/elbrit/vitamins.png",
            title:"Vitamins",
            desc:"Increased Vitamins and Minarals in your diet."
        },
        {
            url:"https://ik.imagekit.io/balaharisankar/elbrit/weightloss.png",
            title:"Weight Loss",
            desc:"Find scientifically proven solution."
        },
        {
            url:"https://ik.imagekit.io/balaharisankar/elbrit/funcfood.png",
            title:"Functional Foods",
            desc:"Functional Foods from protein powders to baby formula"
        },
    ]

    return(
        <div className="w-full bg-[#E2F5FB] min-h-[75vh] px-2 pb-48">
            <h1 className="font-black text-center pt-8 text-blue-950 text-5xl md:text-6xl lg:text-8xl ">Essential Vitamins</h1>
            <div className="w-ful px-4 flex flex-wrap justify-center items-center gap-16 md:gap-24 mt-12 md:mt-16">
                <div className="flex flex-col gap-4">
                    <p className="text-xl text-[#808283]">Online Medical Supplies</p>
                    <p className="text-3xl font-bold w-[260px] text-[#17414F]">Get Your Vitamins & Minarals</p>
                    <button className="ps-8 pe-12 w-fit bg-[#17414F] font-medium py-3 rounded-3xl text-sm text-white">EXPLORE</button>
                </div>
                <div className="w-[300px] h-[300px] bg-[#FFE9B5] rounded-tl-[50%] rounded-br-[50%]">
                    <Image width={450} height={200} className="-translate-y-[60px] -translate-x-4" src="https://ik.imagekit.io/balaharisankar/elbrit/hero-img.png" alt="elbrit" loading="lazy"/>
                </div>
                <div className="flex flex-col gap-8">
                    {
                        benifits.map((benifit,index)=>{
                            return(
                                <Benifits benifit={benifit} key={index}/>
                            )
                        })
                    }
                </div>
                <div className="min-w-[80vw] flex gap-2  md:ml-36">
                    <div className="p-4 w-fit rounded-[100%] bg-[#A6B8CA]"></div>
                    <div className="p-4 w-fit rounded-[100%] bg-[#A6B8CA]"></div>
                </div>
            </div>
        </div>
    )
}

const Benifits=({benifit})=>{
    return(
        <div className="flex gap-3 w-[300px]">
            <Image height={75} width={75}  className="h-[75px]" src={benifit?.url} alt="elbrit benifits" loading="lazy"/>
            <div>
                <h1 className="font-bold text-xl text-[#17414F]">{benifit?.title}</h1>
                <p className="text-[#808283] mt-1">{benifit?.desc}</p>
            </div>
        </div>
    )
}
export default HeroComponent;