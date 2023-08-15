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

interface ICrew {
  name: string;
  images: {
    png: string;
    webp: string;
  };
  role: string;
  bio: string;
}

interface ITechnology {
  name: string;
  images: {
    portrait: string;
    landscape: string;
  };
  description: string;
}
