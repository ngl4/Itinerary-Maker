import Button from "./Button";
import "./Card.css";

export default function Card({
  name,
  price,
  time,
  description,
  handleCardButtonClick,
}) {
  return (
    <div className="cardCollection__div_lg" key={keyId}>
      <div className="cardHeader__div_lg">
        <h3>{name}</h3>
        <Button
          text="Add+"
          handleClick={handleCardButtonClick}
          customStyling="cardButton__btn_lg"
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
