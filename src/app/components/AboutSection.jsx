"use client";
import React, { useState, useTransition } from "react";
import Image from "next/image";
import TabButton from "./TabButtons";

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();
  const [showFullText, setShowFullText] = useState(false);

  const aboutText =
    "I am a full stack developer. Experienced in the field of " +
    "Backend and Frontend development as a freelancer and have worked as a contract " +
    "employee at PT Sinergi Informatika Semen Indonesia with work assignments to " +
    "assist with development in Frontend using Codeigniter and Backend using Oracle. " +
    "I have been a teacher for 3 years, specifically as a software educator. " +
    "Additionally, I worked as a Running Support User for fixing data using AWS Redshift, " +
    "troubleshooting Power BI, and monitoring jobs at a vendor company with the client company PT Sampoerna Tbk.";

  const TAB_DATA = [
    {
      title: "Skills",
      id: "skills",
      content: (
        <ul className="list-none pl-2">
          <li>Node.js</li>
          <li>PostgreSQL, SQL Server</li>
          <li>.NET</li>
          <li>React & Flutter</li>
          <li>Firebase</li>
        </ul>
      ),
    },
    {
      title: "Experience",
      id: "experience",
      content: (
        <ul className="list-none pl-2">
          <li>1.3 years as Software Developer at PT Altera Cipta Technology</li>
          <li>1.7 years as IT Support Data Engineer (vendor of PT Sampoerna Tbk)</li>
          <li>2.2 years as a Teacher in Informatics Engineering</li>
        </ul>
      ),
    },
    {
      title: "Education",
      id: "education",
      content: <p>Bachelor's Degree in Computer Science</p>,
    },
  ];

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section
      className="text-white flex flex-col items-center justify-center w-full min-h-screen "
      id="About"
    >
      <div className="container mx-auto flex flex-col md:grid md:grid-cols-2 gap-8 place-items-center py-12 px-6 xl:gap-16">
        {/* Image Section */}
        <div className="relative w-full max-w-md h-[400px] flex justify-center">
          <Image
            src="/image/images.jpeg"
            alt="mydesk"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>

        {/* About Text Section */}
        <div className="text-center md:text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-sm leading-relaxed">
            {showFullText ? aboutText : `${aboutText.slice(0, 209)}...`}
            <button
              onClick={() => setShowFullText(!showFullText)}
              className="text-blue-500 ml-2 underline"
            >
              {showFullText ? "Show Less" : "See Details"}
            </button>
          </p>

          {/* Tabs Section */}
          <div className="flex flex-row justify-center md:justify-start mt-6 space-x-4">
            {TAB_DATA.map((t) => (
              <TabButton key={t.id} selectTab={() => handleTabChange(t.id)} active={tab === t.id}>
                {t.title}
              </TabButton>
            ))}
          </div>

          {/* Tab Content */}
          <div className="mt-4 text-lg">
            {TAB_DATA.find((t) => t.id === tab)?.content || <p>No content available</p>}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
