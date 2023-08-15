"use client";
import { ITechnology } from "@index";
import React, { useState } from "react";
import Image from "next/image";
import data from "@utils/data.json";
import classNames from "classnames";

const Technology = () => {
  const [selectedTechnology, setSelectedTechnology] = useState<ITechnology>(
    data.technology[0]
  );

  return (
    <div className="mt-6 mb-6 sm:mb-10 lg:ml-44 lg:mb-12 h-full">
      <p className="heading_5 text-center sm:text-left sm:ml-10 my-6 sm:mt-10 sm:mb-14 lg:ml-0 lg:mt-14">
        <span className="opacity-50">03</span> SPACE LAUNCH 101
      </p>
      <div className="flex flex-col items-center justify-center gap-8 sm:gap-14 lg:flex-row-reverse w-full h-full">
        <div className="flex-1 relative w-[100vw] h-full min-h-[170px] sm:min-h-[310px] lg:min-h-[527px]">
          <Image
            src={selectedTechnology.images.landscape}
            alt="tech"
            fill
            objectFit="cover"
            className="lg:hidden"
            loading={undefined}
          />
          <Image
            src={selectedTechnology.images.portrait}
            alt="tech"
            fill
            objectFit="cover"
            className="max-sm:hidden"
            loading={undefined}
          />
        </div>
        <div className="flex flex-1 flex-col gap-6 sm:gap-11 lg:flex-row">
          <div className="flex justify-center items-center gap-4 lg:flex-col lg:gap-7">
            {data.technology.map((technology, index) => (
              <div
                className={classNames(
                  "flex items-center justify-center p-5 lg:p-8 rounded-full hover:bg-space-white border-space-white border-solid border-[1px] cursor-pointer relative lg:w-4 lg:h-4 hover:text-space-black",
                  {
                    "bg-space-white text-space-black":
                      technology.name === selectedTechnology.name,
                  }
                )}
                key={index}
                onClick={() => {
                  setSelectedTechnology(technology);
                }}
              >
                <span className="lg:heading_4 absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
                  {index + 1}
                </span>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-4 items-center justify-center lg:items-start">
            <div className="flex flex-col gap-2 items-center justify-center sm:gap-4 lg:items-start">
              <p className="sub_heading_2 text-space-blue">
                THE TERMINOLOGY...
              </p>
              <h3 className="heading_3">{selectedTechnology.name}</h3>
            </div>
            <p className="text-space-blue w-[87.5%] sm:w-[58%] text-center lg:w-[100%] lg:text-left">
              {selectedTechnology.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technology;
