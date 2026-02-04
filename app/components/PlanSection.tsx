import { FormState, UpdateField } from "../types/form";
import { Section } from "./Section";

type Props = {
  formData: FormState;
  updateField: UpdateField;
};

export function PlanSection({ formData, updateField }: Props) {
  return (
    <Section title="Plan Ahead">
      <div className="space-y-3">
        <p className="text-sm font-medium text-slate-800">What are your plans after graduation?*</p>
        <div className="flex flex-wrap gap-3">
          {[
            "Job/Placement",
            "Further studies",
            "Entrepreneurship/New Venture or Startup",
            "Other",
          ].map((option) => (
            <label
              key={option}
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-medium text-slate-800 shadow-sm hover:bg-slate-100"
            >
              <input
                type="radio"
                name="plan"
                value={option}
                checked={formData.planAfterGraduation === option}
                onChange={(e) => updateField("planAfterGraduation", e.target.value as FormState["planAfterGraduation"])}
                className="h-4 w-4 border-slate-300 text-slate-800 focus:ring-slate-400"
              />
              {option}
            </label>
          ))}
        </div>
      </div>

      {formData.planAfterGraduation === "Other" && (
        <label className="flex flex-col gap-1 text-sm font-medium text-slate-800">
          Please specify
          <input
            type="text"
            value={formData.planOther}
            onChange={(e) => updateField("planOther", e.target.value)}
            className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-base text-slate-900 shadow-sm focus:border-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-200"
          />
        </label>
      )}

      <label className="flex flex-col gap-2 text-sm font-medium text-slate-800">
        Why do you wish to apply for this program?*
        <textarea
          required
          rows={4}
          value={formData.motivation}
          onChange={(e) => updateField("motivation", e.target.value)}
          className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-base text-slate-900 shadow-sm focus:border-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-200"
          placeholder="Share your motivations and expectations"
        />
      </label>
    </Section>
  );
}
