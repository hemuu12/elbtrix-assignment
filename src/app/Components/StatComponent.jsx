import React from "react";


const StatComponent=()=>{
    const stats=[
        {
            value:"14K",
            title:"Customers"
        },
        {
            value:"37K",
            title:"Products Sold"
        },
        {
            value:"10+",
            title:"Years Experience"
        },
        {
            value:"13",
            title:"Licensed Store"
        }
    ]
    return(
        <div className="w-full flex justify-center bg-[#17414F]">
            <div className="w-full md:max-w-[90%] min-w-[50%] px-4 py-8 flex flex-wrap gap-8 justify-center ">
                {
                    stats?.map((stat,index)=>{
                        return(
                            <div className="min-w-[200px] my-4 flex flex-col gap-2 items-center" key={index}>
                                <h1 className="text-[#FFCC56] text-4xl font-bold">{stat?.value}</h1>
                                <p className="text-sm text-white">{stat?.title}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default StatComponent;