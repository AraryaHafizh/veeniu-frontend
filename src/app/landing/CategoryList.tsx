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
  <section className="mt-10 space-y-4 md:mt-32">
    <p className="text-primary px-5 text-xl font-bold md:px-[52px] md:text-3xl">
      Event by category
    </p>
    <Carousel opts={{ dragFree: true }}>
      <CarouselContent className="mr-5 pl-5 md:mr-[52px] md:pl-[52px]">
        {categories.map((category, i) => (
          <CarouselItem key={i} className="basis-[170px] md:basis-[190px]">
            <CategoryCard categoryId={i} title={category} />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  </section>
);
