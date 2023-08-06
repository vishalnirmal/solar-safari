"use client";
import { usePathname, useSearchParams } from "next/navigation";
import { IDynamicPageProps } from "@index";
import React from "react";

export type DESTINATION_TYPES = "moon" | "mars" | "europa" | "titan";

export interface IDestinationProps
  extends IDynamicPageProps<{ type: DESTINATION_TYPES[] }> {}

const Destination = ({ params }: IDestinationProps) => {
  return <div>{JSON.stringify(params)}</div>;
};

export default Destination;
