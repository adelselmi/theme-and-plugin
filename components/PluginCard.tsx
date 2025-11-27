import React from 'react';
import { PluginRecommendation } from '../types';
import { Puzzle, DollarSign, Tag, Info } from 'lucide-react';

interface PluginCardProps {
  plugin: PluginRecommendation;
  index: number;
}

const PluginCard: React.FC<PluginCardProps> = ({ plugin, index }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-5 hover:border-indigo-300 transition-colors duration-200">
      <div className="flex justify-between items-start">
         <div className="flex items-center gap-3">
             <div className="bg-slate-100 text-slate-500 rounded-full w-8 h-8 flex items-center justify-center font-bold text-xs">
                {index + 1}
             </div>
             <div>
                <h3 className="text-lg font-bold text-slate-900 leading-tight">{plugin.name}</h3>
                <div className="flex items-center text-xs text-slate-500 mt-1 space-x-2">
                    <span className="flex items-center">
                        <Tag className="w-3 h-3 mr-1" /> {plugin.category}
                    </span>
                    <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                    <span className="flex items-center text-green-600">
                        <DollarSign className="w-3 h-3 mr-0.5" /> {plugin.priceModel}
                    </span>
                </div>
             </div>
         </div>
         <Puzzle className="text-indigo-200 w-6 h-6" />
      </div>

      <p className="mt-3 text-slate-600 text-sm">
        {plugin.description}
      </p>

      <div className="mt-4 bg-yellow-50 border border-yellow-100 p-3 rounded-lg flex items-start">
        <Info className="w-4 h-4 text-yellow-600 mr-2 mt-0.5 flex-shrink-0" />
        <p className="text-xs text-yellow-800 italic">
          <span className="font-semibold not-italic">Why it's essential:</span> {plugin.reason}
        </p>
      </div>
    </div>
  );
};

export default PluginCard;