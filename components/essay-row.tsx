"use client";

import { Tag } from "./tag";

type EssayRowProps = {
  date: string;
  title: string;
  tags?: string[];
  readingTime?: string;
  onClick?: () => void;
};

export function EssayRow({
  date,
  title,
  tags,
  readingTime,
  onClick,
}: EssayRowProps) {
  return (
    <div
      onClick={onClick}
      className="group border-rule hover:bg-bg-sunken grid cursor-pointer grid-cols-[110px_1fr_auto] items-center border-b px-4 py-3 transition-colors"
    >
      <span className="text-ink-3 font-mono text-xs">{date}</span>
      <div className="flex flex-col gap-1">
        <span className="font-sans text-base font-medium">{title}</span>
        {(tags?.length || readingTime) && (
          <div className="flex flex-wrap items-center gap-1.5">
            {tags?.map((tag) => (
              <Tag key={tag} label={tag} />
            ))}
            {readingTime && (
              <span className="text-ink-4 font-mono text-[0.6875rem]">
                {readingTime}
              </span>
            )}
          </div>
        )}
      </div>
      <span className="text-ochre opacity-0 transition-opacity group-hover:opacity-100">
        →
      </span>
    </div>
  );
}
