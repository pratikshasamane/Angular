export class Notes {
  public _id?: number;
  public title: string;
  public paragraph: string;
}

interface TokenResponse {
  token: string;
}

export interface TokenPayload {
  email: string;
  password: string;
}
