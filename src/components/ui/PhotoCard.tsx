import { dotgothic16 } from "../../app/fonts";

type Props = {
  date?: string;
  img: string;
  alt?: string;
};

const PhotoCard = ({ date, img, alt = "photo" }: Props) => {
  return (
    <div className="photo_card inline-block absolute top-o left-0 border-[5px] border-solid border-white bg-white rounded-sm shadow-lg transform -translate-x-1/2 -translate-y-1/2 select-none cursor-pointer">
      <img
        src={img}
        alt={alt}
        className="block w-[90vw] max-w-[350px] aspect-square object-cover object-center pointer-events-none"
      />
      <div className="flex items-center justify-start w-[90vw] max-w-[300px] h-full text-left uppercase text-[#242424]">
        <span className={dotgothic16.className}>{date}</span>
      </div>
    </div>
  );
};

export default PhotoCard;
