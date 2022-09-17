import "./Card.css";
import Button from "../genericComponents/Button";

export default function Card({
  name,
  price,
  time,
  description,
  handleCardButtonClick,
  buttonName,
  disabled
}) {
  return (
    <div className="cardCollection__div_lg">
      <div className="cardHeader__div_lg">
        <h3>{name}</h3>
        <Button
          className="cardButton__btn_lg"
          handleClick={() => handleCardButtonClick(name)}
          disabled={disabled}
          text={buttonName}
        />
      </div>
      <div className="cardTimePrice__div_lg">
        <span>{price}</span>
        <span>{time} hours</span>
      </div>
      <div>
        <p>{description}</p>
      </div>
    </div>
  );
}
