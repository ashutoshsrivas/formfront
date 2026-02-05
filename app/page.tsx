"use client";

import { FormEvent, useMemo, useState } from "react";
import { AcademicPerformanceSection } from "./components/AcademicPerformanceSection";
import { BasicInfoSection } from "./components/BasicInfoSection";
import { ExposureSection } from "./components/ExposureSection";
import { PlanSection } from "./components/PlanSection";
import { ProfilesSection } from "./components/ProfilesSection";
import { ProgrammingSkillsSection } from "./components/ProgrammingSkillsSection";
import { ResumeUpload } from "./components/ResumeUpload";
import { StatusMessage } from "./components/StatusMessage";
import {
  createInitialFormState,
  FormState,
  ProgrammingLevel,
  UpdateField,
} from "./types/form";

type Status = { type: "idle" | "success" | "error"; message: string };

export default function Home() {
  const apiBase = process.env.NEXT_PUBLIC_API_BASE || "http://localhost:4000";

  const [formData, setFormData] = useState<FormState>(() => createInitialFormState());
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<Status>({ type: "idle", message: "" });

  const requiredMissing = useMemo(() => {
    const required = [
      ["email", formData.email],
      ["Full name", formData.fullName],
      ["University", formData.university],
      ["Enrollment number", formData.enrollmentNumber],
      ["Contact number", formData.contactNumber],
      ["CGPA", formData.cgpa],
      ["Plan after graduation", formData.planAfterGraduation],
      ["Motivation", formData.motivation],
    ];

    return required
      .filter(([, value]) => !String(value || "").trim())
      .map(([label]) => label as string);
  }, [formData]);

  const updateField: UpdateField = (key, value) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const toggleDevice = (device: string) => {
    setFormData((prev) => {
      const hasDevice = prev.appleDevices.includes(device);
      return {
        ...prev,
        appleDevices: hasDevice
          ? prev.appleDevices.filter((d) => d !== device)
          : [...prev.appleDevices, device],
      };
    });
  };

  const updateProgrammingSkill = (key: string, level: ProgrammingLevel) => {
    setFormData((prev) => ({
      ...prev,
      programmingSkills: { ...prev.programmingSkills, [key]: level },
    }));
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setStatus({ type: "idle", message: "" });

    if (requiredMissing.length) {
      setStatus({
        type: "error",
        message: `Please fill the following required fields: ${requiredMissing.join(", ")}.`,
      });
      return;
    }

    const payload = {
      email: formData.email.trim(),
      fullName: formData.fullName.trim(),
      university: formData.university,
      enrollmentNumber: formData.enrollmentNumber.trim(),
      contactNumber: formData.contactNumber.trim(),
      appleDevices: formData.appleDevices,
      cgpa: formData.cgpa,
      activeBacklogs: formData.activeBacklogs,
      programmingSkills: {
        ...formData.programmingSkills,
        other: formData.otherProgrammingLevel,
        otherName: formData.otherProgrammingName.trim(),
      },
      otherLanguages: formData.otherLanguages.trim(),
      leetcodeRank: formData.leetcodeRank.trim(),
      leetcodeLink: formData.leetcodeLink.trim(),
      hackerrankRank: formData.hackerrankRank.trim(),
      hackerrankLink: formData.hackerrankLink.trim(),
      githubLink: formData.githubLink.trim(),
      hackathonsParticipated: formData.hackathonsParticipated,
      hackathonDetails: formData.hackathonDetails.trim(),
      projectsDone: formData.projectsDone,
      projectDetails: formData.projectDetails.trim(),
      entrepreneurshipPrograms: formData.entrepreneurshipPrograms,
      entrepreneurshipDetails: formData.entrepreneurshipDetails.trim(),
      otherSkillBuilding: formData.otherSkillBuilding,
      otherSkillDetails: formData.otherSkillDetails.trim(),
      specialSkills: formData.specialSkills.trim(),
      awards: formData.awards.trim(),
      planAfterGraduation: formData.planAfterGraduation || "",
      planOther: formData.planOther.trim(),
      motivation: formData.motivation.trim(),
    };

    const formDataPayload = new FormData();
    Object.entries(payload).forEach(([key, value]) => {
      if (Array.isArray(value)) {
        formDataPayload.append(key, JSON.stringify(value));
      } else if (typeof value === "object" && value !== null) {
        formDataPayload.append(key, JSON.stringify(value));
      } else {
        formDataPayload.append(key, String(value ?? ""));
      }
    });

    if (formData.resumeFile) {
      formDataPayload.append("resume", formData.resumeFile);
    }

    setIsSubmitting(true);
    try {
      const response = await fetch(`${apiBase}/api/applications`, {
        method: "POST",
        body: formDataPayload,
      });

      if (!response.ok) {
        const errorBody = await response.json().catch(() => ({}));
        const message = errorBody.message || "Failed to submit. Please try again.";
        throw new Error(message);
      }

      setStatus({ type: "success", message: "Application submitted successfully." });
      setFormData(createInitialFormState());
    } catch (error) {
      console.error(error);
      setStatus({
        type: "error",
        message: error instanceof Error ? error.message : "Submission failed. Please retry.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 text-slate-900">
      <div className="mx-auto max-w-5xl px-6 py-10">
        <header className="mb-8 space-y-2 text-center">
          <p className="text-sm uppercase tracking-[0.2em] text-slate-500">2026-27 Cohort</p>
          <h1 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
            Application for iOS Student Developer Program
          </h1>
          <p className="text-base text-slate-600 sm:text-lg">
            Fill in the details below. Fields marked with * are required.
          </p>
        </header>

        <form
          onSubmit={handleSubmit}
          className="space-y-8 rounded-3xl bg-white p-6 shadow-xl shadow-slate-200/60 ring-1 ring-slate-200 sm:p-8"
        >
          <BasicInfoSection formData={formData} updateField={updateField} toggleDevice={toggleDevice} />
          <AcademicPerformanceSection formData={formData} updateField={updateField} />
          <ProgrammingSkillsSection
            formData={formData}
            updateField={updateField}
            updateProgrammingSkill={updateProgrammingSkill}
          />
          <ProfilesSection formData={formData} updateField={updateField} />
          <ExposureSection formData={formData} updateField={updateField} />
          <ResumeUpload formData={formData} updateField={updateField} />
          <PlanSection formData={formData} updateField={updateField} />

          {status.type !== "idle" ? <StatusMessage type={status.type} message={status.message} /> : null}

          <div className="flex items-center justify-end gap-3">
            <p className="text-sm text-slate-600">Data will be saved to MySQL on localhost.</p>
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-900/10 transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:bg-slate-500"
            >
              {isSubmitting ? "Submitting..." : "Submit application"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
