import "./style.css";
import TriggerLogo from "@/assets/icon/logo.svg";

const Loader = () => {
  return (
    <div className="flex flex-col">
      <div className="loader" />;
      <TriggerLogo className="animate-smooth-appear" />
    </div>
  );
};

export default Loader;
