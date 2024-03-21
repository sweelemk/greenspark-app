import { useEffect, useRef, useState } from "react";
import { Card } from "../../components";
import { TCard } from "../../types";
import "./greenspark.scss";
import { getWidgets } from "../../services/product.service";

const Greenspark = () => {
  const isMounted = useRef(false);
  const [widgets, setWidgets] = useState<TCard[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!isMounted.current) {
      const getData = async () => {
        try {
          const response = await getWidgets();
          setWidgets(response);
          setLoading(false);
        } catch (e) {
          console.error(e);
          setError("Failed to fetch data");
          setLoading(false);
        }
      };

      getData();
      isMounted.current = true;
    }
  }, []);

  const changeActivity = (item: TCard) => {
    const updatedItems = widgets.map((widget) => {
      if (widget.id === item.id) {
        return { ...item, active: !item.active };
      } else {
        return { ...widget, active: false };
      }
    });

    setWidgets(updatedItems);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="greenspark-widget">
      <div className="greenspark-widget__box">
        <div className="greenspark-widget__header">
          <h3>Per product widgets</h3>
        </div>
        <div className="cards-wrapper">
          {widgets.map((card) => (
            <Card
              key={card.id}
              card={card}
              onChangeActivity={(item) => changeActivity(item)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Greenspark;
