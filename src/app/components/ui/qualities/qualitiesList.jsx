import React from "react";
import PropTypes from "prop-types";
import Quality from "./quality";

const QualitiesList = ({ qualitiesId }) => {
  //console.log(qualitiesId); // qualities array
  return (
    <>
      {qualitiesId.map((id) => (
        <Quality key={id} id={id} />
      ))}
    </>
  );
};

QualitiesList.propTypes = {
  qualitiesId: PropTypes.array
};

export default QualitiesList;
