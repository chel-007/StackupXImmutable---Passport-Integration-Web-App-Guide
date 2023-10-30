import { config, passport  } from '@imtbl/sdk';

const passportInstance = new passport.Passport({
  baseConfig: new config.ImmutableConfiguration({
    environment: config.Environment.SANDBOX,
  }),
  clientId: 'WnwjZ5Y6CE9LlMVev2KagbV4xW8iuiNh',
  redirectUri: 'https://chel-passport-integration.netlify.app/logging',
  logoutRedirectUri: 'https://chel-passport-integration.netlify.app/logout',
  audience: 'platform_api',
  scope: 'openid offline_access email transact'
});



export default passportInstance;