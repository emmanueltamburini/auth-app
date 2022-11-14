export interface Response {
  ok:    boolean;
  msg:   string;
  uid?:   string;
  name?:   string;
  token?: string;
}

export interface User {
  uid:    string;
  name:   string;
}
