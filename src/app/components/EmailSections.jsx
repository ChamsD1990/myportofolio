import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  return (
    <section className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4" id="Contact">
      <div>
        <h5 className="text-xl font-bold text-white my-2">Let's Connect</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          I'm currently looking for opportunities, my inbox is always open.
          Whether you have a question or just want to say hi, I'll try my best
          to get back to you!
        </p>
        <div className="socials flex flex-row gap-3">
          {/* GitHub */}
          <Link href="https://wa.me/628979452329" target="_blank">
            <div className="w-10 h-10 rounded-full overflow-hidden">
              <Image
                src="/image/whatsapp.png"
                alt="GitHub Icon"
                width={40}
                height={40}
                className="object-cover w-full h-full"
              />
            </div>
          </Link>
          <Link href="https://github.com/nurChamdanis" target="_blank">
            <div className="w-10 h-10 rounded-full overflow-hidden">
              <Image
                src="/image/github.png"
                alt="GitHub Icon"
                width={40}
                height={40}
                className="object-cover w-full h-full"
              />
            </div>
          </Link>
          {/* LinkedIn */}
          <Link href="https://linkedin.com" target="_blank">
            <div className="w-10 h-10 rounded-full overflow-hidden">
              <Image
                src="/image/linkedin.png"
                alt="LinkedIn Icon"
                width={40}
                height={40}
                className="object-cover w-full h-full"
              />
            </div>
          </Link>
        </div>
      </div>
      <div>
        <form action="" className="flex flex-col space-y-4">
          <label className="text-white">
            Email
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-2 mt-1 border border-gray-300 rounded-md bg-gray-800 text-white"
              required
            />
          </label>
          <label className="text-white">
            Message
            <textarea
              placeholder="Enter your message"
              className="w-full p-2 mt-1 h-32 border border-gray-300 rounded-md bg-gray-800 text-white resize-none"
              required
            />
          </label>
          <button
            type="submit"
            className="px-4 py-2 mt-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition focus:ring focus:ring-blue-300"
          >
            Send

          </button>
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
