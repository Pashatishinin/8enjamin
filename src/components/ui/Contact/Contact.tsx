import { MdEmail, MdPhone, MdWhatsapp } from "react-icons/md";

interface ContactProps {
  contact: {
    phone?: string;
    email?: string;
    whatsapp?: string;
  };
}

const Contact = ({ contact }: ContactProps) => {
  console.log("CONTACT", contact);
  console.log("CONTACT-1", contact.phone);
  return (
    <div className="relative text-left gap-3 flex flex-col items-start mb-10">
      <h3 className="text-[#a4a1d8] ">CONTACT ME</h3>
      <ul className="flex gap-[20px] relative flex-col">
        {contact.phone && (
          <li className="flex items-center gap-3">
            <MdPhone className="text-[clamp(15px,4vw,20px)] text-[#fbf4f9] " />
            <a
              href={`tel:${contact.phone}`}
              className="tracking-widest"
              target="_blank"
            >
              {contact.phone}
            </a>
          </li>
        )}
        {contact.email && (
          <li className="flex items-center  gap-3">
            <MdEmail className="text-[clamp(15px,4vw,20px)] text-[#fbf4f9] " />
            <a
              href={`mailto:${contact.email}`}
              target="_blank"
              className="tracking-widest"
            >
              {contact.email}
            </a>
          </li>
        )}
        {contact.whatsapp && (
          <li className="flex items-center  gap-3">
            <MdWhatsapp className="text-[clamp(15px,4vw,20px)] text-[#fbf4f9] " />
            <a
              href={`https://wa.me/${contact.whatsapp}`}
              className="tracking-widest"
              target="_blank"
            >
              {contact.whatsapp}
            </a>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Contact;
