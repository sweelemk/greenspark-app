import { TooltipIcon } from "../../icons";
import "./tooltip.scss";

interface ITooltipProps {
  text: string;
  link?: string;
}

const Tooltip = ({ text, link }: ITooltipProps) => {
  return (
    <span className="tooltip">
      <div className="tooltip-button">
        <TooltipIcon />
      </div>
      <div className="tooltip-container">
        <p>{text}</p>
        {link ? (
          <a href={link} className="link">
            View Public Profile
          </a>
        ) : null}
      </div>
    </span>
  );
};

export default Tooltip;
