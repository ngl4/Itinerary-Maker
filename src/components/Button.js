export default function Button({
  text, 
  handleClick,
  customStyling
}) {
  return (
    <>
      <button className={customStyling} onClick={(e) => handleClick(e)}>{text}</button>
    </>
  );
}
