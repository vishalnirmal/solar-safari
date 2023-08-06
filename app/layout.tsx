import Header from "@components/Header";
import { ReactNode } from "react";
import "@styles/globals.css";

export interface IMainLayout {
  children: ReactNode | ReactNode[];
}

const MainLayout = ({ children }: IMainLayout) => {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
};

export default MainLayout;
