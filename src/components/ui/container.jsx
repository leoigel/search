import React from 'react';

export const Container = ({ children }) => {
  return (
    <div className='w-full max-w-screen-xl m-auto p-8 pt-12'>{children}</div>
  );
};
