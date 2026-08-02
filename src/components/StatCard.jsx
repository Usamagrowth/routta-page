import React from 'react';

const StatCard = ({ value, label, icon: Icon }) => {
  return (
    <div className="text-center p-6 rounded-2xl bg-white border border-gray-200 hover:border-emerald-300 transition-all duration-300">
      {Icon && <Icon className="mx-auto mb-3 text-emerald-500" size={32} />}
      <p className="text-3xl lg:text-4xl font-bold text-emerald-500">{value}</p>
      <p className="mt-2 text-sm text-gray-600">{label}</p>
    </div>
  );
};

export default StatCard;
