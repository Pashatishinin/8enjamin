import {
  SiDribbble,
  SiFacebook,
  SiInstagram,
  SiLinkedin,
} from "react-icons/si";

import { ImBehance2 } from "react-icons/im";

interface SocialProps {
  social: {
    dribble?: string;
    behance?: string;
    instagram?: string;
    facebook?: string;
    linkedin?: string;
  };
}

const Social = ({ social }: SocialProps) => {
  // console.log("SOCIAL", social);
  // console.log("SOCIAL-1", social.linkedin);
  return (
    <div className="relative text-left gap-3 flex flex-col items-start mb-10">
      <h3 className="text-[#a4a1d8] ">FOLLOW ME</h3>
      <ul className="flex gap-[20px] relative ">
        {social.dribble && (
          <li>
            <a href={social.dribble} target="_blank">
              <SiDribbble className="text-[clamp(25px,4vw,30px)] text-[#fbf4f9] hover:text-[#a4a1d8] transition-all duration-200 hover:scale-105" />
            </a>
          </li>
        )}
        {social.behance && (
          <li>
            <a href={social.behance} target="_blank">
              <ImBehance2 className="text-[clamp(25px,4vw,30px)] text-[#fbf4f9] hover:text-[#a4a1d8] transition-all duration-200 hover:scale-105" />
            </a>
          </li>
        )}
        {social.linkedin && (
          <li>
            <a href={social.linkedin} target="_blank">
              <SiLinkedin className="text-[clamp(25px,4vw,30px)] text-[#fbf4f9] hover:text-[#a4a1d8] transition-all duration-200 hover:scale-105" />
            </a>
          </li>
        )}
        {social.facebook && (
          <li>
            <a href={social.facebook} target="_blank">
              <SiFacebook className="text-[clamp(25px,4vw,30px)] text-[#fbf4f9] hover:text-[#a4a1d8] transition-all duration-200 hover:scale-105" />
            </a>
          </li>
        )}
        {social.instagram && (
          <li>
            <a href={social.instagram} target="_blank">
              <SiInstagram className="text-[clamp(25px,4vw,30px)] text-[#fbf4f9] hover:text-[#a4a1d8] transition-all duration-200 hover:scale-105" />
            </a>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Social;
