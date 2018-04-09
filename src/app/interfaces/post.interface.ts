import {User} from './user.interface';

export interface Post {
  id: number;
  created_by_id: number;
  recipient_id: number;

  content: string;

  created_at: string;
  updated_at: string;
  deleted_at: string;

  recipient: User;
  created_by: User;
}
