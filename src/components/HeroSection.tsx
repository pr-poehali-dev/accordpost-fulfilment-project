import React from "react";
import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-700 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center max-w-4xl mx-auto">
          <div className="flex justify-center mb-8">
            <div className="p-4 bg-white/10 rounded-2xl backdrop-blur-sm">
              <Icon name="Package" size={48} className="text-white" />
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-200">
            Фулфилмент
            <br />
            <span className="text-4xl md:text-6xl">будущего</span>
          </h1>

          <p className="text-xl md:text-2xl text-purple-100 mb-8 leading-relaxed">
            Автоматизируем весь цикл обработки заказов вашего интернет-магазина.
            От приёма товара до доставки клиенту.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="px-8 py-4 bg-white text-purple-600 font-semibold rounded-xl hover:bg-gray-50 transition-colors flex items-center justify-center group">
              Начать работу
              <Icon
                name="ArrowRight"
                size={20}
                className="ml-2 group-hover:translate-x-1 transition-transform"
              />
            </button>
            <button className="px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition-colors flex items-center justify-center">
              <Icon name="Calculator" size={20} className="mr-2" />
              Калькулятор стоимости
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">10,000+</div>
              <div className="text-purple-200">заказов в день</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">99.8%</div>
              <div className="text-purple-200">точность обработки</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">24/7</div>
              <div className="text-purple-200">техподдержка</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
