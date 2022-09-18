export default function DropdownInput({ options, optionsSuffix, handleChange }) {
  return (
    <select onChange={handleChange}>
      {options.map((item) => {
        return (
          <option key={item} value={item}>
            {item} {item <= 1 ? optionsSuffix : optionsSuffix + "s"}
          </option>
        );
      })}
    </select>
  );
}
