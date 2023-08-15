"use client";
import { IDestination, IDynamicPageProps } from "@index";
import React, { useState } from "react";
import Image from "next/image";
import data from "@utils/data.json";
import classNames from "classnames";

const Destination = () => {
  const [selectedDestination, setSelectedDestination] = useState<IDestination>(
    data.destinations[0]
  );

  return (
    <div className="my-6">
      <p className="heading_5 text-center sm:text-left sm:ml-10 my-6 sm:mt-10 sm:mb-16">
        <span className="opacity-50">01</span> PICK YOUR DESTINATION
      </p>
      <div className="flex flex-col gap-8 items-center justify-start lg:flex-row lg:gap-44 lg:justify-center">
        <Image
          className="sm:hidden"
          src={selectedDestination.images.png}
          width={170}
          height={170}
          alt="moon"
          loading={undefined}
        />
        <Image
          className="max-sm:hidden lg:hidden"
          src={selectedDestination.images.png}
          width={300}
          height={300}
          alt="moon"
          loading={undefined}
        />
        <Image
          className="max-sm:hidden max-lg:hidden flex-1 max-w-[445px]"
          src={selectedDestination.images.png}
          width={445}
          height={445}
          alt="moon"
          objectFit="contain"
          loading={undefined}
        />
        <div className="w-[87%] m-auto sm:w-[74.47%] flex flex-col gap-8 justify-center items-center lg:items-start lg:w-fit lg:m-0">
          <div className="flex justify-between items-center gap-6">
            {data.destinations.map((destination, index) => (
              <p
                className={classNames(
                  "cursor-pointer relative nav_text hover:nav_hover",
                  {
                    nav_selected: selectedDestination.name === destination.name,
                  }
                )}
                key={index}
                onClick={() => {
                  setSelectedDestination(destination);
                }}
              >
                {destination.name}
              </p>
            ))}
          </div>
          <h3 className="heading_2">{selectedDestination.name}</h3>
          <p className="text-center lg:max-w-[400px] lg:text-left">
            {selectedDestination.description}
          </p>
          <hr className="bg-space-white opacity-10 w-full" />
          <div className="flex flex-col gap-8 justify-center items-center sm:flex-row lg:gap-20">
            <div className="flex flex-col gap-3 justify-center items-center">
              <p className="sub_heading_2 text-space-blue">AVG. DISTANCE</p>
              <p className="sub_heading_1">{selectedDestination.distance}</p>
            </div>
            <div className="flex flex-col gap-3 justify-center items-center">
              <p className="sub_heading_2 text-space-blue">Est. travel time</p>
              <p className="sub_heading_1">{selectedDestination.travel}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;
