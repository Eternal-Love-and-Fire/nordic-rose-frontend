import { Footer } from "@/widgets/header/Footer";
import { Header } from "@/widgets/header/Header";
import { Outlet } from "react-router-dom";

export const Root = () => {
  return (
    <div>
      <Header />
      <div className="md:mx-12 flex flex-col items-center justify-center">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};
