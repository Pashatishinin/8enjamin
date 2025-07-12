import ButtonCTA from "@/components/ui/ButtonCTA/ButtonCTA";
import LogoFooter from "@/components/ui/LogoFooter/LogoFooter";
import FooterContent from "./FooterContent";

interface SocialLinks {
  dribble?: string;
  behance?: string;
  instagram?: string;
  facebook?: string;
  linkedin?: string;
}

interface ContactLinks {
  phone?: string;
  email?: string;
  whatsapp?: string;
}

interface FooterSectionProps {
  social: SocialLinks[] | null;
  contact: ContactLinks[] | null;
  link?: string;
}

const FooterSection = ({ social, contact, link }: FooterSectionProps) => {
  return (
    <footer
      className="relative h-[800px]"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="relative h-[calc(100vh+800px)] -top-[100vh]">
        <div className="sticky top-[calc(100vh-800px)] h-[800px]">
          <FooterContent social={social} contact={contact} link={link} />
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
