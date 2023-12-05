import React from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedInIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  return (
    <section className="grid gap-4 py-24 my-12 md:grid-cols-2 md:my-12">
      <div>
        <h5 className="my-2 text-xl font-bold text-white">Let's Connect</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          Reprehenderit Lorem laborum cupidatat adipisicing eiusmod voluptate.
          Reprehenderit Lorem laborum cupidatat adipisicing eiusmod voluptate.
          Reprehenderit Lorem
        </p>
        <div className="flex flex-row gap-2 socials">
          <Link href={"github.com"}>
            <Image src={GithubIcon} alt="github-icon" />
          </Link>
          <Link href={"github.com"}>
            <Image src={LinkedInIcon} alt="linked-in-icon" />
          </Link>
        </div>
      </div>
      <div>
        <form className="flex flex-col gap-4">
          <label htmlFor="email" type="email" className="text-white">
            Your Email
          </label>
          <input
            type="email"
            id="email"
            required
            placeholder="sample@gmail.com"
          />
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
