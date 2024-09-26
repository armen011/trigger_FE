import Loader from "@/components/Loader";

const loading = () => {
  return (
    <main className="w-full h-full flex justify-center items-center fixed left-0 top-0 bg-background-primary z-[100]">
      <Loader />
    </main>
  );
};

export default loading;
