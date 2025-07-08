import WorksContent from "@/components/ui/WorksContent/WorksContent";
import { SanityDocument } from "next-sanity";

type WorksItem = SanityDocument & { imageUrls: [] };

interface WorksSectionProps {
  post: WorksItem[];
}
export default function WorksSection({ post }: WorksSectionProps) {
  // post.forEach((item, index) => {
  //   console.log(`📦 Пост #${index + 1}:`, item);
  //   console.log(`   🏷️ Название: ${item.title}`);
  //   console.log(`   🖼️ Image URL: ${item.imageUrls}`);
  //   console.log("—".repeat(40));
  // });
  return (
    <section
      className="bg-black w-screen relative p-10"
      style={{
        height: `calc(${post.length * 400}vh + 50vh)`,
      }}
    >
      {post.map((work, idx) => {
        const isOdd = idx % 2 === 1;

        const innerStyle = {
          transform: `rotate(${isOdd ? 1 : -1}deg)`,
        };

        const wrapperClass = `
        sticky
        top-0
        z-10
      `;

        const contentClass = `
        flex 
        ${isOdd ? "flex-row-reverse bg-[#e7bad9]" : "flex-row bg-[#a4a1d8]"}
        rounded-xl 
        w-full
        min-h-[700px]
        justify-between
        items-center
        p-[50px] 
        gap-[2em] 
        transition-transform
      `;

        return (
          <div key={idx} className={wrapperClass}>
            <div className={contentClass} style={innerStyle}>
              <WorksContent post={work} />
            </div>
          </div>
        );
      })}
    </section>
  );
}
