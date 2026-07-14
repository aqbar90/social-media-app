export interface TimelineUiState {
  isPending: boolean;

  isError: boolean;

  refetch: () => Promise<void>;
}

export interface TimelinePaginationState {
  hasNextPage: boolean;

  isFetchingNextPage: boolean;

  fetchNextPage: () => Promise<void>;
}

export interface TimelineState {
  ui: TimelineUiState;

  pagination?: TimelinePaginationState;
}
