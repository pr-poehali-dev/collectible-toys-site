import Header from "@/components/Header";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Filter } from "lucide-react";

const Catalog = () => {
  const allProducts = [
    {
      id: 1,
      color: "#ef4444",
      colorName: "Красная-Упоротые Гномы",
      isRare: false,
      image:
        "https://cdn.poehali.dev/files/fa1301e2-702e-4c50-aeef-bd94daf59f54.png",
    },
    {
      id: 2,
      color: "#3b82f6",
      colorName: "Синяя-Смешарики",
      isRare: true,
      image:
        "https://cdn.poehali.dev/files/47fd93a3-d045-4859-9ab8-9a1ef5f67a81.png",
    },
    {
      id: 3,
      color: "#10b981",
      colorName: "Зеленая-Микробики",
      isRare: false,
      image:
        "https://cdn.poehali.dev/files/9a3a121f-f035-48c7-b5fd-22c342317ed3.png",
    },
    {
      id: 4,
      color: "#f59e0b",
      colorName: "Розовая-Пони",
      isRare: false,
      image:
        "https://cdn.poehali.dev/files/d30e9f3d-f582-4621-90a9-6c1ef26b8154.png",
    },
    {
      id: 5,
      color: "#8b5cf6",
      colorName: "Синяя-Чувачок Продакшн",
      isRare: true,
    },
    { id: 6, color: "#ec4899", colorName: "Розовая", isRare: false },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 font-montserrat">
              Каталог коробочек
            </h1>
            <p className="text-gray-600 mt-2">
              Все доступные цвета по 1 рублю за штуку
            </p>
          </div>

          <Button
            variant="outline"
            className="border-red-200 text-red-600 hover:bg-red-50"
          >
            <Filter className="w-4 h-4 mr-2" />
            Фильтры
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {allProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Catalog;
