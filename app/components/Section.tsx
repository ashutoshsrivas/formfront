import { ReactNode } from "react";

type SectionProps = {
  title: string;
  description?: string;
  badge?: string;
  children: ReactNode;
};

export function Section({ title, description, badge, children }: SectionProps) {
  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-lg font-semibold text-slate-900">{title}</p>
          {description ? (
            <p className="text-sm text-slate-600">{description}</p>
          ) : null}
        </div>
        {badge ? (
          <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-600">
            {badge}
          </span>
        ) : null}
      </div>
      {children}
    </section>
  );
}
