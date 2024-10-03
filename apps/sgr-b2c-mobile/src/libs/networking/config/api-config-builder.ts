import { RootState } from '@/src/redux/store';
import { fetchBaseQuery } from '@reduxjs/toolkit/query';

class ApiConfigBuilder {
  private baseUrl?: string;
  private headers: Record<string, string> = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  };
  private timeout = 10000;

  private retrieveAuthTokenFn?: (state) => string;

  setRetrieveAuthTokenFn(
    retrieveAuthTokenFn: (state) => string,
  ): ApiConfigBuilder {
    this.retrieveAuthTokenFn = retrieveAuthTokenFn;
    return this;
  }

  setTimeoutConfig(timeout: number): ApiConfigBuilder {
    this.timeout = timeout;
    return this;
  }

  setOverrideHeaders(headers: Record<string, string>): ApiConfigBuilder {
    this.headers = headers;
    return this;
  }

  setBaseUrl(baseUrl: string): ApiConfigBuilder {
    this.baseUrl = baseUrl;
    return this;
  }

  build = () => {
    return {
      baseQuery: fetchBaseQuery({
        baseUrl: this.baseUrl ?? '',
        prepareHeaders: (headers, { getState }) => {
          for (const key in this.headers) {
            headers.set(key, this.headers[key]);
          }
          const state = getState() as RootState;
          const authToken = this.retrieveAuthTokenFn?.(state);
          if (authToken) {
            headers.set('Authorization', `${authToken}`);
          }
          return headers;
        },
        timeout: this.timeout,
      }),
    };
  };
}

export default ApiConfigBuilder;
