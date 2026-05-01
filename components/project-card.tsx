"use client";

interface ProjectCardProps {
  name: string;
  status: "live" | "draft" | "archive";
  version: string;
  blurb: string;
  tags: string[];
  onClick?: () => void;
}

const STATUS_CLASSES: Record<ProjectCardProps["status"], string> = {
  live: "text-status-live border-status-live",
  draft: "text-status-draft border-status-draft",
  archive: "text-status-archive border-status-archive",
};

export function ProjectCard({
  name,
  status,
  version,
  blurb,
  tags,
  onClick,
}: ProjectCardProps) {
  return (
    <div
      onClick={onClick}
      className="border-rule bg-bg-raised hover:border-rule-strong cursor-pointer rounded-md border p-5 transition-colors"
    >
      <div className="mb-3 flex items-start justify-between">
        <div className="flex items-center">
          <span
            className={`rounded-xs border px-1.5 py-0.5 font-mono text-[0.625rem] tracking-[0.04em] uppercase ${STATUS_CLASSES[status]}`}
          >
            {status}
          </span>
          <span className="text-ink-3 ml-2 font-mono text-[0.6875rem]">
            {version}
          </span>
        </div>
      </div>
      <h3 className="mb-2 font-sans text-[1.375rem] font-semibold tracking-[-0.01em]">
        {name}
      </h3>
      <p className="text-ink-2 mb-4 font-serif text-[0.9375rem] leading-[1.55]">
        {blurb}
      </p>
      <div className="flex flex-wrap gap-1.5">
        {tags.map((tag) => (
          <span
            key={tag}
            className="border-rule text-ink-2 rounded-xs border px-2 py-0.5 font-mono text-[0.6875rem] font-medium"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
