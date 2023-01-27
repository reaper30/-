import React from "react";
import PropTypes from "prop-types";
import { useQualities } from "../../../hooks/useQualities";

const Quality = ({ id }) => {
  //console.log(id);
  const { getQuality } = useQualities();
  const qual = getQuality(id);
  console.log(qual);

  return <p className={"badge m-1 bg-" + qual.color}>{qual.name}</p>;
};
Quality.propTypes = {
  id: PropTypes.string
};

export default Quality;
import React from "react";
import PropTypes from "prop-types";
import { useQualities } from "../../../hooks/useQualities";
const Quality = ({ id }) => {
    const { getQuality } = useQualities();
    const { color, name } = getQuality(id);
    return (
        <span className={"badge m-1 bg-" + color}>
            {name}
        </span>
    );
};
Quality.propTypes = {
    id: PropTypes.string.isRequired
};

export default Quality;
