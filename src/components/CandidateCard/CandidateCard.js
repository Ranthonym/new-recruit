import React from "react";

import classes from "./CandidateCard.module.css";

const CandidateCard = ({ candidate }) => {
  return (
    <div className={classes.CandidateCard}>
      <h2 className={classes.Name}>
        {candidate.first_name} {candidate.last_name}
      </h2>
      <p>{candidate.email}</p>
    </div>
  );
};

export default CandidateCard;
