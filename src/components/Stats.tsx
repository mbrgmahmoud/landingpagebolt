import React from 'react';
import { useTranslation } from 'react-i18next';
import { TrendingUp, Users, Zap } from 'lucide-react';

export const Stats: React.FC = () => {
  const { t } = useTranslation();

  const stats = [
    {
      icon: TrendingUp,
      value: '99%',
      label: 'Conversion Rate',
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: Users,
      value: '10k+',
      label: 'Pages Generated',
      color: 'from-blue-500 to-cyan-600'
    },
    {
      icon: Zap,
      value: '<30s',
      label: 'Generation Time',
      color: 'from-purple-500 to-pink-600'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      {stats.map((stat, index) => (
        <div key={index} className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg">
          <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${stat.color} mb-4`}>
            <stat.icon className="h-6 w-6 text-white" />
          </div>
          <div className="space-y-1">
            <div className="text-3xl font-bold text-gray-800">{stat.value}</div>
            <div className="text-gray-600">{stat.label}</div>
          </div>
        </div>
      ))}
    </div>
  );
};