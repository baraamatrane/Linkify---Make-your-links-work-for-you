import Hero from "@/../public/artistic-blurry-colorful-wallpaper-background (2).jpg";
import Links from "@/../public/Linkify_phone_mockup_display_25e4b179-Photoroom.png";
import Image from "next/image";
function Header() {
  return (
    <div
      className="w-full bg-center bg-cover h-full p-20 pt-44"
      style={{ backgroundImage: `url('${Hero.src}')` }}
    >
      <div className="w-full h-full flex md:flex-row flex-col justify-between items-center">
        <div className="flex flex-col space-y-10">
          <h1 className="text-white text-4xl lg:text-6xl font-bold mb-6 text-center">
            One Link. Endless Paths.
          </h1>
          <p className="text-white text-lg lg:text-2xl text-center max-w-2xl">
            Create a beautiful link hub that holds your socials, store, bookings
            and more — all under one easy-to-share URL.{" "}
          </p>
          <div className="flex space-x-4">
            <button className="font-semibold cursor-pointer py-2 px-6 text-white bg-blue-500 hover:bg-blue-400 transition-colors rounded-full">
              Get Started
            </button>
            <button className="bg-transparent text-blue-500 font-semibold cursor-pointer py-2 px-4 border border-blue-500 hover:bg-gray-200 transition-colors rounded-full">
              How It Works
            </button>
          </div>
        </div>{" "}
        <Image
          src={Links}
          width={1000}
          height={1000}
          className="w-92 h-auto"
          alt="Links"
        />
      </div>
    </div>
  );
}

export default Header;
