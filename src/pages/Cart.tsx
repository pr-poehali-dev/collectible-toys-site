import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Minus, Plus, Trash2 } from "lucide-react";

const Cart = () => {
  const cartItems = [
    { id: 1, color: "#ef4444", colorName: "Красная", quantity: 2 },
    { id: 2, color: "#3b82f6", colorName: "Синяя", quantity: 1 },
  ];

  const total = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8 font-montserrat">
          Корзина
        </h1>

        {cartItems.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-gray-600 text-lg mb-4">Ваша корзина пуста</p>
            <Button className="bg-red-600 hover:bg-red-700">
              Перейти в каталог
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-4">
              {cartItems.map((item) => (
                <Card key={item.id}>
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-4">
                      <div
                        className="w-16 h-16 rounded-lg border-2 border-gray-100 flex items-center justify-center"
                        style={{ backgroundColor: item.color }}
                      >
                        <span className="text-white/80">🎲</span>
                      </div>

                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 font-montserrat">
                          Коробочка {item.colorName}
                        </h3>
                        <p className="text-red-600 font-bold">1 ₽</p>
                      </div>

                      <div className="flex items-center space-x-2">
                        <Button variant="outline" size="sm">
                          <Minus className="w-4 h-4" />
                        </Button>
                        <span className="w-8 text-center font-medium">
                          {item.quantity}
                        </span>
                        <Button variant="outline" size="sm">
                          <Plus className="w-4 h-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-red-600 hover:bg-red-50"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 font-montserrat">
                    Итого
                  </h3>

                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between">
                      <span>Товары ({total} шт.)</span>
                      <span>{total} ₽</span>
                    </div>
                    <div className="flex justify-between font-bold text-lg">
                      <span>К оплате</span>
                      <span className="text-red-600">{total} ₽</span>
                    </div>
                  </div>

                  <Button className="w-full bg-red-600 hover:bg-red-700">
                    Оформить заказ
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
