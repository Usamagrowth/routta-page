
const TestimonialCard = ({ name, role, content,  rating }) => {
  return (
    <div className="p-6 rounded-2xl bg-linear-to-br from-white/10 to-white/5 border border-white/10 hover:border-routta-teal/30 transition-all duration-300">
      <div className="flex items-center gap-1 mb-4">
        {[...Array(rating)].map((_, i) => (
          <svg key={i} className="w-5 h-5 text-routta-teal fill-current" viewBox="0 0 20 20">
            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
          </svg>
        ))}
      </div>
      <p className="text-gray-300 mb-4 leading-relaxed">"{content}"</p>
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-full bg-routta-teal/20 flex items-center justify-center text-routta-teal font-bold">
          {name.charAt(0)}
        </div>
        <div>
          <p className="font-semibold text-white">{name}</p>
          <p className="text-sm text-gray-400">{role}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
