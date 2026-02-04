import { FormState, UpdateField } from "../types/form";
import { Section } from "./Section";

type Props = {
  formData: FormState;
  updateField: UpdateField;
};

export function AcademicPerformanceSection({ formData, updateField }: Props) {
  return (
    <Section title="Academic Performance">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <label className="flex flex-col gap-1 text-sm font-medium text-slate-800">
          CGPA till 3rd Semester*
          <input
            type="number"
            step="0.01"
            min="0"
            max="10"
            required
            value={formData.cgpa}
            onChange={(e) => updateField("cgpa", e.target.value)}
            className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-base text-slate-900 shadow-sm focus:border-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-200"
          />
        </label>

        <div className="flex flex-col gap-2 text-sm font-medium text-slate-800">
          Number of active backlogs
          <div className="flex flex-wrap gap-3">
            {["none", "1 backlog", "2 or more backlogs"].map((option) => (
              <label
                key={option}
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-medium text-slate-800 shadow-sm hover:bg-slate-100"
              >
                <input
                  type="radio"
                  name="backlogs"
                  value={option}
                  checked={formData.activeBacklogs === option}
                  onChange={(e) => updateField("activeBacklogs", e.target.value as FormState["activeBacklogs"])}
                  className="h-4 w-4 border-slate-300 text-slate-800 focus:ring-slate-400"
                />
                {option}
              </label>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
