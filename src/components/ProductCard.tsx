import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

interface ProductCardProps {
  id: number;
  color: string;
  colorName: string;
  isRare?: boolean;
  image?: string;
}

const ProductCard = ({ color, colorName, isRare, image }: ProductCardProps) => {
  const phoneNumber = "+7 (999) 123-45-67";
  const telegramLink = `https://t.me/pupmart_orders`;
  const whatsappLink = `https://wa.me/79991234567`;

  const handleTelegramOrder = () => {
    const message = `Хочу заказать коробочку: ${colorName}`;
    window.open(
      `${telegramLink}?text=${encodeURIComponent(message)}`,
      "_blank",
    );
  };

  const handleWhatsAppOrder = () => {
    const message = `Хочу заказать коробочку: ${colorName}`;
    window.open(
      `${whatsappLink}?text=${encodeURIComponent(message)}`,
      "_blank",
    );
  };

  return (
    <Card className="group hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
      <CardContent className="p-4">
        <div className="relative mb-4">
          {image ? (
            <img
              src={image}
              alt={`Коробочка ${colorName}`}
              className="w-full h-48 object-cover rounded-lg"
            />
          ) : (
            <div
              className="w-full h-48 rounded-lg flex items-center justify-center"
              style={{ backgroundColor: color }}
            >
              <span className="text-white/80 text-4xl">🎲</span>
            </div>
          )}
          {isRare && (
            <Badge className="absolute top-2 right-2 bg-yellow-500 hover:bg-yellow-600">
              Редкая
            </Badge>
          )}
        </div>

        <div className="space-y-3">
          <div>
            <p className="text-red-600 font-bold text-lg">1 ₽</p>
          </div>

          <div className="flex space-x-2">
            <Button
              size="sm"
              className="flex-1 bg-blue-500 hover:bg-blue-600"
              onClick={handleTelegramOrder}
            >
              <Icon name="Send" size={16} className="mr-1" />
              Telegram
            </Button>
            <Button
              size="sm"
              variant="outline"
              className="flex-1 border-green-500 text-green-600 hover:bg-green-50"
              onClick={handleWhatsAppOrder}
            >
              <Icon name="MessageCircle" size={16} className="mr-1" />
              WhatsApp
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
