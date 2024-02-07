import Icon from '../Icon/Icon'

export interface IconButtonProps
  extends React.HTMLAttributes<HTMLButtonElement> {
  iconName: string
}

export default function IconButton({ iconName, ...other }: IconButtonProps) {
  return (
    <button
      {...other}
      className={`cursor-pointer transition-colors aspect-square flex justify-center items-center p-1 ${other.className}`}
    >
      <Icon name={iconName} />
    </button>
  )
}
