interface Environment {
  production: boolean;
  contentful: {
    accessToken: string;
    environment: string;
    space: string;
  };
}

export const environment: Environment = {
  production: false,
  contentful: {
    accessToken: 'YOUR ACCESS TOKEN',
    environment: 'main',
    space: 'YOUR SPACE ID',
  },
};
