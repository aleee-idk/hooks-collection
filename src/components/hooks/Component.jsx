import React from "react";
import { PropTypes } from "prop-types";

const Component = (props) => {
  return (
    <section id={props.id}>
      <h2 className="hook-title">{props.title}</h2>
      <p className="hook-description">{props.description}</p>
      <code className="hook-code">{props.code}</code>
      <div className="hook-example">{props.example}</div>
    </section>
  );
};

Component.propTypes = {
  id: PropTypes.string.isRequired,
  description: PropTypes.node.isRequired,
  code: PropTypes.node.isRequired,
  example: PropTypes.node.isRequired,
};

export default Component;
