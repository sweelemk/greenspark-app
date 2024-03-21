import cn from "classnames";
import "./badge.scss";
import { Colors } from "../../../types";

interface IBadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  active: boolean;
  color: Colors;
  onColorSelect: (color: Colors) => void;
}

const Badge = ({
  active,
  color,
  onColorSelect,
  className,
  ...props
}: IBadgeProps) => {
  const classNames = cn(
    "badge",
    {
      "badge-active": active,
    },
    className
  );
  return (
    <div
      className={classNames}
      onClick={() => onColorSelect(color)}
      {...props}
      style={{ backgroundColor: `var(--${color})` }}
    />
  );
};

export default Badge;
