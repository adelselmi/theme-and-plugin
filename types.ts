export interface ThemeRecommendation {
  name: string;
  description: string;
  priceModel: string;
  keyFeatures: string[];
  bestFor: string;
}

export interface PluginRecommendation {
  name: string;
  description: string;
  category: string;
  priceModel: string;
  reason: string;
}

export interface RecommendationResponse {
  websiteContext: string;
  themes: ThemeRecommendation[];
  plugins: PluginRecommendation[];
}

export enum LoadingState {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR',
}