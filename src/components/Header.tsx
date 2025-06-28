import { ShoppingCart, Menu } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b-2 border-red-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-red-600 rounded-md flex items-center justify-center">
              <span className="text-white font-bold text-lg font-montserrat">
                П
              </span>
            </div>
            <span className="text-xl font-bold text-red-600 font-montserrat">
              Пуп март
            </span>
          </Link>

          <nav className="hidden md:flex space-x-8">
            <Link
              to="/"
              className="text-gray-700 hover:text-red-600 font-medium transition-colors"
            >
              Главная
            </Link>
            <Link
              to="/catalog"
              className="text-gray-700 hover:text-red-600 font-medium transition-colors"
            >
              Каталог
            </Link>
            <Link
              to="/contacts"
              className="text-gray-700 hover:text-red-600 font-medium transition-colors"
            >
              Контакты
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Link to="/cart">
              <Button
                variant="outline"
                size="sm"
                className="relative border-red-200 hover:bg-red-50"
              >
                <ShoppingCart className="h-4 w-4" />
                <span className="ml-2 hidden sm:inline">Корзина</span>
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  0
                </span>
              </Button>
            </Link>

            <Button variant="ghost" size="sm" className="md:hidden">
              <Menu className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
