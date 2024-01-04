import Image from "next/image";
import Link from "next/link";
import React from "react";

const ContactSection = () => {
  return (
    <section className="relative" id="contact">
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-full -left-4 transform -translate-x-1/2 -translate-y-1/2"></div>
      <h2 className="text-center text-4xl font-bold text-white mt-4">
        Contact
      </h2>
      <div className="z-10 flex flex-row items-center justify-center gap-7 pt-7">
        <Link href="/" className="border-2 rounded-full p-1 border-purple-500">
          <Image src="" width={50} height={50} />
        </Link>
        <Link href="/" className="border-2 rounded-full p-1 border-purple-500">
          <Image src="" width={50} height={50} />
        </Link>
        <Link href="/" className="border-2 rounded-full p-1 border-purple-500">
          <Image src="" width={50} height={50} />
        </Link>
      </div>
    </section>
  );
};

export default ContactSection;
