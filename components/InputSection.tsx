import React, { useState } from 'react';
import { Search, Loader2 } from 'lucide-react';

interface InputSectionProps {
  onGenerate: (type: string) => void;
  isLoading: boolean;
}

const InputSection: React.FC<InputSectionProps> = ({ onGenerate, isLoading }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      onGenerate(input);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto text-center px-4">
      <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
        Build the Perfect <span className="text-indigo-600">Website Stack</span>
      </h1>
      <p className="text-lg text-slate-600 mb-8 max-w-lg mx-auto">
        Tell us what kind of website you are building, and our AI will architect the perfect theme and plugin combination.
      </p>
      
      <form onSubmit={handleSubmit} className="relative group">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <Search className="h-6 w-6 text-slate-400 group-focus-within:text-indigo-500 transition-colors" />
        </div>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="e.g. Vintage Clothing Store, Personal Portfolio, Online Course Platform..."
          disabled={isLoading}
          className="block w-full pl-12 pr-32 py-4 bg-white border border-slate-300 rounded-full text-lg shadow-sm placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
        />
        <button
          type="submit"
          disabled={!input.trim() || isLoading}
          className="absolute right-2 top-2 bottom-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-full px-6 transition-all duration-200 disabled:bg-slate-300 disabled:cursor-not-allowed flex items-center"
        >
          {isLoading ? (
            <>
              <Loader2 className="animate-spin h-5 w-5 mr-2" />
              Analyzing
            </>
          ) : (
            'Generate'
          )}
        </button>
      </form>
      
      <div className="mt-6 flex flex-wrap justify-center gap-2">
        <span className="text-sm text-slate-500">Try:</span>
        {['E-commerce', 'Travel Blog', 'Real Estate', 'Non-Profit'].map((suggestion) => (
           <button
             key={suggestion}
             onClick={() => {
                setInput(suggestion);
                onGenerate(suggestion);
             }}
             disabled={isLoading}
             className="text-sm text-indigo-600 bg-indigo-50 hover:bg-indigo-100 px-3 py-1 rounded-full transition-colors"
           >
             {suggestion}
           </button>
        ))}
      </div>
    </div>
  );
};

export default InputSection;