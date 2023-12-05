"use client";
import Image from "next/image";
import React, { useState, useTransition } from "react";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="pl-2 list-disc">
        <li>Node.js</li>
        <li>Express</li>
        <li>PostgreSQL</li>
        <li>Sequelize</li>
        <li>Javascript</li>
        <li>React</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "educations",
    content: (
      <ul className="pl-2 list-disc">
        <li>Fullstack Academy of Code</li>
        <li>University of California, Santa Cruz</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="pl-2 list-disc">
        <li>AWS Cloud Practitioner</li>
        <li>Google professional Cloud Developer</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white">
      <div className="items-center gap-8 px-4 py-8 md:grid md:grid-cols-2 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src={"/images/about-image.png"}
          alt="about-section-image"
          width={500}
          height={500}
        />
        <div className="flex flex-col h-full mt-4 text-left md:mt-0">
          <h2 className="mb-4 text-4xl font-bold text-white">About Me</h2>
          <p className="text-base lg:text-lg">
            You're a passionate individual who finds joy in exploring various
            hobbies and activities. Your curiosity knows no bounds, leading you
            to immerse yourself in diverse interests. Whether it's delving into
            the intricacies of technology, indulging in creative endeavors like
            painting or writing, or spending time outdoors hiking and exploring
            nature, you embrace each experience with enthusiasm and an open
            mind. Your friendly and compassionate nature shines through in your
            interactions, as you enjoy connecting with others and sharing your
            excitement for the things you love. Your adaptability and
            willingness to embrace new challenges make you a versatile and
            engaging person to be around
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("educations")}
              active={tab === "educations"}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              Certifications
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
