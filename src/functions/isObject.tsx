import React from 'react';

export const isObject = React.memo((obj) => {
  return Object.keys(obj).length === 0;
});
