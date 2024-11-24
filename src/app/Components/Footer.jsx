import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaPinterest } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import Image from "next/image";

const Footer=()=> {

    const contacts=[
        {
            url:"https://ik.imagekit.io/balaharisankar/elbrit/contact1.png",
            title:"Phone Number",
            value:"+974 3118 1843"
        },
        {
            url:"https://ik.imagekit.io/balaharisankar/elbrit/contact2.png",
            title:"Email Address",
            value:"elbrithcqhr@gmail.com"
        },
        {
            url:"https://ik.imagekit.io/balaharisankar/elbrit/contact3.png",
            title:"Office Location",
            value:"Ambassador Street, Zone 61"
        }
    ]

    return (
        <div className="w-full flex flex-col items-center gap-8 px-4 p-5 bg-[#17414F]">
             <div className="w-full md:max-w-[75%] min-w-[50%] flex gap-4 flex-wrap  justify-center ">
                {
                    contacts?.map((contact,index)=>{
                        return(
                            <div className="w-[320px] text-white bg-[#215D72] px-3 py-2 rounded-lg flex gap-2 items-center" key={index}>
                                <Image width={60} height={40} className="scale-75" src={contact?.url} alt="contact elbrit"/>
                                <div>
                                    <p className="font-light">{contact?.title}</p>
                                    <p className="font-medium">{contact?.value}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className="w-full md:max-w-[65%] min-w-[50%] flex flex-wrap gap-12">
                <div className="w-[300px] flex flex-col gap-4">
                    <Image width={300} height={250} className="bg-white p-2" src="https://ik.imagekit.io/balaharisankar/elbrit/elbrit-logo.png" alt="elbrit" />
                   
                </div>
                <div className="w-[405px]">
                <p className="text-white text-sm leading-[24px]">Your health, physical and emotional well-being is important to us. We are always by your side and have made it even easier for you to find the necessary vitamins.</p>
                </div>
            </div>
            <div className="w-full md:max-w-[66%] min-w-[50%] flex flex-wrap gap-4 py-2">
                    <div className="text-white flex gap-2 text-xs">
                        <CiLocationOn className="text-lg"/>
                        <p>Elbrit Life Science Private Limited. C20,BKG, G Block, Mumbai - 400051</p>
                    </div>
            </div>
        </div>
    )
}

export default Footer;