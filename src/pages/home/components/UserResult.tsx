import IUserGithub from "src/interfaces/User";
import {
  FaUser,
  FaGithub,
  FaLaptopCode,
  FaLocationArrow,
} from "react-icons/fa";
import { Link } from "react-router-dom";
interface Props {
  data: IUserGithub | undefined;
}
//User result with specified structure
//params data interface IUserGithub
const UserResult = ({ data }: Props) => {
  return (
    <div className="flex h-full flex-col">
      <section className="result-users__content flex h-full flex-col items-center  md:flex-row">
        <div className="mr-6" style={{ flex: 1 }}>
          {data?.avatar_url ? (
            <img
              src={data?.avatar_url}
              alt="Profile image github"
              className="w-24 rounded-full md:w-80"
            />
          ) : (
            <div className="flex h-52 w-52 items-center justify-center rounded-full bg-slate-300">
              <FaUser className="text-5xl" />
            </div>
          )}
        </div>
        <section className="mx-5" style={{ flex: 2 }}>
          <h2 className="mt-2 text-lg font-medium md:text-2xl">
            @{data?.login}
          </h2>
          <h3 className="md:text-md mt-2 text-sm">
            {data?.name ? data.name : "No name specified"}.
          </h3>
          <p className="md:text-md mt-2 text-sm">
            {data?.bio
              ? data.bio
              : "The bio it's not specified. Quick tip!! one of the best ways for people to get to know you is to have a bio and explain a bit about yourself and what you like. Github Searcher."}
          </p>
          <div className="mt-2 flex flex-col">
            <span className="mt-3 flex items-center text-sm">
              <FaUser className="mr-2" />
              {data?.followers} followers
            </span>
            <span className="mt-3 flex items-center text-sm">
              {" "}
              <FaGithub className="mr-2" /> {data?.public_repos} public repos
            </span>
          </div>
          <p className="mt-2 flex items-center justify-end ">
            <FaLocationArrow className="mr-2" />
            {data?.location ? data.location : "No location"}
          </p>
        </section>
      </section>
      <div className="result-users__links mx-2 flex justify-between pt-2 pb-1 md:mx-0 md:mt-5 md:pt-0 md:pb-0">
        <a href={data?.html_url} target="_blank">
          <button className="main-button flex items-center">
            <FaUser className="mr-3" /> <span>View profile</span>
          </button>
        </a>
        <Link to={"/repos"} state={data?.login}>
          <button className="main-button flex items-center">
            <FaLaptopCode className="mr-3" /> <span>View repos</span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default UserResult;
