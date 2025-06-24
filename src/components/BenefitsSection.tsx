import Icon from "@/components/ui/icon";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: "Zap",
      title: "Скорость обработки",
      description:
        "Автоматизированные процессы обеспечивают обработку заказов в течение 2-4 часов",
    },
    {
      icon: "Shield",
      title: "Надёжность",
      description: "Многоуровневая система контроля качества и защиты товаров",
    },
    {
      icon: "TrendingUp",
      title: "Масштабируемость",
      description:
        "Легко адаптируемся к росту вашего бизнеса без потери качества",
    },
    {
      icon: "Globe",
      title: "География",
      description:
        "Доставка по всей России и странам СНГ через проверенных партнёров",
    },
    {
      icon: "BarChart3",
      title: "Аналитика",
      description:
        "Детальная отчётность и аналитика для оптимизации вашего бизнеса",
    },
    {
      icon: "Headphones",
      title: "Поддержка",
      description:
        "Персональный менеджер и техподдержка 24/7 для решения любых вопросов",
    },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Почему выбирают нас
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Современные технологии и проверенные процессы для эффективного
            управления вашими заказами
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Icon name={benefit.icon} size={28} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {benefit.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
