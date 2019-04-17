import axios, { AxiosInstance } from 'axios';
import { ApiResponse, AuthenticateRequest, AuthenticateResponse, CreateAccountRequest, CreateAccountResponse } from './domain';

export interface Config {
  baseUrl: string;
  timeout: number;
  accessToken: string | undefined;
}

export const DefaultConfig: Config = {
  baseUrl: 'http://localhost:8080/api/v1',
  timeout: 5000,
  accessToken: undefined,
};

export class TraduoraApi {
  private client: AxiosInstance;

  constructor(private config: Config = DefaultConfig) {
    const headers: { [header: string]: string } = {
      'X-Requester': 'js-client',
    };

    if (this.config.accessToken) {
      headers['Authorization'] = `Bearer ${this.config.accessToken}`;
    }

    this.client = axios.create({
      baseURL: this.config.baseUrl,
      timeout: this.config.timeout,
      headers: headers,
    });
  }

  async createAccount(payload: CreateAccountRequest): Promise<CreateAccountResponse> {
    const res = await this.client.post<ApiResponse<CreateAccountResponse>>('/auth/signup', payload);
    return res.data.data;
  }

  async getAuthToken(payload: AuthenticateRequest): Promise<AuthenticateResponse> {
    const res = await this.client.post<ApiResponse<AuthenticateResponse>>('/auth/token', payload);
    return res.data.data;
  }

  async createProject() {}
  async getProjects() {}
  async updateProject() {}
  async deleteProject() {}
}
