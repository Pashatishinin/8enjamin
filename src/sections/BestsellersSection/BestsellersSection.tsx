import { SanityDocument } from "next-sanity";
import CardCarousel from "../../components/animation/CardCarousel/CardCarousel";
type BestsellerItem = SanityDocument & { imageUrl: string | null };

interface BestsellersSectionProps {
  post: BestsellerItem[];
}

const Bestsellers = ({ post }: BestsellersSectionProps) => {
  console.log("POST", post);

  post.forEach((item, index) => {
    console.log(`📦 Пост #${index + 1}:`, item);
    console.log(`   🏷️ Название: ${item.title}`);
    console.log(`   🖼️ Image URL: ${item.imageUrl}`);
    console.log("—".repeat(40));
  });

  return (
    <section
      id="bestseller"
      className="relative py-[120px] bg-[#fbf4f9] w-full h-[120vh] text-center"
    >
      <h2>BESTSELLERS</h2>
      <CardCarousel posts={post} />
    </section>
  );
};

export default Bestsellers;
