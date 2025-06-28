import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";

const Index = () => {
  const featuredProducts = [
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
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Hero />

      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 font-montserrat">
              Популярные коробочки
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Самые популярные цвета коробочек среди наших коллекционеров.
              Каждая содержит уникальную бумажную игрушку!
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-white border-t border-gray-200 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-600">
            © 2024 Пуп март. Все права защищены. Магазин коллекционных бумажных
            игрушек.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
