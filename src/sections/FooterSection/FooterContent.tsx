import ButtonCTA from "@/components/ui/ButtonCTA/ButtonCTA";
import LogoFooter from "@/components/ui/LogoFooter/LogoFooter";

const FooterContent = () => {
  return (
    <div
      className="footer_section
          p-[100px] overflow-hidden relative flex flex-col w-full bg-[#b2508c] h-full"
    >
      <div className="footer_right">
        {/* <Navigation /> */}
        <div className="social_box">
          {/* <Social /> */}
          <ButtonCTA />
        </div>
      </div>
      <LogoFooter />
      <p>Copyright © 2025 by Pavlo Tishynin || All Right Reserved</p>
    </div>
  );
};

export default FooterContent;
