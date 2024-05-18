import { Fragment, useState } from "react";
import { MouseEvent } from "react";

interface ListGroupProps {
  items: string[];
  headline: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, headline, onSelectItem }: ListGroupProps) {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  //cities = [];
  //   if (cities.length === 0)
  //     return (
  //       <>
  //         <h1>Lists</h1>
  //         <p>No items found.</p>
  //       </>
  //     );

  // const msg = cities.length === 0 ? <p>No items found.</p> : null;

  //   const getMsg = () => {
  //     return cities.length === 0 ? <p>No items found.</p> : null;
  //   };

  const handleClick = (event: MouseEvent) => {
    {
      console.log(event);
    }
  };
  return (
    <Fragment>
      <h1>{headline}</h1>
      {items.length === 0 && <p>No items found.</p>}
      <ul className="list-group">
        {items.map((item, i) => (
          <li
            className={
              selectedIndex === i ? "list-group-item active" : "list-group-item"
            }
            key={i}
            onClick={() => {
              setSelectedIndex(i);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </Fragment>
  );
}

export default ListGroup;
