import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Cart = () => {
  const phoneNumber = "+7 (905) 734-78-21";
  const telegramUsername = "@GOGOLvPODVALE";
  const whatsappLink = `https://wa.me/79057347821`;
  const telegramLink = `https://t.me/GOGOLvPODVALE`;

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4 font-montserrat">
            Оформление заказа
          </h1>
          <p className="text-gray-600 text-lg">
            Для заказа коробочек свяжитесь с нами удобным способом
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Send" size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 font-montserrat">
                Telegram
              </h3>
              <p className="text-gray-600 mb-4">
                Быстрое оформление заказа в мессенджере
              </p>
              <p className="text-sm text-gray-500 mb-4">{telegramUsername}</p>
              <Button
                className="w-full bg-blue-500 hover:bg-blue-600"
                onClick={() => window.open(telegramLink, "_blank")}
              >
                Написать в Telegram
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="MessageCircle" size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 font-montserrat">
                WhatsApp
              </h3>
              <p className="text-gray-600 mb-4">
                Удобное общение через WhatsApp
              </p>
              <p className="text-sm text-gray-500 mb-4">{phoneNumber}</p>
              <Button
                className="w-full bg-green-500 hover:bg-green-600"
                onClick={() => window.open(whatsappLink, "_blank")}
              >
                Написать в WhatsApp
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <Card className="max-w-2xl mx-auto">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 font-montserrat">
                Как сделать заказ?
              </h3>
              <div className="text-left space-y-3">
                <div className="flex items-start space-x-3">
                  <span className="bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                    1
                  </span>
                  <p className="text-gray-700">
                    Выберите цвет коробочки из каталога
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                    2
                  </span>
                  <p className="text-gray-700">
                    Напишите нам в Telegram или WhatsApp
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                    3
                  </span>
                  <p className="text-gray-700">
                    Укажите количество и адрес доставки
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                    4
                  </span>
                  <p className="text-gray-700">
                    Оплатите заказ и получите коробочки!
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Cart;
