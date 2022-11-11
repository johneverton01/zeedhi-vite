import { IConfig } from '@zeedhi/core';

const config: IConfig = {
  baseUrl: import.meta.env.BASE_URL,
  language: "pt-BR",
  /* env: {
    productId: process.env.VITE_APP_PRODUCT_ID,
    authUrl: process.env.VITE_APP_AUTH_URL || process.env.VITE_APP_END_POINT,
  }, */
}

export default config;
