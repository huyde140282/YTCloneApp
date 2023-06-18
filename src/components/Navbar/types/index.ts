import { User } from '@/shared/types';

export type NavBarProps = {
  handleLogout: () => void;
  user: User | null;
  loading?: boolean;
};
