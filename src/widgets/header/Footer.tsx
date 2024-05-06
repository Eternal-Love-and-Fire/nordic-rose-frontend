import { Marquee } from "@/components/ui/Marquee";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer>
      <Marquee />
      <div className="flex flex-col gap-8 items-center tracking-wide">
        <h1 className="mt-8 text-2xl tracking-widest uppercase">Nordic Rose</h1>
        <p className='max-w-[500px] text-center'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu velit
          tempus erat egestas efficitur. In hac habitasse platea dictumst. Fusce
          a nunc eget ligula suscipit finibus.
        </p>
        <div className="-mt-6 flex gap-6">
          <Link to={"/"} className="border-b p-1 pb-2">Telegram</Link>
          <Link to={"/"} className="border-b p-1 pb-2">Github</Link>
          <Link to={"/"} className="border-b p-1 pb-2">LinkedIn</Link>
        </div>
        <h3 className="max-w-80  text-center">© 2012–2020 Nordic Rose Co. All rights reserved. </h3>
      </div>
    </footer>
  );
};
