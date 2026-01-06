'use client';

import UserProvider from './UserProvider';

const Providers = ({ children }: { children: React.ReactNode }) => {
  return <UserProvider>{children}</UserProvider>;
};
export default Providers;
