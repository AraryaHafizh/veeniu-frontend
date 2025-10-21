import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel";
import { CategoryCard } from "@/components/ui/category-card";

const categories = [
  "Agama & Spiritualitas",
  "Aktivitas Sekolah & Kampus",
  "Bisnis & Keuangan",
  "Fashion & Kecantikan",
  "Hobi & Gaya Hidup",
  "Keluarga & Anak",
  "Kesehatan & Kebugaran",
  "Komedi & Pertunjukan",
  "Lingkungan & Keberlanjutan",
  "Makanan & Minuman",
  "Media & Hiburan",
  "Musik",
  "Olahraga & Kebugaran",
  "Otomotif",
  "Pendidikan",
  "Pengembangan Diri",
  "Perjalanan & Alam",
  "Terbuka",
  "Sains & Teknologi",
  "Seni & Budaya",
  "Sosial & Politik",
  "Lainnya",
];

export const CategoryList = () => (
  <section className="mt-32 space-y-4">
    <p className="text-primary px-[52px] text-3xl font-bold">
      Event by category
    </p>
    <Carousel opts={{ dragFree: true }}>
      <CarouselContent className="mr-[52px] pl-[52px]">
        {categories.map((category, i) => (
          <CarouselItem key={i} className="basis-[10%]">
            <CategoryCard categoryId={i} title={category} />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  </section>
);
