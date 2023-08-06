import Header from "@components/Header";

const Home = () => {
  return (
    <html lang="en">
      <body className="bg-home-mobile sm:bg-home-tablet lg:bg-home-desktop bg-cover">
        <Header />
        <main>HOME</main>
      </body>
    </html>
  );
};

export default Home;
