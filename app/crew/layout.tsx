import Header from "@components/Header";
import { ILayoutProps } from "@index";

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
