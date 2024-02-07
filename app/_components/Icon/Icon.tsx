export interface IconProps {
  className?: string
  name: string
}

export default function Icon({ name, className }: IconProps) {
  return (
    <span className={`material-symbols-outlined ${className ?? ''}`}>
      {name}
    </span>
  )
}
