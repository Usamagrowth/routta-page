
const FeatureCard = ({ icon: Icon, title, description }) => {
  return (
    <div className="group p-6 rounded-2xl bg-white border border-gray-200 hover:border-emerald-300 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
      <div className="inline-flex rounded-xl bg-emerald-100 p-3 text-emerald-600 mb-4 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
        <Icon size={24} />
      </div>
      <h3 className="text-xl font-semibold mb-3 text-gray-900">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
};

export default FeatureCard;
