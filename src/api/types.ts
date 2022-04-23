export interface AllItemsResponse<T> {
  meta: {
    pageCount: number;
    resourceCount: number;
  };
  data: T[];
}

export interface ByIdParams {
  [key: string]: string;
}
