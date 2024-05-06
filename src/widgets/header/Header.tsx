import { Link } from "react-router-dom";
import { BurgerMenu } from "@/components/ui/Burger-Menu";
import { ModeToggle } from "@/components/mode-toggle";
import { Separator } from "@/components/ui/separator";

export const Header = () => {
  return (
    <>
      <header className="py-5 md:py-0 px-5 flex items-center justify-between">
        <h1 className="text-2xl tracking-widest uppercase"><Link to={`/`}>Nordic Rose</Link></h1>
        <div className="flex gap-4 items-center">
          <ModeToggle />
          <nav className="">
            <ul className="hidden md:flex gap-8">
              <Link
                to={`/nordic-rose-frontend/`}
                className="w-12 py-4 text-center border-b-2 border-transparent hover:border-black hover:dark:border-white hover:opacity-70 duration-300 "
              >
                Blog
              </Link>
              <Link
                to={`/about`}
                className="w-12 py-4 text-center border-b-2 border-transparent hover:border-black hover:dark:border-white hover:opacity-70 duration-300 "
              >
                About
              </Link>
              <Link
                to={`/links`}
                className="w-12 py-4 text-center border-b-2 border-transparent hover:border-black hover:dark:border-white hover:opacity-70 duration-300 "
              >
                Links
              </Link>
            </ul>
            <div className="block md:hidden">
              <BurgerMenu />
            </div>
          </nav>
        </div>
      </header>
      <Separator />
    </>
  );
};
