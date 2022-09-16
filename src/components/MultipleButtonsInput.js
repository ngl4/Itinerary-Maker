import "./MultipleButtonsInput.css";
export default function MultipleButtonsInput({
  title,
  buttonOptions,
  handleClick,
  className,
  selectedPrice
}) {
  return (
    <>
      <span>{title}</span>
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
