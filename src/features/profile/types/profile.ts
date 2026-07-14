import type { ApiResponse } from '@/types/api/api-response';
import type { PaginatedResponse } from '@/types/api/pagination';
import type { Post } from '@/types/entities/post';
import type { ProfileStats } from '@/types/entities/profile-stats';
import type { User } from '@/types/entities/user';
import { ProfileDto } from './profile.dto';

export interface CurrentUser {
  profile: User;
  stats: ProfileStats;
}

export type CurrentUserResponse = ApiResponse<CurrentUser>;

export type ProfileResponse = ApiResponse<ProfileDto>;

export type UpdateProfileRequest = FormData;

export type UpdateProfileResponse = ApiResponse<User>;

export type CurrentUserPostsResponse = ApiResponse<PaginatedResponse<Post>>;
