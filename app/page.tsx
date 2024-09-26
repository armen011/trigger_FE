import FirstSection from "./_components/FirstSection";
import SecondSection from "./_components/SecondSection";
import ThirdSection from "./_components/ThirdSection";

const HomePage = () => {
  return (
    <main className="w-full flex flex-col">
      <FirstSection />
      <SecondSection />
      <ThirdSection />
    </main>
  );
};
export default HomePage;
