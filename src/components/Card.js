import "./Card.css";

export default function Card({
  name,
  price,
  time,
  description,
  handleCardButtonClick,
}) {
  return (
    <div className="cardCollection__div_lg">
      <div className="cardHeader__div_lg">
        <h3>{name}</h3>
        <button className="cardButton__btn_lg" onClick={handleCardButtonClick}>
          "Add+"
        </button>
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
