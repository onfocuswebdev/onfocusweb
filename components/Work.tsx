import React from "react";
import { projects } from "../constant/index";
import Image from "next/image";
import Link from "next/link";

const imgstyle = {
  marginInline: "auto",
};

const ProjectCard = ({
  name,
  description,
  tags,
  image,
  source_code_link,
}: any) => {
  return (
    <div className="w-1/2 shadow-lg">
      <div className="mx-auto">
        <div className="flex justify-center m-3">
          <Link href={source_code_link} target="_blank">
            <Image
              src={image}
              width={300}
              height={400}
              style={imgstyle}
              alt={description}
            />
            <div className="mt-5 mx-auto">
              <h3 className="text-black bg-yellow-300 text-center font-bold text-[24px]">
                {name}
              </h3>
              <p className="text-[14px] text-center">{description}</p>
            </div>
          </Link>
        </div>

        <div className="mt-4 place-content-center flex gap-2">
          {tags?.map((tag: any) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

const Work = () => {
  return (
    <div className="w-full pb-5" id="work">
      <div className="flex justify-center my-5">
        <h1 className="font-raleway leading-[0.8] font-black text-5xl my-5">
          Our work
        </h1>
      </div>
      <div className="flex font-raleway">
        {projects.map((project: any, index: any) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Work;
