export type ProgrammingLevel = "No Experience" | "Beginner" | "Medium" | "Advanced";

export const programmingLanguages = [
  { key: "c", label: "C" },
  { key: "cpp", label: "C++" },
  { key: "android", label: "Android" },
  { key: "swift", label: "Swift" },
  { key: "java", label: "Java" },
  { key: "python", label: "Python" },
  { key: "javascript", label: "JavaScript" },
  { key: "kotlin", label: "Kotlin" },
];

export const programmingLevels: ProgrammingLevel[] = [
  "No Experience",
  "Beginner",
  "Medium",
  "Advanced",
];

export type FormState = {
  email: string;
  fullName: string;
  university: string;
  enrollmentNumber: string;
  contactNumber: string;
  appleDevices: string[];
  cgpa: string;
  activeBacklogs: "none" | "1 backlog" | "2 or more backlogs";
  programmingSkills: Record<string, ProgrammingLevel>;
  otherProgrammingName: string;
  otherProgrammingLevel: ProgrammingLevel;
  leetcodeRank: string;
  leetcodeLink: string;
  hackerrankRank: string;
  hackerrankLink: string;
  githubLink: string;
  hackathonsParticipated: "yes" | "no";
  hackathonDetails: string;
  projectsDone: "yes" | "no";
  projectDetails: string;
  entrepreneurshipPrograms: "yes" | "no";
  entrepreneurshipDetails: string;
  otherSkillBuilding: "yes" | "no";
  otherSkillDetails: string;
  specialSkills: string;
  awards: string;
  planAfterGraduation:
    | "Job/Placement"
    | "Further studies"
    | "Entrepreneurship/New Venture or Startup"
    | "Other"
    | "";
  planOther: string;
  motivation: string;
  resumeFile: File | null;
};

export type UpdateField = <K extends keyof FormState>(key: K, value: FormState[K]) => void;

export function createInitialFormState(): FormState {
  const programmingSkills = programmingLanguages.reduce(
    (acc, lang) => ({ ...acc, [lang.key]: programmingLevels[0] }),
    {} as Record<string, ProgrammingLevel>,
  );

  return {
    email: "",
    fullName: "",
    university: "Graphic Era Deemed to be University",
    enrollmentNumber: "",
    contactNumber: "",
    appleDevices: [],
    cgpa: "",
    activeBacklogs: "none",
    programmingSkills,
    otherProgrammingName: "",
    otherProgrammingLevel: programmingLevels[0],
    leetcodeRank: "",
    leetcodeLink: "",
    hackerrankRank: "",
    hackerrankLink: "",
    githubLink: "",
    hackathonsParticipated: "no",
    hackathonDetails: "",
    projectsDone: "no",
    projectDetails: "",
    entrepreneurshipPrograms: "no",
    entrepreneurshipDetails: "",
    otherSkillBuilding: "no",
    otherSkillDetails: "",
    specialSkills: "",
    awards: "",
    planAfterGraduation: "",
    planOther: "",
    motivation: "",
    resumeFile: null,
  };
}
