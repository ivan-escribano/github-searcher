import IRepositories from "src/interfaces/Repository";
import RepositoryLanguage from "./RepositoryLanguage";
import RepositoryTopics from "./RepositoryTopics";
import { v4 as uuidv4 } from "uuid";
import { FaStar, FaCode } from "react-icons/fa";
//props type IRepositories
interface Props {
  repos: IRepositories;
}
//Single repository and data
const Repository = ({ repos }: Props) => {
  return (
    <div className=" mx-14 mb-5 flex flex-col items-center rounded-md bg-white p-3 md:flex-row">
      <div style={{ flex: 0.8 }} className="mr-8">
        <img
          src={repos.owner.avatar_url}
          alt="User profile"
          className="w-20 rounded-full"
        />
      </div>
      <div style={{ flex: 3 }}>
        <h2 className="text-md mb-3 font-medium">@{repos.full_name}</h2>
        <h3 className=" mb-3 text-sm italic">{repos.description}</h3>
        <div className="mb-3 flex text-sm">
          {repos.topics.map((topic) => (
            <RepositoryTopics topic={topic} key={uuidv4()} />
          ))}
        </div>
        <div className="mb-3 flex">
          <div className=" mr-4 flex items-center text-sm">
            <RepositoryLanguage language={repos.language} />
          </div>
          <p className="flex items-center text-sm">
            <FaStar className="mr-2 text-yellow-500" /> {repos.stargazers_count}{" "}
            Stars
          </p>
        </div>
        <div className=" flex justify-end">
          <a href={repos.html_url} target="_blank">
            <button className="main-button flex items-center">
              <FaCode className="mr-2" />
              Show repo
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Repository;
