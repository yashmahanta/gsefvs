import type { AnswerLanguage, MathModel } from '../types';

interface SolverOptionsProps {
  model: MathModel;
  language: AnswerLanguage;
  disabled?: boolean;
  onModelChange: (model: MathModel) => void;
  onLanguageChange: (language: AnswerLanguage) => void;
}

const languages: Array<{ value: AnswerLanguage; label: string }> = [
  { value: 'auto', label: 'Match question' },
  { value: 'en', label: 'English' },
  { value: 'hi', label: 'Hindi' },
  { value: 'bn', label: 'Bengali' },
  { value: 'mr', label: 'Marathi' },
  { value: 'ta', label: 'Tamil' },
  { value: 'te', label: 'Telugu' },
  { value: 'ur', label: 'Urdu' },
];

export default function SolverOptions({
  model,
  language,
  disabled,
  onModelChange,
  onLanguageChange,
}: SolverOptionsProps) {
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
      <label className="space-y-2 text-xs font-bold uppercase tracking-wider text-slate-700">
        Math model
        <select
          value={model}
          onChange={event => onModelChange(event.target.value as MathModel)}
          disabled={disabled}
          className="min-h-11 w-full rounded-xl border-2 border-slate-200 bg-white px-3 text-sm font-semibold normal-case tracking-normal text-slate-800 outline-none focus:border-amber-400 disabled:opacity-50"
        >
          <option value="gemini-3.8-flash">Gemini 3.8 Flash</option>
        </select>
      </label>

      <label className="space-y-2 text-xs font-bold uppercase tracking-wider text-slate-700">
        Answer language
        <select
          value={language}
          onChange={event => onLanguageChange(event.target.value as AnswerLanguage)}
          disabled={disabled}
          className="min-h-11 w-full rounded-xl border-2 border-slate-200 bg-white px-3 text-sm font-semibold normal-case tracking-normal text-slate-800 outline-none focus:border-amber-400 disabled:opacity-50"
        >
          {languages.map(option => <option key={option.value} value={option.value}>{option.label}</option>)}
        </select>
      </label>
    </div>
  );
}
