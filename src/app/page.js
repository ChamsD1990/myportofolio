"use client";
import React, { useEffect, useState, useTransition } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSections";
import AboutSection from "./components/AboutSection";
import ProjectSection from "./components/ProjectSection";
import EmailSection from "./components/EmailSections";

export default function Home() {
  useEffect(() => {
    document.title = "My Portfolio | Web Developer";
  }, []);

  return (
    <>
      <Navbar />
      <main className="flex min-h-svh flex-col bg-[#121212] pt-20 md:pt-28">
        <div className="container md:mx-auto px-12 p-8 space-y-32">
          <HeroSection />
          <AboutSection />
          <ProjectSection />
          <EmailSection />
        </div>
      </main>
    </>
  );
}
