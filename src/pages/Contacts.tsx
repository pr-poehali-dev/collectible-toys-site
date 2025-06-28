import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Clock, Phone, Mail } from "lucide-react";

const Contacts = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center font-montserrat">
          Контакты
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-6 font-montserrat">
                  Информация о магазине
                </h2>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-red-600 mt-1" />
                    <div>
                      <p className="font-medium text-gray-900">Адрес</p>
                      <p className="text-gray-600">
                        ул. Коллекционная, 123, Москва
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Clock className="w-5 h-5 text-red-600 mt-1" />
                    <div>
                      <p className="font-medium text-gray-900">Часы работы</p>
                      <p className="text-gray-600">Пн-Пт: 10:00-20:00</p>
                      <p className="text-gray-600">Сб-Вс: 11:00-18:00</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Phone className="w-5 h-5 text-red-600 mt-1" />
                    <div>
                      <p className="font-medium text-gray-900">Телефон</p>
                      <p className="text-gray-600">+7 (495) 123-45-67</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Mail className="w-5 h-5 text-red-600 mt-1" />
                    <div>
                      <p className="font-medium text-gray-900">Email</p>
                      <p className="text-gray-600">info@pupmart.ru</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div>
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-6 font-montserrat">
                  Написать нам
                </h2>

                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Имя
                    </label>
                    <Input placeholder="Ваше имя" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <Input type="email" placeholder="your@email.com" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Сообщение
                    </label>
                    <Textarea placeholder="Ваше сообщение..." rows={4} />
                  </div>

                  <Button className="w-full bg-red-600 hover:bg-red-700">
                    Отправить сообщение
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
