import "@styles/globals.css";
import { ILayoutProps } from "@index";

export interface IHomeLayoutProps extends ILayoutProps {}

const HomeLayout = ({ children }: IHomeLayoutProps) => {
  return <html lang="en">{children}</html>;
};

export default HomeLayout;
