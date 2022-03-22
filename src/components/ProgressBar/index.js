import React from "react";
import propTypes from "prop-types";

export default function ProgressBar({ title, value, color }) {
  return (
    <>
      <h4 className="small font-weight-bold">
        {title ?? "Title progress bar"}{" "}
        <span className="float-right">
          {value === 100 ? "Complete!" : `${value}%`}
        </span>
      </h4>
      <div className="progress mb-4">
        <div
          className={`progress-bar bg-${color}`}
          role="progressbar"
          style={{ width: `${value}%` }}
          aria-valuenow={value}
          aria-valuemin={0}
          aria-valuemax={100}
        />
      </div>
    </>
  );
}

ProgressBar.propTypes = {
  title: propTypes.string.isRequired,
  value: propTypes.number.isRequired,
  color: propTypes.string.isRequired,
};
