import Header from "@components/Header";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Space Tourism",
  description: `Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!`,
  icons: ["/assets/shared/logo.svg"],
};

const Home = () => {
  return (
    <body className="bg-home-mobile sm:bg-home-tablet lg:bg-home-desktop bg-cover flex flex-col">
      <Header name="Home" />
      <main className="flex-1 p-6 w-[90%] m-auto flex flex-col justify-between items-center sm:pb-32 sm:w-[58.59%]  lg:pb-32 lg:w-[75%] lg:flex-row lg:justify-between lg:items-end">
        <section className="flex flex-col justify-center items-center gap-4 sm:gap-6 lg:items-start lg:w-[450px]">
          <p className="heading_5 uppercase text-space-blue">
            SO, YOU WANT TO TRAVEL TO
          </p>
          <h2 className="heading_1">SPACE</h2>
          <p className="text-center text-space-blue">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </section>
        <Link
          href="/destination"
          className="relative bg-space-white rounded-full w-36 h-36 sm:w-44 sm:h-44 lg:w-64 lg:h-64 flex justify-center items-center custom_shadow"
        >
          <p className="text-space-black heading_4 uppercase">Explore</p>
        </Link>
      </main>
    </body>
  );
};

export default Home;
