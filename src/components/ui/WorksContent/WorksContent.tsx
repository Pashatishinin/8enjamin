import { SanityDocument } from "next-sanity";
import TextEffect from "../../animation/TextEffect";
import DragablePhotos from "@/components/animation/DragablePhotos";

type WorksItem = SanityDocument & { imageUrls: [] };

interface WorksSectionProps {
  post: WorksItem;
}

const WorksContent = ({ post }: WorksSectionProps) => {
  //   console.log(`📦 Пост #`, post);
  //   console.log(`   🏷️ Название: ${post.title}`);
  //   console.log(`   🖼️ Image URL: ${post.imageUrls}`);
  //   console.log(`   🖼️ Image URL: ${post.description}`);
  //   console.log("—".repeat(40));
  return (
    <div>
      <div className="wps_first__left">
        <DragablePhotos />
      </div>
      <div className="wps_first__right">
        <TextEffect>
          <h2>{post?.title}</h2>
        </TextEffect>
        <TextEffect delay={0.5}>
          <p>{post?.description || "no text"}</p>
        </TextEffect>
      </div>
    </div>
  );
};

export default WorksContent;
