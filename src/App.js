import { useState, useEffect } from "react";
import "./App.css";
import DropdownInput from "./components/DropdownInput";
import data from "./data.json";
import { TimeOptions, PriceOptions } from "./options/Options";
import MultipleButtonsInput from "./components/MultipleButtonsInput";
import Card from "./components/Card";

function App() {
  const [totalTime, setTotalTime] = useState(0);
  const [currItineraryTime, setCurrItineraryTime] = useState(0);
  const [targetPrice, setTargetPrice] = useState(0);
  const [selectedPrice, setSelectedPrice] = useState("");
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
  const handlePriceClicked = (priceText, priceValue) => {
    setTargetPrice(priceValue);
    setSelectedPrice(priceText);
  };
  const addItinerary = (place) => {
    let tempAvailableAttractions = [...availableAttractions];
    let tempItinerary = [...currentItinerary];

    const found = tempAvailableAttractions.find(
      (attraction) => attraction.name === place
    );
    const foundIndex = tempAvailableAttractions.findIndex(
      (attraction) => attraction.name === place
    );

    tempAvailableAttractions.splice(foundIndex, 1);

    tempItinerary.push(found);

    setCurrentItinerary(tempItinerary);
    setAvailableAttractions(tempAvailableAttractions);
  };
  const removeItinerary = (place) => {
    let tempAvailableAttractions = [...availableAttractions];
    let tempItinerary = [...currentItinerary];

    const found = tempItinerary.find((attraction) => attraction.name === place);
    const foundIndex = tempItinerary.findIndex(
      (attraction) => attraction.name === place
    );

    tempItinerary.splice(foundIndex, 1);

    tempAvailableAttractions.push(found);

    setCurrentItinerary(tempItinerary);
    setAvailableAttractions(tempAvailableAttractions);
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
            className="multiple__button_lg"
            selectedPrice = {selectedPrice}
          />
        </span>
        <span className="price__span_lg">
          <strong>Current Time:</strong> {currItineraryTime} <strong>Target Time:</strong>{" "}
          {totalTime}
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
          {availableAttractions.map((place) => {
            return (
              <Card
                key={place.name}
                name={place.name}
                time={place.time}
                price={PriceOptions[place.price]}
                description={place.description}
                handleCardButtonClick={addItinerary}
                buttonName="Add+"
              />
            );
          })}
        </div>
        <div className="itineraryCollection__div_lg">
          <h2>Current Itinerary</h2>
          {currentItinerary.map((place) => {
            return (
              <Card
                key={place.name}
                name={place.name}
                time={place.time}
                price={PriceOptions[place.price]}
                description={place.description}
                handleCardButtonClick={removeItinerary}
                buttonName="Remove-"
              />
            );
          })}
        </div>
      </main>
    </div>
  );
}

export default App;
