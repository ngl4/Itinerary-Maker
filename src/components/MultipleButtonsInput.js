export default function MultipleButtonsInput({
  title,
  buttonOptions,
  handleClick,
  customButtonStyling,
}) {
  return (
    <>
      <span>{title}</span>
      {buttonOptions.map((name, index) => {
        return (
          <button
            key={index}
            onClick={() => handleClick(index)}
            className={customButtonStyling}
          >
            {name}
          </button>
        );
      })}
    </>
  );
}
