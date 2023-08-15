import Header from "@components/Header";
import { ILayoutProps } from "@index";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Space Tourism | Technology",
  description: `Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!`,
  icons: ["/assets/shared/logo.svg"],
};

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
