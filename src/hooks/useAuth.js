import { useMemo } from 'react';

/**
 * User Auth Hook
 * @returns Authenticated User or null
 */
export const useAuth = () => {
  const { user } = useSelector((state) => state.auth);
  return useMemo(() => ({ user }), [user]);
};
