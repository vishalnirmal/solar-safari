import Header from "@components/Header";
import { ILayoutProps } from "@index";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Space Tourism | Destination",
  description: `Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!`,
  icons: ["/assets/shared/logo.svg"],
};

export interface IDestinationLayoutProps extends ILayoutProps {}

const DestinationLayout = ({ children }: IDestinationLayoutProps) => {
  return (
    <body className="bg-destination-mobile sm:bg-destination-tablet lg:bg-destination-desktop bg-cover">
      <Header name="Destination" />
      <section>{children}</section>
    </body>
  );
};

export default DestinationLayout;
