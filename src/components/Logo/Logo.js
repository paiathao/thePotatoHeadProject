import React from 'react';

export default ({ style }) => (
  <div style={{ width: '200px', height: 'auto', ...style }}>
    <img 
      src="images/logo.png" 
      style={{ width: '100%' }}
    />
  </div>
);