type StatusMessageProps = {
  type: "success" | "error";
  message: string;
};

export function StatusMessage({ type, message }: StatusMessageProps) {
  const styles =
    type === "success"
      ? "border-emerald-200 bg-emerald-50 text-emerald-800"
      : "border-rose-200 bg-rose-50 text-rose-800";

  return (
    <div className={`rounded-xl border px-4 py-3 text-sm ${styles}`}>
      {message}
    </div>
  );
}
