import { FormState, UpdateField } from "../types/form";
import { Section } from "./Section";

type Props = {
  formData: FormState;
  updateField: UpdateField;
};

export function ExposureSection({ formData, updateField }: Props) {
  return (
    <Section title="Technical & Entrepreneurship Exposure">
      <div className="space-y-4">
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
          <div className="space-y-2">
            <p className="text-sm font-medium text-slate-800">Have you participated in any hackathons?</p>
            <div className="flex gap-3">
              {["yes", "no"].map((value) => (
                <label
                  key={value}
                  className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-medium text-slate-800 shadow-sm hover:bg-slate-100"
                >
                  <input
                    type="radio"
                    name="hackathons"
                    value={value}
                    checked={formData.hackathonsParticipated === value}
                    onChange={(e) => updateField("hackathonsParticipated", e.target.value as FormState["hackathonsParticipated"])}
                    className="h-4 w-4 border-slate-300 text-slate-800 focus:ring-slate-400"
                  />
                  {value === "yes" ? "Yes" : "No"}
                </label>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <p className="text-sm font-medium text-slate-800">Have you done significant or innovative projects?</p>
            <div className="flex gap-3">
              {["yes", "no"].map((value) => (
                <label
                  key={value}
                  className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-medium text-slate-800 shadow-sm hover:bg-slate-100"
                >
                  <input
                    type="radio"
                    name="projects"
                    value={value}
                    checked={formData.projectsDone === value}
                    onChange={(e) => updateField("projectsDone", e.target.value as FormState["projectsDone"])}
                    className="h-4 w-4 border-slate-300 text-slate-800 focus:ring-slate-400"
                  />
                  {value === "yes" ? "Yes" : "No"}
                </label>
              ))}
            </div>
          </div>
        </div>

        <label className="flex flex-col gap-2 text-sm font-medium text-slate-800">
          If yes, list hackathons and achievements
          <textarea
            rows={3}
            value={formData.hackathonDetails}
            onChange={(e) => updateField("hackathonDetails", e.target.value)}
            className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-base text-slate-900 shadow-sm focus:border-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-200"
            placeholder="Hackathon name, year, role, achievements"
          />
        </label>

        <label className="flex flex-col gap-2 text-sm font-medium text-slate-800">
          If yes, list projects with a brief description
          <textarea
            rows={3}
            value={formData.projectDetails}
            onChange={(e) => updateField("projectDetails", e.target.value)}
            className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-base text-slate-900 shadow-sm focus:border-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-200"
            placeholder="Project title, tech stack, problem solved, impact"
          />
        </label>

        <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
          <div className="space-y-2">
            <p className="text-sm font-medium text-slate-800">
              Participated in Entrepreneurial Development Programs, Startup Pitches, or Bootcamps?
            </p>
            <div className="flex gap-3">
              {["yes", "no"].map((value) => (
                <label
                  key={value}
                  className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-medium text-slate-800 shadow-sm hover:bg-slate-100"
                >
                  <input
                    type="radio"
                    name="entrepreneurship"
                    value={value}
                    checked={formData.entrepreneurshipPrograms === value}
                    onChange={(e) => updateField("entrepreneurshipPrograms", e.target.value as FormState["entrepreneurshipPrograms"])}
                    className="h-4 w-4 border-slate-300 text-slate-800 focus:ring-slate-400"
                  />
                  {value === "yes" ? "Yes" : "No"}
                </label>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <p className="text-sm font-medium text-slate-800">Engaged in other skill building activities?</p>
            <div className="flex gap-3">
              {["yes", "no"].map((value) => (
                <label
                  key={value}
                  className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-medium text-slate-800 shadow-sm hover:bg-slate-100"
                >
                  <input
                    type="radio"
                    name="otherSkills"
                    value={value}
                    checked={formData.otherSkillBuilding === value}
                    onChange={(e) => updateField("otherSkillBuilding", e.target.value as FormState["otherSkillBuilding"])}
                    className="h-4 w-4 border-slate-300 text-slate-800 focus:ring-slate-400"
                  />
                  {value === "yes" ? "Yes" : "No"}
                </label>
              ))}
            </div>
          </div>
        </div>

        <label className="flex flex-col gap-2 text-sm font-medium text-slate-800">
          If yes, list programs and key takeaways
          <textarea
            rows={3}
            value={formData.entrepreneurshipDetails}
            onChange={(e) => updateField("entrepreneurshipDetails", e.target.value)}
            className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-base text-slate-900 shadow-sm focus:border-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-200"
            placeholder="Program name, organizer, learnings"
          />
        </label>

        <label className="flex flex-col gap-2 text-sm font-medium text-slate-800">
          Other skill-building activities (e.g., AWS Skill Builder, Infosys Springboard)
          <textarea
            rows={3}
            value={formData.otherSkillDetails}
            onChange={(e) => updateField("otherSkillDetails", e.target.value)}
            className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-base text-slate-900 shadow-sm focus:border-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-200"
            placeholder="Platform, course, completion status"
          />
        </label>

        <label className="flex flex-col gap-2 text-sm font-medium text-slate-800">
          Special tech or non-tech skills you are confident about
          <textarea
            rows={2}
            value={formData.specialSkills}
            onChange={(e) => updateField("specialSkills", e.target.value)}
            className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-base text-slate-900 shadow-sm focus:border-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-200"
          />
        </label>

        <label className="flex flex-col gap-2 text-sm font-medium text-slate-800">
          Significant awards or achievements
          <textarea
            rows={2}
            value={formData.awards}
            onChange={(e) => updateField("awards", e.target.value)}
            className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-base text-slate-900 shadow-sm focus:border-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-200"
          />
        </label>
      </div>
    </Section>
  );
}
