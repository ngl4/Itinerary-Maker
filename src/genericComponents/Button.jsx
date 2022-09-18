export default function Button({
  className,
  handleClick,
  text,
  disabled,
}) {
  return (
    <button className={className} onClick={handleClick} disabled={disabled}>
      {text}
    </button>
  );
}
