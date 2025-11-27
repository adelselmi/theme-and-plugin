import React from 'react';
import { ThemeRecommendation } from '../types';
import { Paintbrush, Check, DollarSign } from 'lucide-react';

interface ThemeCardProps {
  theme: ThemeRecommendation;
  index: number;
}

const ThemeCard: React.FC<ThemeCardProps> = ({ theme, index }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 hover:shadow-md transition-shadow duration-200 flex flex-col h-full">
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center space-x-3">
            <div className="bg-indigo-100 p-2 rounded-lg text-indigo-600 font-bold text-sm min-w-[2.5rem] text-center">
                #{index + 1}
            </div>
            <h3 className="text-xl font-bold text-slate-800">{theme.name}</h3>
        </div>
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
          <DollarSign className="w-3 h-3 mr-1" />
          {theme.priceModel}
        </span>
      </div>
      
      <p className="text-slate-600 mb-4 text-sm leading-relaxed flex-grow">
        {theme.description}
      </p>

      <div className="space-y-3 mt-auto">
        <div>
           <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Key Features</h4>
           <ul className="space-y-1">
             {theme.keyFeatures.map((feature, idx) => (
               <li key={idx} className="flex items-start text-sm text-slate-700">
                 <Check className="w-4 h-4 text-indigo-500 mr-2 mt-0.5 flex-shrink-0" />
                 <span>{feature}</span>
               </li>
             ))}
           </ul>
        </div>
        
        <div className="pt-3 border-t border-slate-100">
           <div className="flex items-center text-sm text-indigo-700 bg-indigo-50 p-2 rounded-md">
             <Paintbrush className="w-4 h-4 mr-2" />
             <span className="font-medium">Best for: {theme.bestFor}</span>
           </div>
        </div>
      </div>
    </div>
  );
};

export default ThemeCard;