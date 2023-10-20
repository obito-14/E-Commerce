import Header from "./Header/Header";

const Home = () => {
  const data = {
    name: "Vs Store",
  };
  return (
    <div>
      <Header myData={data} />
    </div>
  );
};

export default Home;
