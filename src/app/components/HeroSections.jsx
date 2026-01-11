"use client";
import Image from "next/image";
import React from "react";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
    const fullText = `I am a full-stack developer with experience in both backend and frontend development as a freelancer. 
    I have worked as a contract employee at PT Sinergi Informatika Semen Indonesia, contributing to frontend development 
    using CodeIgniter and backend development with Oracle. Additionally, I have three years of experience as a software educator. 
    I have also worked as a Running Support User, handling data fixes using AWS Redshift, troubleshooting Power BI issues, 
    and monitoring jobs at a vendor company for the client PT Sampoerna Tbk.`;

    const truncatedText = fullText.length > 200 ? fullText.substring(0, 200) + "..." : fullText;

    return (
        <section className="pl-32 pr-32 md:pt-12">
            <div className="grid grid-cols-1 md:grid-cols-12 md:gap-x-8 md:flex md:items-center w-full">
                <div className="col-span-7 text-center md:text-left w-full">
                    <h1 className="text-white mb-4 text-4xl lg:text-6xl font-extrabold">
                        <span
                            className="
                        text-transparent bg-clip-text bg-gradient-to-r 
                        from-purple-400 to-pink-600"
                        >
                            Hello, I'm{" "}
                        </span>
                        <br />
                        <TypeAnimation
                            sequence={[
                                "Dani !",
                                1000,
                                "Web Developer !",
                                1000,
                                "Mobile Developer !",
                                1000,
                                "Data Engineer !",
                                1000,
                            ]}
                            wrapper="span"
                            speed={50}
                            style={{ fontSize: "0.5em", display: "inline-block" }}
                            repeat={Infinity}
                        />
                    </h1>
                    <p className="text-[#ADB7BE] text-sm lg:text-sm">
                        {truncatedText}
                    </p>

                    {/* Buttons - Centered on Mobile, Left on Desktop */}
                    <div className="mt-6 flex flex-col sm:flex-row justify-center md:justify-start items-center md:items-start space-y-4 sm:space-y-0 sm:space-x-4">
                        <button className="px-6 py-3 w-[150px] h-[50px] rounded-full 
              bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 
              text-white hover:bg-slate-200 transition">
                            Hire Me
                        </button>
                        <button className="px-1 py-1 w-[200px] h-[50px] rounded-full bg-transparent 
              hover:bg-slate-800 text-white border border-white transition">
                            <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                                Download CV
                            </span>
                        </button>
                    </div>
                </div>

                {/* Right Side - Image */}
                <div className="col-span-5 place-self-center mt-4 ">
                    <div className="rounded-full bg-[#181818] w-[220px] h-[220px] lg:w-[220px] lg:h-[220px] relative flex justify-center items-center">
                        <Image
                            src="/image/circle_photo.png"
                            alt="Man"
                            width={200}
                            height={200}
                            priority
                            layout="intrinsic"
                            className="rounded-full"
                        />
                    </div>
                </div>

            </div>
        </section>
    );
};

export default HeroSection;
