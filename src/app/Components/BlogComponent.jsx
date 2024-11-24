import Image from "next/image";
import React from "react";

const BlogComponent = () => {
    const blogs = [
        { id: 1, imageUrl: "/blog1.png", content: "The Covid-19 Epidemic In 2022 Is Back", layout: [70, 30] },
        { id: 2, imageUrl: "/blog2.png", content: "The Covid-19 Epidemic In 2022 Is Back", layout: [30, 70] },
    ];

  return (
    <div className="flex-col w-full my-5">
    <h2 className="w-full text-center text-md font-semibold text-primary my-2">OUR BLOG</h2>
    <h1 className="w-full text-center text-2xl font-bold text-primary my-2">Latest News</h1>
    <div className="w-full h-[200vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] px-5 flex flex-col lg:flex-row justify-between items-center">
        {/* Desktop View */}
        {[...Array(4)].map((_, colIndex) => (
            <div
                key={colIndex}
                className="w-full lg:w-[25%] md:h-[25%] h-[100%] lg:h-full p-2 gap-2 flex flex-col items-center justify-between sm:hidden lg:flex"
            >
                {blogs.map(({ id, imageUrl, content, layout }) => (
                    <div
                        key={`${colIndex}-${id}`}
                        className="bg-cover bg-no-repeat rounded-xl relative"
                        style={{
                            width: "97%",
                            height: `${layout[colIndex % layout.length]}%`,
                            backgroundImage: `url(${imageUrl})`,
                            objectFit:"contain"
                        }}
                    >
                        <div className="absolute top-2 left-[-3] bg-[#17414F] w-[100px] h-[30px] text-white text-xs pl-6 flex justify-start items-center rounded-r-full">
                            20 Apr
                        </div>
                        <p className="text-left pl-6 pt-14 w-[80%] text-white font-bold text-base">{content}</p>
                    </div>
                ))}
            </div>
        ))}
        {[...Array(2)].map((_, rowIndex) => (
            <div
                key={`row-${rowIndex}`}
                className="h-full w-full justify-between items-center hidden sm:flex lg:hidden"
            >
                {[...Array(2)].map((_, colIndex) => (
                    <div
                        key={`row-${rowIndex}-col-${colIndex}`}
                        className="h-full w-[50%] p-2 gap-2 flex-col flex items-center justify-between"
                    >
                        {blogs.map(({ id, imageUrl, content, layout }) => (
                            <div
                                key={`${rowIndex}-${colIndex}-${id}`}
                                className="bg-cover bg-no-repeat rounded-xl relative"
                                style={{
                                    width: "100%",
                                    height: `${layout[(rowIndex + colIndex) % layout.length]}%`,
                                    backgroundImage: `url(${imageUrl})`,
                                }}
                            >
                                    <div className="absolute top-2 left-0 bg-black w-[100px] h-[30px] text-white text-xs pl-6 flex justify-start items-center  rounded-r-full">
                                            20 Apr
                                        </div>
                                <p className="text-left pl-6 pt-14 w-[75%] text-white font-bold text-xs">{content}</p>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        ))}
    </div>
</div>
  );
};

export default BlogComponent;
