import React, { useState, useEffect } from 'react';
import Loader from "./loader";
import Error from "./error";

const withData = (Wrapped, url) => props => {
  const [app, setApp] = useState({
    data: [],
    loading: false,
    error: false
  });

  const { loading, data, error } = app;

  const fetchData = () => {
    setApp({ data: [], loading: true, error: false });
    fetch(url)
        .then(data => data.json())
        .then(data => setApp({ loading: false, data: data, error: false }))
        .catch(err => {
          setApp({ loading: false, data: [], error: true });
          console.log(err)
        });
  };

  useEffect(fetchData, []);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <Error />;
  }

  return <Wrapped { ...props } {...{ data }} />;
};

export default withData;