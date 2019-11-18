import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({ children, isGoogleSignIn, ...otherProps }) => (
  <div
    className={`custom-button ${isGoogleSignIn ? 'google-sign-in' : ''}`}
    {...otherProps}
  >
    {children}
  </div>
);

export default CustomButton;
