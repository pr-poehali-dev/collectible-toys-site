import { ShoppingBag, Star, Gift } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-red-50 to-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4 font-montserrat">
            Добро пожаловать в
            <span className="text-red-600 block">Пуп март</span>
          </h1>

          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Магазин коллекционных бумажных игрушек. Собирай, играй,
            коллекционируй! Каждая коробочка — это сюрприз по доступной цене.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/catalog">
              <Button
                size="lg"
                className="bg-red-600 hover:bg-red-700 text-white px-8"
              >
                <ShoppingBag className="w-5 h-5 mr-2" />
                Перейти в каталог
              </Button>
            </Link>

            <Link to="/contacts">
              <Button
                variant="outline"
                size="lg"
                className="border-red-200 text-red-600 hover:bg-red-50"
              >
                Связаться с нами
              </Button>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="text-center p-6 bg-white rounded-lg shadow-sm border border-red-100">
            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Gift className="w-6 h-6 text-red-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2 font-montserrat">
              Низкие цены
            </h3>
            <p className="text-gray-600">
              Каждая коробочка всего 1 рубль! Доступно для всех коллекционеров.
            </p>
          </div>

          <div className="text-center p-6 bg-white rounded-lg shadow-sm border border-red-100">
            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Star className="w-6 h-6 text-red-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2 font-montserrat">
              Редкие находки
            </h3>
            <p className="text-gray-600">
              Ищите особые и секретные игрушки в наших коробочках!
            </p>
          </div>

          <div className="text-center p-6 bg-white rounded-lg shadow-sm border border-red-100">
            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <ShoppingBag className="w-6 h-6 text-red-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2 font-montserrat">
              Быстрая доставка
            </h3>
            <p className="text-gray-600">
              Получите свои коллекционные игрушки максимально быстро.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
