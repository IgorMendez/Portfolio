// import React, { useState, useEffect } from 'react';
import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import cmiContext from './cmiContext';

export default function CmiProvider({ children }) {
  // const [clienteData, setClientData] = useState();

  const context = useMemo(() => ({}), []);

  return (
    <cmiContext.Provider value={context}>
      { children }
    </cmiContext.Provider>
  );
}

CmiProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
