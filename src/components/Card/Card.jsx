import "./Card.css";

const Card = ({ children, border }) => {
  return (
    <section className={border ? "card card--border" : "card"}>
      {children}
    </section>
  );
};

export default Card;
