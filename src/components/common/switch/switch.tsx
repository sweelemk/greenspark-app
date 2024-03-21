import { useId } from "react";
import "./switch.scss";

interface ISwitchChange {
  active: boolean;
  onActivityChange: (currentState: boolean) => void;
}

const Switch = ({ active, onActivityChange }: ISwitchChange) => {
  const id = useId();
  return (
    <div className="switch">
      <input
        type="checkbox"
        id={id}
        checked={active}
        onChange={() => onActivityChange(active)}
      />
      <label htmlFor={id} />
    </div>
  );
};

export default Switch;
