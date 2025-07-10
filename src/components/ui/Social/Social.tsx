import {
  GrDribbble,
  GrInstagram,
  GrLinkedin,
  GrFacebookOption,
} from "react-icons/gr";

const Social = () => {
  return (
    <div className="relative text-left flex flex-col gap-5 items-start mb-10">
      <h3 className="text-[#a4a1d8]">FOLLOW ME</h3>
      <ul className="flex gap-[20px] relative">
        <li>
          <a href="#" className="">
            <GrDribbble className="text-[40px] text-[#fbf4f9] hover:text-[#a4a1d8] transition-all duration-200 hover:scale-105" />
          </a>
        </li>
        <li>
          <a href="#">
            <GrLinkedin className="text-[40px] text-[#fbf4f9] hover:text-[#a4a1d8] transition-all duration-200 hover:scale-105" />
          </a>
        </li>
        <li>
          <a href="#">
            <GrFacebookOption className="text-[40px] text-[#fbf4f9] hover:text-[#a4a1d8] transition-all duration-200 hover:scale-105" />
          </a>
        </li>
        <li>
          <a href="#">
            <GrInstagram className="text-[40px] text-[#fbf4f9] hover:text-[#a4a1d8] transition-all duration-200 hover:scale-105" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Social;
