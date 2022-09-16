import { useState, useEffect } from "react";
import "./App.css";
import DropdownInput from "./components/DropdownInput";
import data from "./data.json";
import { TimeOptions, PriceOptions } from "./options/Options";
import MultipleButtonsInput from "./components/MultipleButtonsInput";
import Card from "./components/Card";

function App() {
  const [totalTime, setTotalTime] = useState(0);
  const [targetPrice, setTargetPrice] = useState(0);
  const [availableAttractions, setAvailableAttractions] = useState(
    data.attractions
  );
  const [currentItinerary, setCurrentItinerary] = useState([]);

  useEffect(() => {
    console.log(data);
  }, []);

  const handleChangeHours = (e) => {
    setTotalTime(e.target.value);
  };
  const handlePriceClicked = (priceValue) => {
    setTargetPrice(priceValue);
  };
  const handleCardButtonClick = () => {
    console.log("click");
  };
  return (
    <div>
      <h1>Welcome to Paris</h1>
      <header>
        <span>
          <DropdownInput
            handleChange={handleChangeHours}
            title="Total Amount of Time: "
            options={TimeOptions}
          />
        </span>
        <span className="price__span_lg">
          <MultipleButtonsInput
            title="Price: "
            buttonOptions={PriceOptions}
            handleClick={handlePriceClicked}
            customButtonStyling="multiple__button_lg"
          />
        </span>
        {/* <button onClick={() => console.log(totalTime, targetPrice)}>
          submit
        </button> */}
      </header>
      <hr />
      <main className="mainCardCollection__main_lg">
        <div>
          <h2>Available Attractions</h2>
          {console.log(data.attractions)}
          {availableAttractions.map((place, index) => {
            return (
              <Card
                key={index}
                name={place.name}
                time={place.time}
                price={PriceOptions[place.price]}
                description={place.description}
                handleCardButtonClick={handleCardButtonClick}
              />
            );
          })}
        </div>
        <div className="itineraryCollection__div_lg">
          <h2>Current Itinerary</h2>
          {data.attractions.map((place, index) => {
            return (
              <Card
                key={index}
                name={place.name}
                time={place.time}
                price={place.price}
                description={place.description}
                handleCardButtonClick={handleCardButtonClick}
              />
            );
          })}
        </div>
      </main>
    </div>
  );
}

export default App;
