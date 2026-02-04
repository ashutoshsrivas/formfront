import { FormState, UpdateField } from "../types/form";

const MAX_BYTES = 10 * 1024 * 1024; // 10MB
const allowedExtensions = [".pdf", ".doc", ".docx", ".txt"];

function getExtension(name: string) {
  const dot = name.lastIndexOf(".");
  return dot === -1 ? "" : name.slice(dot).toLowerCase();
}

export function ResumeUpload({ formData, updateField }: { formData: FormState; updateField: UpdateField }) {
  const currentName = formData.resumeFile?.name;
  return (
    <div className="space-y-2 rounded-xl border border-slate-200 bg-slate-50 p-4">
      <p className="text-sm font-medium text-slate-800">Upload resume (pdf, doc, docx, txt) — max 10MB</p>
      <input
        type="file"
        accept=".pdf,.doc,.docx,.txt,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,text/plain"
        onChange={(e) => {
          const file = e.target.files?.[0] || null;
          if (!file) {
            updateField("resumeFile", null);
            return;
          }
          const ext = getExtension(file.name);
          if (!allowedExtensions.includes(ext)) {
            alert("Invalid file type. Allowed: pdf, doc, docx, txt.");
            e.target.value = "";
            return;
          }
          if (file.size > MAX_BYTES) {
            alert("File is larger than 10MB. Choose a smaller file.");
            e.target.value = "";
            return;
          }
          updateField("resumeFile", file);
        }}
        className="block w-full text-sm text-slate-800 file:mr-4 file:rounded-md file:border-0 file:bg-slate-900 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-white hover:file:bg-slate-800"
      />
      {currentName ? <p className="text-xs text-slate-600">Selected: {currentName}</p> : null}
    </div>
  );
}
