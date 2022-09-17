/* eslint-disable */
import { useState, useEffect } from "react";
import "./App.css";
import DropdownInput from "./components/DropdownInput";
import data from "./data.json";
import { TimeOptions, PriceOptions } from "./options/Options";
import MultipleButtonsInput from "./components/MultipleButtonsInput";
import Card from "./components/Card";

function App() {
  const [targetTime, setTargetTime] = useState(0);
  const [currTime, setCurrTime] = useState(0);
  const [targetPrice, setTargetPrice] = useState(0);
  const [selectedPrice, setSelectedPrice] = useState("");
  const [availableAttractions, setAvailableAttractions] = useState(
    data.attractions
  );
  const [currentItinerary, setCurrentItinerary] = useState([]);

  useEffect(() => {
    const updateAttractionsByPrice = (price) => {
      const matchingPriceAttractions = availableAttractions.filter(
        (attraction) => attraction.price === price
      );
      const otherAttractions = availableAttractions.filter(
        (attraction) => attraction.price !== price
      );
      const updatedAttractionsByPrice = [
        ...matchingPriceAttractions,
        ...otherAttractions,
      ];
      setAvailableAttractions(updatedAttractionsByPrice);
    };
    updateAttractionsByPrice(targetPrice);
  }, [targetPrice]);

  const handleChangeHours = (e) => {
    setTargetTime(e.target.value);
  };

  const handlePriceClicked = (priceText, priceValue) => {
    setTargetPrice(priceValue);
    setSelectedPrice(priceText);
  };

  const addItinerary = (place) => {
    const found = availableAttractions.find(
      (attraction) => attraction.name === place
    );

    //update current Time
    const updatedTime = currTime + found.time;
    setCurrTime(updatedTime);

    //update Available attractions
    const updatedAvailableAttractions = availableAttractions.filter(
      (attraction) => attraction.name !== place
    );
    setAvailableAttractions(updatedAvailableAttractions);

    //update current itinerary attractions
    const updatedItinerary = [found, ...currentItinerary];
    setCurrentItinerary(updatedItinerary);
  };

  const removeItinerary = (place) => {
    const found = currentItinerary.find(
      (attraction) => attraction.name === place
    );

    //update current Time
    const updatedTime = currTime - found.time;
    setCurrTime(updatedTime);

    //update current itinerary attractions
    const updatedItinerary = currentItinerary.filter(
      (attraction) => attraction.name !== place
    );
    setCurrentItinerary(updatedItinerary);

    //update Available attractions
    const updatedAvailableAttractions = [found, ...availableAttractions];
    setAvailableAttractions(updatedAvailableAttractions);
  };
  return (
    <div>
      <h1>Welcome to Paris</h1>
      <header>
        <span>
          <DropdownInput
            handleChange={handleChangeHours}
            title="target Amount of Time: "
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
          <strong>Current Time:</strong>{" "}
          {currTime <= Number(targetTime) ? (
            currTime
          ) : (
            <span style={{ color: "red", fontWeight: "bold" }}>{currTime}</span>
          )}{" "}
          <strong>Target Time:</strong>{" "}
          <span style={{ color: "green" }}>{targetTime}</span>
        </span>
      </header>
      <hr />
      <main className="mainCardCollection__main_lg">
        <div>
          <h2>Available Attractions</h2>
          {availableAttractions.map((place) => {
            {
              /* User unable to add attractions if the currTime is larger than the target time */
            }
            return (
              <Card
                key={place.name}
                name={place.name}
                time={place.time}
                price={PriceOptions[place.price]}
                description={place.description}
                handleCardButtonClick={addItinerary}
                buttonName="Add+"
                disabled={
                  Number(targetTime) !== 0 && Number(targetTime) > currTime
                    ? false
                    : true
                }
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
