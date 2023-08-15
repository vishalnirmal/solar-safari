"use client";
import Image from "next/image";
import React, { useState } from "react";
import data from "@utils/data.json";
import { ICrew } from "@index";
import classNames from "classnames";

const Destination = () => {
  const [selectedCrew, setSelectedCrew] = useState<ICrew>(data.crew[0]);

  return (
    <div className="mt-6 mb-6 sm:mb-0 lg:ml-44 lg:mr-32">
      <p className="heading_5 text-center sm:text-left sm:ml-10 my-6 sm:mt-10 sm:mb-14 lg:mb-40 lg:ml-0 lg:mt-14">
        <span className="opacity-50">02</span> Meet your crew
      </p>
      <div className="flex flex-col gap-8 items-center justify-start sm:flex-col-reverse sm:gap-10 lg:flex-row-reverse px-6 lg:px-0">
        <div className="w-full flex flex-col items-center flex-1">
          <div className="w-[177px] h-[222px] relative sm:w-[456px] sm:h-[560px] lg:w-[456px] lg:h-[712px] lg:absolute lg:bottom-0">
            <Image
              src={selectedCrew.images.png}
              alt="crew"
              fill
              objectFit="contain"
              objectPosition="bottom"
              loading={undefined}
            />
          </div>
          <hr className="w-full opacity-10 sm:hidden" />
        </div>
        <div className="flex flex-col gap-8 items-center justify-center sm:flex-col-reverse sm:gap-10 lg:items-start lg:gap-32 lg:flex-1">
          <div className="flex justify-between items-center gap-4">
            {data.crew.map((crew, index) => (
              <span
                className={classNames(
                  "w-2 h-2 rounded-full bg-space-white cursor-pointer relative lg:w-4 lg:h-4",
                  {
                    "opacity-50": crew.name !== selectedCrew.name,
                  }
                )}
                key={index}
                onClick={() => {
                  setSelectedCrew(crew);
                }}
              />
            ))}
          </div>
          <div className="flex flex-col gap-2 items-center justify-center m-auto lg:items-start">
            <p className="heading_4 opacity-50">{selectedCrew.role}</p>
            <h3 className="heading_3">{selectedCrew.name}</h3>
            <p className="text-space-blue text-center sm:w-[82%] m-auto lg:m-0 lg:text-left">
              {selectedCrew.bio}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;
