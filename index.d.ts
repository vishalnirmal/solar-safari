import { ReactNode } from "react";

interface ILayoutProps {
  children: ReactNode | ReactNode[];
}

interface IDynamicPageProps<
  P = { [k: string]: any },
  S = { [k: string]: any }
> {
  params?: P;
  searchParams?: S;
}

interface IDestination {
  name: string;
  images: {
    png: string;
    webp: string;
  };
  description: string;
  distance: string;
  travel: string;
}
