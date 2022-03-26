import React, { useState, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import cmiContext from './cmiContext';

export default function CmiProvider({ children }) {
  const [projects, setProjects] = useState();

  useEffect(() => {
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    const options = {
      method: 'GET',
      headers: myHeaders,
    };

    fetch('/projects', options)
      .then((el) => el.json())
      .then((result) => setProjects(result));
  }, []);
  const context = useMemo(() => ({ projects }), [projects]);

  return (
    <cmiContext.Provider value={context}>
      { children }
    </cmiContext.Provider>
  );
}

CmiProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
