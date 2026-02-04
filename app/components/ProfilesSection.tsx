import { FormState, UpdateField } from "../types/form";
import { Section } from "./Section";

type Props = {
  formData: FormState;
  updateField: UpdateField;
};

export function ProfilesSection({ formData, updateField }: Props) {
  return (
    <Section title="Competitive Programming Profiles">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <label className="flex flex-col gap-1 text-sm font-medium text-slate-800">
          LeetCode ranking (write NA if not available)
          <input
            type="text"
            value={formData.leetcodeRank}
            onChange={(e) => updateField("leetcodeRank", e.target.value)}
            className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-base text-slate-900 shadow-sm focus:border-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-200"
          />
        </label>
        <label className="flex flex-col gap-1 text-sm font-medium text-slate-800">
          LeetCode profile link
          <input
            type="url"
            value={formData.leetcodeLink}
            onChange={(e) => updateField("leetcodeLink", e.target.value)}
            className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-base text-slate-900 shadow-sm focus:border-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-200"
          />
        </label>
        <label className="flex flex-col gap-1 text-sm font-medium text-slate-800">
          HackerRank ranking (write NA if not available)
          <input
            type="text"
            value={formData.hackerrankRank}
            onChange={(e) => updateField("hackerrankRank", e.target.value)}
            className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-base text-slate-900 shadow-sm focus:border-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-200"
          />
        </label>
        <label className="flex flex-col gap-1 text-sm font-medium text-slate-800">
          HackerRank profile link
          <input
            type="url"
            value={formData.hackerrankLink}
            onChange={(e) => updateField("hackerrankLink", e.target.value)}
            className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-base text-slate-900 shadow-sm focus:border-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-200"
          />
        </label>
        <label className="flex flex-col gap-1 text-sm font-medium text-slate-800">
          GitHub profile link (write NA if not available)
          <input
            type="url"
            value={formData.githubLink}
            onChange={(e) => updateField("githubLink", e.target.value)}
            className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-base text-slate-900 shadow-sm focus:border-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-200"
          />
        </label>
      </div>
    </Section>
  );
}
