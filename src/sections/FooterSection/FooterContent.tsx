import ButtonCTA from "@/components/ui/ButtonCTA/ButtonCTA";
import LogoFooter from "@/components/ui/LogoFooter/LogoFooter";
import Social from "@/components/ui/Social/Social";

const FooterContent = () => {
  return (
    <div
      className="footer_section
          p-[100px] overflow-hidden relative flex flex-col w-full bg-[#b2508c] h-full justify-end"
    >
      <div className="footer_right">
        {/* <Navigation /> */}
        <div className="social_box">
          <Social />
          <ButtonCTA />
        </div>
      </div>
      <LogoFooter />
      <small className="text-[#a4a1d8] tracking-widest">
        Copyright © 2025 by Pavlo Tishynin || All Right Reserved
      </small>
    </div>
  );
};

export default FooterContent;
