// Import the RTK Query methods from the React-specific entry point
import { swgTicketApiRoute } from '@/src/constants/api-routes';
import ApiConfigBuilder from '@/src/libs/networking/config/api-config-builder';
import { createApi } from '@reduxjs/toolkit/query/react';

const configBuilder = new ApiConfigBuilder();
console.log(
  'process.env.EXPO_PUBLIC_SWG_API_URL',
  process.env.EXPO_PUBLIC_SWG_API_URL,
);

const configSwg = configBuilder
  .setBaseUrl(process.env.EXPO_PUBLIC_SWG_API_URL ?? '')
  .setOverrideHeaders({
    'Content-Type': 'multipart/form-data',
    'apim-sub-key': `${process.env.EXPO_PUBLIC_SWG_AIPM_TOKEN}`,
  })
  .setRetrieveAuthTokenFn((state) => {
    return state?.app.token ?? '';
  })
  .setTimeoutConfig(120 * 1000)
  .build();

export const swgTicketApi = createApi({
  reducerPath: 'swgTicketApi',
  baseQuery: configSwg.baseQuery,
  keepUnusedDataFor: 10,
  endpoints: (builder) => ({
    login: builder.mutation<any, FormData>({
      query: (loginData) => {
        return {
          url: swgTicketApiRoute.login,
          body: loginData,
          method: 'POST',
        };
      },
    }),
  }),
});

export const { useLoginMutation } = swgTicketApi;
