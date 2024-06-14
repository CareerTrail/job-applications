export interface IServerError {
  status: number;
  data: {
    message: string;
    error: string;
    statusCode: number;
  };
}
