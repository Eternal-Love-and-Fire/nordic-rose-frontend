// import heroImg from "@/assets/img-hero.png";
import herogif from "@/assets/hero.gif";
import { Separator } from "@/components/ui/separator";
import { contentData } from "@/contentdata";

export const Home = () => {
  return (
    <>
      <section className="my-8 flex flex-col items-center">
        <div>
          <img
            src={herogif}
            width={900}
            alt="hero image"
            className="p-1 rounded-2xl border-2"
          />
        </div>
        <div className="flex flex-col items-center">
          <h3 className="max-w-[700px] px-24 my-6 texl-2xl md:text-3xl font-bold tracking-wider text-center">
            A few words about this blog platform, Ghost, and how this site was
            made
          </h3>
          <p className="max-w-[500px] px-16 py-4 text-center font-light tracking-widest opacity-80">
            Why Ghost (& Figma) instead of Medium, WordPress or other options?
          </p>
          <Separator />
        </div>
      </section>
      <section className="max-w-[620px] flex flex-col items-center justify-center">
        <h2 className="mt-8 mb-6 text-4xl font-bold">All articles</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {contentData.map((card, index) => {
            return (
              <article
                key={index}
                className="max-h-[280px] max-w-80 mb-6 flex flex-col gap-4 items-center justify-center font-semibold tracking-wide"
              >
                <div className="border-x opacity-85 hover:opacity-100 duration-300  ">
                  <img src={card.img} alt="" />
                </div>
                <div className="">
                  <p>{card.text}</p>
                </div>
              </article>
            );
          })}
        </ul>
      </section>
    </>
  );
};
