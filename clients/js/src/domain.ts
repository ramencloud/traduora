export interface CreateAccountRequest {
  name: string;
  email: string;
  password: string;
}

export interface CreateAccountResponse {
  id: string;
  email: string;
  name: string;
  accessToken: string;
}

export type AuthenticateRequest = AuthenticatePasswordRequest | AuthenticateClientCredentialsRequest;

export type AuthenticatePasswordRequest = {
  grantType: 'password';
  email: string;
  password: string;
};

export type AuthenticateClientCredentialsRequest = {
  grantType: 'client_credentials';
  clientId: string;
  clientSecret: string;
};

export interface AuthenticateResponse {
  accessToken: string;
}

export interface ApiResponse<A> {
  data: A;
}
