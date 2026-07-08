import type { ApiResponse } from '@/types/api/api-response';
import type {
  PaginatedResponse,
  PaginationParams,
} from '@/types/api/pagination';
import type { Post } from '@/types/entities/post';

export type FeedRequest = PaginationParams;

export type FeedResponse = ApiResponse<PaginatedResponse<Post>>;
