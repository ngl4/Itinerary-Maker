/* eslint-disable */
import "./MultipleButtonsInput.css";
import Button from "../genericComponents/Button";
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
          <Button
            key={index}
            handleClick={() => handleClick(name, index)}
            className={
              className + ` ` + `${selectedPrice === name ? "selected" : ""}`
            }
            text={name}
          />
        );
      })}
    </>
  );
}
