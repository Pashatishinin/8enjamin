import { SanityDocument } from "next-sanity";
import TextEffect from "../../animation/TextEffect";
import DragablePhotos from "@/components/animation/DragablePhotos";
import { Works } from "../../../../lib/types";

type WorksItem = Works & { imageUrls: string[] };

interface WorksSectionProps {
  post: WorksItem;
  className: string;
}

const WorksContent = ({ post, className }: WorksSectionProps) => {
  //   console.log(`📦 Пост #`, post);
  //   console.log(`   🏷️ Название: ${post.title}`);
  //   console.log(`   🖼️ Image URL: ${post.imageUrls}`);
  //   console.log(`   🖼️ Image URL: ${post.description}`);
  //   console.log("—".repeat(40));
  return (
    <div
      className={`flex ${className}  w-full min-h-[700px] justify-between items-center p-[50px] gap-[2em] flex-wrap-reverse `}
    >
      <div className="relative py-[190px] px-[130px] flex justify-center items-center w-full h-full flex-1 basis-[360px] min-w-[300px] ">
        <DragablePhotos photoslist={post.imageUrls} />
      </div>
      <div className="flex-1 basis-[360px] min-w-[300px]">
        <TextEffect>
          <h2 className="uppercase">{post?.title}</h2>
        </TextEffect>
        <TextEffect delay={0.5}>
          <p>{post?.description || "no text"}</p>
        </TextEffect>
      </div>
    </div>
  );
};

export default WorksContent;
