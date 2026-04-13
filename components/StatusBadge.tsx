import { AppStatus } from "@/lib/data";

type Props = {
  status: AppStatus;
};

export default function StatusBadge({ status }: Props) {
  if (status === "live") {
    return (
      <span className="inline-flex items-center gap-1.5 rounded-full bg-accent-bg px-3 py-0.5 font-sans text-[0.8125rem] font-medium uppercase tracking-wider text-accent">
        <span className="h-2 w-2 rounded-full bg-emerald-500" />
        Live
      </span>
    );
  }

  return (
    <span className="inline-flex items-center rounded-full bg-stone-100 px-3 py-0.5 font-sans text-[0.8125rem] font-medium uppercase tracking-wider text-stone-500">
      In Development
    </span>
  );
}
