import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import qualityService from "../services/qualitiy.service";
import PropTypes from "prop-types";

const QualitiesContext = React.createContext();

export const useQualities = () => {
  return useContext(QualitiesContext);
};

export const QualityProvider = ({ children }) => {
  const [qualities, setQualities] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getQualitiesList();
  }, []);

  useEffect(() => {
    if (error !== null) {
      setError(error);
      toast(error);
    }
  }, [error]);

  function errorCatcher(error) {
    const { message } = error.response.data;
    setError(message);
  }

  const getQuality = (id) => {
    return qualities.find((q) => q._id === id);
  };

  async function getQualitiesList() {
    try {
      const { content } = await qualityService.get();
      setQualities(content);
      setLoading(false);
    } catch (error) {
      errorCatcher(error);
    }
  }

  return (
    <QualitiesContext.Provider value={{ getQuality, qualities }}>
      {!isLoading ? children : <h1>Qualities Loading</h1>}
    </QualitiesContext.Provider>
  );
};

QualityProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};
