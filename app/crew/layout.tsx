import Header from "@components/Header";
import { ILayoutProps } from "@index";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Space Tourism | Crew",
  description: `Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!`,
  icons: ["/assets/shared/logo.svg"],
};

export interface ICrewLayoutProps extends ILayoutProps {}

const CrewLayout = ({ children }: ICrewLayoutProps) => {
  return (
    <body className="bg-crew-mobile sm:bg-crew-tablet lg:bg-crew-desktop bg-cover">
      <Header name="Crew" />
      <section>{children}</section>
    </body>
  );
};

export default CrewLayout;
