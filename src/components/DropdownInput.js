export default function DropdownInput({ title, options, handleChange }) {
  return (
    <>
      <span>{title}</span>
      <select onChange={handleChange}>
        {options.map((time) => {
          return (
            <option key={time} value={time}>
              {time} {time <= 1 ? "hour" : "hours"}
            </option>
          );
        })}
      </select>
    </>
  );
}
