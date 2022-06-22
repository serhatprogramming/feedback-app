import PropTypes from "prop-types";

function Card({ children, reverse }) {
  return <div className={`card ${reverse && "reverse"}`}>{children}</div>;
}

Card.defaultProps = {
  reverse: false,
};

Card.propTypes = {
  reverse: PropTypes.bool,
  children: PropTypes.node,
};

export default Card;
