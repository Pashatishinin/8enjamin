import ButtonCTA from "@/components/ui/ButtonCTA/ButtonCTA";
import Contact from "@/components/ui/Contact/Contact";
import LogoFooter from "@/components/ui/LogoFooter/LogoFooter";
import Social from "@/components/ui/Social/Social";

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

interface FooterContentProps {
  social: SocialLinks[] | null;
  contact: ContactLinks[] | null;
  link?: string;
}

const FooterContent = ({ social, contact, link }: FooterContentProps) => {
  console.log("CONTACT", contact);
  return (
    <div
      className="footer_section
          px-[clamp(20px,5vw,100px)] py-5 overflow-hidden relative flex flex-col w-full bg-[#b2508c] h-full justify-end"
    >
      <div className="footer_right">
        {/* <Navigation /> */}
        <div className="mb-5 sm:mb-0 flex gap-5 sm:gap-20 flex-wrap">
          {contact &&
            contact.length > 0 &&
            Object.values(contact[0]).some((link) => link) && (
              <Contact contact={contact[0]} />
            )}
          <div>
            {social &&
              social.length > 0 &&
              Object.values(social[0]).some((link) => link) && (
                <Social social={social[0]} />
              )}
            <ButtonCTA link={link} />
          </div>
        </div>
      </div>
      <LogoFooter />
      <small className="text-[#a4a1d8] tracking-widest text-[12px]">
        Copyright © 2025 by Pavlo Tishynin || All Right Reserved
      </small>
    </div>
  );
};

export default FooterContent;
