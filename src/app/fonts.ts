// app/fonts.ts
import { DotGothic16, Outfit } from "next/font/google";

export const outfit = Outfit({
  weight: ["200", "300", "400", "500", "600"],
  subsets: ["latin"],
});

export const dotgothic16 = DotGothic16({
  weight: ["400"],
  subsets: ["latin"],
});
