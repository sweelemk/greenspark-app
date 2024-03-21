import { GreensparkIcon } from "./greenspark";
import { TooltipIcon } from "./tooltip";

const IconComponents = {
  greenspark: GreensparkIcon,
  tooltip: TooltipIcon,
} as const;

export type IconName = keyof typeof IconComponents;

type IconProps = {
  name: IconName;
};

const Icon: React.FC<IconProps> = ({ name, ...props }) => {
  const Components = IconComponents[name];

  return <Components {...props} />;
};

export default Icon;
