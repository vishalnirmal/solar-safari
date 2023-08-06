import Header from "@components/Header";
import { ILayoutProps } from "@index";

export interface ITechnologyLayoutProps extends ILayoutProps {}

const TechnologyLayout = ({ children }: ITechnologyLayoutProps) => {
  return (
    <body className="bg-technology-mobile sm:bg-technology-tablet lg:bg-technology-desktop bg-cover">
      <Header name="Technology" />
      <section>{children}</section>
    </body>
  );
};

export default TechnologyLayout;
