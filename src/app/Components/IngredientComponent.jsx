import React from "react";

const IngredientComponent=()=> {
    const ingredients = [
        {
            url: "https://ik.imagekit.io/balaharisankar/elbrit/ingre1.png",
            title: "Vitamin C",
            desc: "Vitamin C as ascorbic acid"
        }, {
            url: "https://ik.imagekit.io/balaharisankar/elbrit/ingre2.png",
            title: "Vitamin B3",
            desc: "Niacin for healthy gut and skin"
        },
        {
            url: "https://ik.imagekit.io/balaharisankar/elbrit/ingre3.png",
            title: "Magnesium",
            desc: "Boost energy and support muscle function"
        },
        {
            url: "https://ik.imagekit.io/balaharisankar/elbrit/ingre4.png",
            title: "Hyuluronic Acid",
            desc: "For smooth, supple and soft skin"
        },
        {
            url: "https://ik.imagekit.io/balaharisankar/elbrit/ingre1.png",
            title: "Lactobacillus",
            desc: "Invigorate your gut microbiome"
        },
    ]
    return (
        <div className="w-full flex justify-center">
            <div className="w-full md:max-w-[75%] min-w-[50%] px-4 py-16 flex flex-wrap gap-8 justify-center md:justify-start">
                <div className="max-w-[300px] md:max-w-[380px]">
                    <p className="text-sm font-semibold text-blue-950">INGREDIENTS</p>
                    <h1 className="w-[100%] md:w-[50%] text-4xl font-bold my-3 text-[#17414F]">Better Ingredients</h1>
                    <p className="text-[#808283] text-sm my-4">Only the best when you choose products offered on our platform - high-quality ingredients for high quality products!</p>
                </div>
                {
                    ingredients?.map((ingredient, index) => {
                        return (
                            <div className="max-w-[300px] relative" key={index}>
                                <img src={ingredient?.url} alt="vitamin" />
                                <p className="text-[#17414F] font-semibold absolute top-4 left-6 text-lg">{ingredient?.title}</p>
                                <p className="max-w-[75%] text-[#808283] text-sm my-4 absolute top-8 font-medium left-6">{ingredient?.desc}</p>
                                <p className="w-fit text-center text-[#2D3F59] text-sm font-semibold border-b-2 border-[#2D3F59] absolute left-6 bottom-7 cursor-pointer">See More</p>
                            </div>
                        )
                    })
                }
                <div className="flex flex-col gap-4">
                    <div className="w-fit p-8 rounded-md rounded-br-[50px] bg-[#A0DDF2]">
                    </div>
                    <div className="w-fit p-8 rounded-[50%] bg-[#FFCC56]">
                    </div>
                </div>
            </div>
        </div>
    )
}

export default IngredientComponent;