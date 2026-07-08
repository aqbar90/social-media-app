import type { ApiResponse } from '@/types/api/api-response';
import type { ProfileStats } from '@/types/entities/profile-stats';
import type { User } from '@/types/entities/user';

export interface CurrentUser {
  profile: User;
  stats: ProfileStats;
}

export type CurrentUserResponse = ApiResponse<CurrentUser>;

export type UpdateProfileRequest = FormData;

export type UpdateProfileResponse = ApiResponse<User>;
