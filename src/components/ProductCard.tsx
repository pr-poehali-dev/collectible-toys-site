import { Plus, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface ProductCardProps {
  id: number;
  color: string;
  colorName: string;
  isRare?: boolean;
}

const ProductCard = ({
  id,
  color,
  colorName,
  isRare = false,
}: ProductCardProps) => {
  return (
    <Card className="group hover:shadow-lg transition-shadow duration-200 border-gray-200 hover:border-red-200">
      <CardContent className="p-4">
        <div className="relative">
          <div
            className="w-full h-32 rounded-lg mb-3 border-2 border-gray-100 flex items-center justify-center relative overflow-hidden"
            style={{ backgroundColor: color }}
          >
            <div className="w-16 h-20 bg-white/20 rounded-sm border border-white/30 flex items-center justify-center">
              <span className="text-white/80 text-xs font-medium">🎲</span>
            </div>

            {isRare && (
              <div className="absolute top-2 right-2 bg-yellow-400 text-yellow-900 px-2 py-1 rounded-full text-xs font-bold flex items-center">
                <Star className="w-3 h-3 mr-1" />
                Редкая
              </div>
            )}
          </div>

          <h3 className="font-semibold text-gray-900 mb-1 font-montserrat">
            Коробочка {colorName}
          </h3>

          <div className="flex items-center justify-between">
            <span className="text-lg font-bold text-red-600">1 ₽</span>

            <Button
              size="sm"
              className="bg-red-600 hover:bg-red-700 text-white"
            >
              <Plus className="w-4 h-4 mr-1" />В корзину
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
