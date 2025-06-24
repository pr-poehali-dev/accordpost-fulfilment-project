import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import ServiceCard from "@/components/ServiceCard";
import BenefitsSection from "@/components/BenefitsSection";

const Index = () => {
  const services = [
    {
      title: "FBO - Fulfillment by Operator",
      description:
        "Полное управление складскими операциями. Мы принимаем, храним и отправляем ваши товары.",
      iconName: "Warehouse",
      color: "bg-gradient-to-br from-blue-500 to-blue-600",
      href: "/fbo",
    },
    {
      title: "FBS - Fulfillment by Seller",
      description:
        "Вы управляете складом, мы обеспечиваем логистику и доставку до покупателя.",
      iconName: "Truck",
      color: "bg-gradient-to-br from-green-500 to-green-600",
      href: "/fbs",
    },
    {
      title: "DBS - Dropshipping by Seller",
      description:
        "Прямые поставки от производителя к покупателю без промежуточного склада.",
      iconName: "ArrowRight",
      color: "bg-gradient-to-br from-purple-500 to-purple-600",
      href: "/dbs",
    },
    {
      title: "B2C - Business to Consumer",
      description:
        "Специализированные решения для прямых продаж конечным потребителям.",
      iconName: "Users",
      color: "bg-gradient-to-br from-orange-500 to-orange-600",
      href: "/b2c",
    },
  ];

  return (
    <Layout>
      <HeroSection />

      {/* Services Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Наши услуги
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Выберите оптимальную модель фулфилмента для вашего бизнеса
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                iconName={service.iconName}
                color={service.color}
                href={service.href}
              />
            ))}
          </div>
        </div>
      </section>

      <BenefitsSection />

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-purple-600 to-indigo-700 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Готовы начать?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Рассчитайте стоимость фулфилмент-услуг для вашего бизнеса
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/calculator"
              className="px-8 py-4 bg-white text-purple-600 font-semibold rounded-xl hover:bg-gray-50 transition-colors inline-flex items-center justify-center"
            >
              Рассчитать стоимость
            </a>
            <a
              href="/contacts"
              className="px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition-colors inline-flex items-center justify-center"
            >
              Связаться с нами
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
