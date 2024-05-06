import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <div className="mt-40 flex flex-col gap-6 text-4xl text-center font-bold">
      <p className="text-red-500">
        Sorry, page not NotFound, I dont want to waste my time
      </p>

      <Link
        to={`/nordic-rose-frontend/`}
        className="border-b-2 dark:border-white hover:opacity-50 duration-300 w-fit mx-auto"
      >
        Back to home
      </Link>
    </div>
  );
};
