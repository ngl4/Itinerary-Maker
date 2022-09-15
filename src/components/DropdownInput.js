export default function DropdownInput({ title, options, handleChange }) {
  return (
    <>
      <span>{title}</span>
      <select onChange={(e) => handleChange(e)}>
        {options.map((time, index) => {
          return (
            <option key={index} value={index + 1}>
              {time} {time === 1 ? "hour" : "hours"}
            </option>
          );
        })}
      </select>
    </>
  );
}
