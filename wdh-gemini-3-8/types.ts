export type MarkType = 1 | 2 | 3 | 4;
export type MathModel = 'gemini-3.8-flash';
export type AnswerLanguage = 'auto' | 'en' | 'hi' | 'bn' | 'mr' | 'ta' | 'te' | 'ur';

export interface MathResult {
  question: string;
  explanation: string;
  latexCode: string;
  startQNum: string;
}
