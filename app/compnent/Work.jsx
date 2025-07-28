import React from "react";
import log1 from "../../public/_Group_.png";
import log2 from "../../public/_Group_ (1).png";
import log3 from "../../public/_Group_ (2).png";
import log4 from "../../public/Rectangle.png";
import Image from "next/image";

export default function Work() {
  const data = [
    {
      id: 1,
      img: log1,
      name: "Frontend Engineer Intern",
      des: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    },
    {
      id: 2,
      img: log2,
      name: "Frontend Engineer Intern",
      des: "All website designs are responsive and compatible with a wide range of screen sizes.",
    },
    {
      id: 3,
      img: log3,
      name: "Frontend Engineer Intern",
      des: "Proficiency in basic programming languages (HTML, CSS, JavaScript), a strong understanding of popular frameworks and libraries (such as React).",
    },
    {
      id: 4,
      img: log4,
      name: "Frontend Engineer Intern",
      des: "the ability to optimize performance and accessibility, Attention to detail and problem-solving ability.",
    },
  ];

  return (
    <div className="my-[70px] mx-[200px] max-2xl:mx-[50px] max-md:mx-[20px] ">
      <p className="text-[48px] text-center tracking-[-2px] font-bold max-md:text-[36px]">
        My <span className="text-[#CBACF9]">work experince</span>
      </p>

      <div className=" flex gap-[30px] flex-wrap items-center mt-[40px] justify-center">
        {data.map((item) => {
          return (
            <div
              key={item.id}
              className="bg-linear-to-r from-[#3637496E] to-[#3637497D] p-[1px] rounded-2xl w-[600px] h-[190px] max-md:h-[230px] relative"
            >
              <div className=" flex gap-[20px] max-md:flex-col bg-gradient-to-br from-[#04071D] to-[#0C0E23] p-[30px] max-md:p-[20px] rounded-2xl h-full hover:opacity-90  transition-opacity">
                <Image
                  src={item.img}
                  alt="Picture of the author"
                  className="max-md:w-[66px] max-md:h-[60px]"
                />
                <div>
                  <p className="text-[26px] font-bold max-md:text-[20px]">
                    {item.name}
                  </p>
                  <p className="text-[#BEC1DD] text-[16px] font-[500] pt-[20px] max-md:pt-[10px] max-md:text-[14px]">
                    {item.des}
                  </p>
                </div>
              </div>
              <div className="bg-[#161935] rounded-t-4xl w-full h-[8.08px] top-[-4px] left-0 absolute"></div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
