export interface IPaginatedResponse {
  total: number;
  skip: number;
}

export interface IPaginatedQueryParams {
  skip: number;
  take: number;
}
