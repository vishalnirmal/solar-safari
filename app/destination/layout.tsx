import Header from "@components/Header";
import { ILayoutProps } from "@index";

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
