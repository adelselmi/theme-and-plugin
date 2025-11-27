import { GoogleGenAI, Type, Schema } from "@google/genai";
import { RecommendationResponse } from "../types";

const apiKey = process.env.API_KEY || '';

const ai = new GoogleGenAI({ apiKey });

const recommendationSchema: Schema = {
  type: Type.OBJECT,
  properties: {
    websiteContext: {
      type: Type.STRING,
      description: "A brief summary of the type of website these recommendations are for.",
    },
    themes: {
      type: Type.ARRAY,
      description: "List of 10 recommended themes.",
      items: {
        type: Type.OBJECT,
        properties: {
          name: { type: Type.STRING },
          description: { type: Type.STRING },
          priceModel: { type: Type.STRING, description: "e.g., Free, Freemium, Premium" },
          keyFeatures: {
            type: Type.ARRAY,
            items: { type: Type.STRING },
            description: "3 key features of the theme",
          },
          bestFor: { type: Type.STRING, description: "Who specifically this theme is best for" },
        },
        required: ["name", "description", "priceModel", "keyFeatures", "bestFor"],
      },
    },
    plugins: {
      type: Type.ARRAY,
      description: "List of 10 recommended plugins.",
      items: {
        type: Type.OBJECT,
        properties: {
          name: { type: Type.STRING },
          description: { type: Type.STRING },
          category: { type: Type.STRING, description: "e.g., SEO, Security, Design, Functional" },
          priceModel: { type: Type.STRING },
          reason: { type: Type.STRING, description: "Why this plugin is essential for this specific website type" },
        },
        required: ["name", "description", "category", "priceModel", "reason"],
      },
    },
  },
  required: ["websiteContext", "themes", "plugins"],
};

export const getRecommendations = async (websiteType: string): Promise<RecommendationResponse> => {
  const model = "gemini-2.5-flash";
  
  const prompt = `
    I am building a website of type: "${websiteType}".
    Please act as a senior WordPress Architect.
    Recommend exactly 10 high-quality WordPress themes and 10 essential WordPress plugins specifically for this type of website.
    Focus on performance, popularity, and suitability for the specific use case.
    Return the response in JSON format matching the schema provided.
  `;

  try {
    const response = await ai.models.generateContent({
      model,
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: recommendationSchema,
        temperature: 0.4, 
      },
    });

    const text = response.text;
    if (!text) {
      throw new Error("No data returned from AI");
    }

    return JSON.parse(text) as RecommendationResponse;
  } catch (error) {
    console.error("Error fetching recommendations:", error);
    throw error;
  }
};