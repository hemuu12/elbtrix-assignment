import Image from "next/image";
import React from "react";

const FeaturesComponent=()=> {
    const features = [
        {
            url: "https://ik.imagekit.io/balaharisankar/elbrit/feature1.png",
            title: "Clinically Studied",
            desc: "All products that we offer have undergone lab and safety tests"
        },
        {
            url: "https://ik.imagekit.io/balaharisankar/elbrit/feature2.png",
            title: "Vegetarian Friendly",
            desc: "We have a wide selection of vegetatian products to meet your needs."
        },
        {
            url: "https://ik.imagekit.io/balaharisankar/elbrit/feature3.png",
            title: "Made In India",
            desc: "Shop local and explore health products made right here in india"
        },
        {
            url: "https://ik.imagekit.io/balaharisankar/elbrit/feature4.png",
            title: "Free Shipping",
            desc: "We deliver to your door with no shipping costs on your orders"
        },
        {
            url: "https://ik.imagekit.io/balaharisankar/elbrit/feature5.png",
            title: "No Risk",
            desc: "We ensure that all products are safe and within their use-by date"
        },
        {
            url: "https://ik.imagekit.io/balaharisankar/elbrit/feature6.png",
            title: "GMO Free",
            desc: "Natural, no modified products and derivatives for those who need it"
        },
    ]
    return (
        <div className="w-full flex justify-center px-4 -translate-y-[120px]">
            <div className="w-full md:max-w-[75%] min-w-[50%] bg-[#17414F] rounded-[50px] flex gap-12 flex-wrap justify-center">
                {
                    features?.map((feature, index) => {
                        return (
                            <div className="flex flex-col items-center gap-3 max-w-[280px] py-4 -translate-y-[50px]" key={index}>
                                <div className="w-[80px] h-[80px] bg-white rounded-[50%] flex justify-center items-center" >
                                    <Image className="w-[60px]" width={60} height={60} src={feature?.url} alt="elbrit" loading="lazy" />
                                </div>
                                <h1 className="text-white text-xl font-semibold">{feature?.title}</h1>
                                <p className="text-white font-light text-center text-sm">{feature?.desc}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default FeaturesComponent;