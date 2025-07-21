import Image from "next/image";
import Link from "next/link";
import { CodeBracketIcon } from "@heroicons/react/24/solid";

const ProjectCards = ({ image, title, description }) => { 
  const imageSrc = image || "/default-placeholder.png";

  return (
    <div className="group">
      <div className="h-52 md:h-72 rounded-t-xl relative">
        {image ? (
          <Image
            src={imageSrc}
            alt={title}
            fill
            className="rounded-t-xl object-cover"
          />
        ) : null}
        <div
          className="absolute top-0 left-0 w-full h-full bg-[#1818189a] 
          bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 
          transition-all duration-500 justify-center items-center"
        >
          <Link
            href="/"
            className="h-14 w-14 border-2 rounded-full border-[#ADB7BE] 
            flex justify-center items-center"
          >
            <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] cursor-pointer hover:text-white" />
          </Link>
        </div>
      </div>
      <div className="text-white rounded-b-xl bg-[#181818] py-6 px-4">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-[#ADB7BE]">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCards;
