export type IncomingQueryType<T> = {
  message: string;
  count: number;
  results: T[];
};

export type TGlobalResponse<T = undefined> = {
  message: string;
  results?: T;
};
