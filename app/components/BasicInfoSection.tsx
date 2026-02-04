import { FormState, UpdateField } from "../types/form";
import { Section } from "./Section";

type Props = {
  formData: FormState;
  updateField: UpdateField;
  toggleDevice: (device: string) => void;
};

export function BasicInfoSection({ formData, updateField, toggleDevice }: Props) {
  return (
    <Section
      title="Basic Information"
      description="Eligibility and shortlisting rely on these responses."
      badge="Required"
    >
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <label className="flex flex-col gap-1 text-sm font-medium text-slate-800">
          Email*
          <input
            type="email"
            required
            value={formData.email}
            onChange={(e) => updateField("email", e.target.value)}
            className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-base text-slate-900 shadow-sm focus:border-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-200"
          />
        </label>

        <label className="flex flex-col gap-1 text-sm font-medium text-slate-800">
          Full name*
          <input
            type="text"
            required
            value={formData.fullName}
            onChange={(e) => updateField("fullName", e.target.value)}
            className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-base text-slate-900 shadow-sm focus:border-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-200"
          />
        </label>

        <label className="flex flex-col gap-1 text-sm font-medium text-slate-800">
          University*
          <select
            value={formData.university}
            onChange={(e) => updateField("university", e.target.value)}
            className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-base text-slate-900 shadow-sm focus:border-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-200"
          >
            <option>Graphic Era Deemed to be University</option>
            <option>Graphic Era Hill University</option>
          </select>
        </label>

        <label className="flex flex-col gap-1 text-sm font-medium text-slate-800">
          Enrollment Number / Student ID*
          <input
            type="text"
            required
            value={formData.enrollmentNumber}
            onChange={(e) => updateField("enrollmentNumber", e.target.value)}
            className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-base text-slate-900 shadow-sm focus:border-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-200"
          />
        </label>

        <label className="flex flex-col gap-1 text-sm font-medium text-slate-800">
          Contact Number (Mobile)*
          <input
            type="tel"
            required
            value={formData.contactNumber}
            onChange={(e) => updateField("contactNumber", e.target.value)}
            className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-base text-slate-900 shadow-sm focus:border-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-200"
          />
        </label>
      </div>

      <div className="space-y-2">
        <p className="text-sm font-medium text-slate-800">Apple devices you use or are familiar with</p>
        <div className="flex flex-wrap gap-3">
          {["iPhone", "MacBook", "iPad", "Mac"].map((device) => (
            <label
              key={device}
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-medium text-slate-800 shadow-sm hover:bg-slate-100"
            >
              <input
                type="checkbox"
                checked={formData.appleDevices.includes(device)}
                onChange={() => toggleDevice(device)}
                className="h-4 w-4 rounded border-slate-300 text-slate-800 focus:ring-slate-400"
              />
              {device}
            </label>
          ))}
        </div>
      </div>
    </Section>
  );
}
