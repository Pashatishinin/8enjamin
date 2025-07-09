import ButtonCTA from "@/components/ui/ButtonCTA/ButtonCTA";
import LogoFooter from "@/components/ui/LogoFooter/LogoFooter";
import FooterContent from "./FooterContent";

const FooterSection = () => {
  return (
    <footer
      className="relative h-[800px]"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="relative h-[calc(100vh+800px)] -top-[100vh]">
        <div className="sticky top-[calc(100vh-800px)] h-[800px]">
          <FooterContent />
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
