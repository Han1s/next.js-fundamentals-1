import React, { ReactNode } from 'react';

const Layout = ({children}: {children: ReactNode}) => {
  return (
    <div>
      marketing layout
      {children}
    </div>
  );
};

export default Layout;