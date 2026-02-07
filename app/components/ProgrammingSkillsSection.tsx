import { FormState, ProgrammingLevel, programmingLanguages, programmingLevels, UpdateField } from "../types/form";
import { Section } from "./Section";

type Props = {
  formData: FormState;
  updateField: UpdateField;
  updateProgrammingSkill: (key: string, level: ProgrammingLevel) => void;
};

export function ProgrammingSkillsSection({ formData, updateField, updateProgrammingSkill }: Props) {
  return (
    <Section
      title="Programming Skills"
      description="Select the level that best represents your current ability."
    >
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {programmingLanguages.map((lang) => (
          <div
            key={lang.key}
            className="flex items-center justify-between gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3"
          >
            <span className="text-sm font-medium text-slate-900">{lang.label}</span>
            <select
              value={formData.programmingSkills[lang.key]}
              onChange={(e) => updateProgrammingSkill(lang.key, e.target.value as ProgrammingLevel)}
              className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm focus:border-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-200"
            >
              {programmingLevels.map((level) => (
                <option key={level}>{level}</option>
              ))}
            </select>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <label className="flex flex-col gap-1 text-sm font-medium text-slate-800">
          Other (specify language)
          <input
            type="text"
            value={formData.otherProgrammingName}
            onChange={(e) => updateField("otherProgrammingName", e.target.value)}
            className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-base text-slate-900 shadow-sm focus:border-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-200"
            placeholder="e.g., Rust"
          />
        </label>

        <label className="flex flex-col gap-1 text-sm font-medium text-slate-800">
          Level for other language
          <select
            value={formData.otherProgrammingLevel}
            onChange={(e) => updateField("otherProgrammingLevel", e.target.value as ProgrammingLevel)}
            className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-base text-slate-900 shadow-sm focus:border-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-200"
          >
            {programmingLevels.map((level) => (
              <option key={level}>{level}</option>
            ))}
          </select>
        </label>
      </div>

    </Section>
  );
}
