import ListGroup from "./Component/ListGroup";
import Alert from "./Component/Alert";
import Button from "./Component/Button";
import Button1 from "./Component/button-trial";

function App() {
  let cities = ["Boston", "Chicago", "SFO", "Chico"];
  let heading = "cities";
  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  const handleClick = () => {
    console.log("clicked!!");
  };
  return (
    // <ListGroup
    //   items={cities}
    //   headline={heading}
    //   onSelectItem={handleSelectItem}
    // />
    // <div>
    //   <Alert>
    //     Hello <span>World</span>
    //   </Alert>
    // </div>
    <div>
      {
        /* <Button color="warning" onclicked={handleClick}>
        Dab na!!
      </Button> */ <Button1 color="primary" handleClick={handleClick}>
          New Button{" "}
        </Button1>
      }
    </div>
  );
}

export default App;
