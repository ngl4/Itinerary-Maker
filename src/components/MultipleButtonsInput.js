/* eslint-disable */
import "./MultipleButtonsInput.css";
export default function MultipleButtonsInput({
  buttonOptions,
  handleClick,
  className,
  selectedPrice,
}) {
  return (
    <>
      {buttonOptions.map((name, index) => {
        return (
          <button
            key={index}
            onClick={() => handleClick(name, index)}
            className={
              className + ` ` + `${selectedPrice === name ? "selected" : ""}`
            }
          >
            {name}
          </button>
        );
      })}
    </>
  );
}
