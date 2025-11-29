import { GoogleGenAI } from "@google/genai";

const getAIClient = () => {
  return new GoogleGenAI({ apiKey: process.env.API_KEY });
};

export const generateEfficiencyAdvice = async (userQuery: string): Promise<string> => {
  try {
    const ai = getAIClient();
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `You are "The Efficiency Engine", a technical, precise, and empowering energy consultant for Sabi Lifestyle. 
      
      User Query: "${userQuery}"
      
      Provide a response with the following format:
      1. A short, punchy technical insight (max 1 sentence).
      2. Three specific, actionable steps formatted as bullet points.
      3. A calculated estimation of potential impact (e.g., "Potential Gain: Medium").
      
      Tone: Technical, encouraging, data-driven. Avoid fluff.`,
    });

    return response.text || "System Offline. Re-calibrating efficiency sensors...";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Connection interrupted. Efficiency data unavailable.";
  }
};
