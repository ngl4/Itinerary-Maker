/* eslint-disable */
import { useState } from "react";
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

  //TODO: Accumulated Time (inc Current Time)

  const handleChangeHours = (e) => {
    setTotalTime(e.target.value);
  };

  const handlePriceClicked = (priceText, priceValue) => {
    setTargetPrice(priceValue);
    setSelectedPrice(priceText);
  };

  const addItinerary = (place) => {
    const found = availableAttractions.find(
      (attraction) => attraction.name === place
    );

    const updatedAvailableAttractions = availableAttractions.filter(
      (attraction) => attraction.name !== place
    );

    const updatedItinerary = [found, ...currentItinerary];

    setAvailableAttractions(updatedAvailableAttractions);
    setCurrentItinerary(updatedItinerary);
  };

  const removeItinerary = (place) => {
    const found = currentItinerary.find(
      (attraction) => attraction.name === place
    );

    const updatedItinerary = currentItinerary.filter(
      (attraction) => attraction.name !== place
    );

    const updatedAvailableAttractions = [found, ...availableAttractions];

    setAvailableAttractions(updatedAvailableAttractions);
    setCurrentItinerary(updatedItinerary);
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
            selectedPrice={selectedPrice}
          />
        </span>
        <span className="price__span_lg">
          <strong>Current Time:</strong> {currItineraryTime}{" "}
          <strong>Target Time:</strong> {totalTime}
        </span>
      </header>
      <hr />
      <main className="mainCardCollection__main_lg">
        <div>
          <h2>Available Attractions</h2>
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
