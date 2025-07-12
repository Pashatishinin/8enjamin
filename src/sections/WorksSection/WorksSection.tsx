import WorksContent from "@/components/ui/WorksContent/WorksContent";
import { SanityDocument } from "next-sanity";
import { Works } from "../../../lib/types";

type WorksItem = Works & { imageUrls: string[] };

interface WorksSectionProps {
  post: WorksItem[];
}
export default function WorksSection({ post = [] }: WorksSectionProps) {
  // post.forEach((item, index) => {
  //   console.log(`📦 Пост #${index + 1}:`, item);
  //   console.log(`   🏷️ Название: ${item.title}`);
  //   console.log(`   🖼️ Image URL: ${item.imageUrls}`);
  //   console.log("—".repeat(40));
  // });
  return (
    <section
      className="bg-[#fbf4f9] w-screen relative p-10 "
      style={{
        height: `calc(${post.length * 100}vh + 50vh)`,
      }}
    >
      {post.map((work, idx) => {
        const isOdd = idx % 2 === 1;

        const innerStyle = {
          transform: `rotate(${isOdd ? idx * 1 : idx * -1}deg)`,
        };

        const wrapperClass = `
        sticky
        top-[10vh]
        z-10
      `;

        const contentClass = `
        mb-[10vh]
        rounded-2xl 
        shadow-md
        border-[0.3px]
        border-solid
        ${isOdd ? "bg-[#a4a1d8] border-[#9189cb]" : "bg-[#e7bad9] border-[#d78fc0] "}
        
      `;

        const itemContentClass = `
        ${isOdd ? "flex-row-reverse" : "flex-row"}
      `;

        return (
          <div key={idx} className={wrapperClass}>
            <div className={contentClass} style={innerStyle}>
              <WorksContent post={work} className={itemContentClass} />
            </div>
          </div>
        );
      })}
    </section>
  );
}
