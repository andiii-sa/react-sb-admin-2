import React from "react";
import propTypes from "prop-types";

export default function CardBasic({ title, children }) {
  return (
    <>
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">
            {title ?? "Basic Card Example"}
          </h6>
        </div>
        <div className="card-body">{children}</div>
      </div>
    </>
  );
}

CardBasic.propTypes = {
  title: propTypes.string.isRequired,
};
