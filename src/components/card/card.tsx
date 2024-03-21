import { useState } from "react";
import { Colors, TCard } from "../../types";
import { Badge, Checkbox, Switch, Tooltip } from "../common";
import { GreensparkIcon } from "../icons";

import "./card.scss";

const colorPairs = {
  green: {
    bg: "--green",
    color: "--white",
  },
  blue: {
    bg: "--blue",
    color: "--white",
  },
  beige: {
    bg: "--beige",
    color: "--green",
  },
  white: {
    bg: "--white",
    color: "--green",
  },
  black: {
    bg: "--black",
    color: "--white",
  },
};

interface ICard {
  card: TCard;
  onChangeActivity: (item: TCard) => void;
}

const Card = ({ card, onChangeActivity }: ICard) => {
  const { action, amount, selectedColor, type, linked, active } = card;

  const [isLinked, setLinked] = useState(linked);
  const [color, setColor] = useState(selectedColor);

  const bgColor = `var(${colorPairs[color].bg})`;
  const textColor = `var(${colorPairs[color].color})`;

  return (
    <div className="card">
      <div
        className="card-view"
        style={{
          backgroundColor: bgColor,
          color: textColor,
        }}
      >
        <div className="icon">
          <GreensparkIcon />
        </div>
        <div className="card-view__textbox">
          <div className="name">{`This product ${action}`}</div>
          <div className="sub-name">{`${amount} ${type}`}</div>
        </div>
      </div>
      <div className="card__settings">
        <div className="card__settings-item">
          <div className="label">
            Link to Public Profile{" "}
            <Tooltip
              link="/profile"
              text="This widget links directly to your public profile so that you can
          easily share your impact with your customers. Turn it off here if you
          do not want the badge to link to it."
            />
          </div>
          <div className="value">
            <Checkbox
              checked={isLinked}
              onChange={() => setLinked((prev) => !prev)}
            />
          </div>
        </div>
        <div className="card__settings-item">
          <div className="label">Badge Color</div>
          <div className="value">
            <div className="badge-list">
              {Object.keys(colorPairs).map((colorItem) => (
                <Badge
                  key={colorItem}
                  color={colorItem as Colors}
                  active={colorItem === color}
                  onColorSelect={(color) => setColor(color)}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="card__settings-item">
          <div className="label">Activate Badge</div>
          <div className="value">
            <Switch
              active={active}
              onActivityChange={() => onChangeActivity(card)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
