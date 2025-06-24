import Icon from "@/components/ui/icon";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  iconName: string;
  color: string;
  href: string;
}

const ServiceCard = ({
  title,
  description,
  iconName,
  color,
  href,
}: ServiceCardProps) => {
  return (
    <a
      href={href}
      className="group block p-6 bg-white rounded-2xl border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
    >
      <div
        className={`w-12 h-12 rounded-xl ${color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
      >
        <Icon name={iconName} size={24} className="text-white" />
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
        {title}
      </h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
      <div className="mt-4 flex items-center text-purple-600 font-medium opacity-0 group-hover:opacity-100 transition-opacity">
        Подробнее <Icon name="ArrowRight" size={16} className="ml-1" />
      </div>
    </a>
  );
};

export default ServiceCard;
