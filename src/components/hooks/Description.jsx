import React from "react";
import { PropTypes } from "prop-types";

const Description = (props) => {
  return (
    <section id={props.id}>
      <h2 className="hook-title">
        <a href={props.link} target="_blank" rel="noreferrer">
          {props.title}
        </a>
      </h2>
      <p className="hook-description">{props.description}</p>
      <code className="hook-code">{props.code}</code>
    </section>
  );
};

Description.propTypes = {
  id: PropTypes.string.isRequired,
  description: PropTypes.node.isRequired,
  code: PropTypes.node.isRequired,
};

export default Description;
