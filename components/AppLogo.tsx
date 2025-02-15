import Image from "next/image";

const AppLogo = () => {
  return (
    <Image
      src="/logo.png"
      width={212}
      height={212}
      className="w-10 h-auto"
      alt="AM"
    />
    // <div className="bg-black p-1 rounded-lg">
    //   <span className="self-center text-3xl font-extrabold whitespace-nowrap text-white tracking-tighter">
    //     AM
    //   </span>
    // </div>
  );
};

export default AppLogo;
