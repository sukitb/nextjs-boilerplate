export const getBaseUrl = () => {
  if (process.env.NEXT_PUBLIC_APP_URL) {
    return process.env.NEXT_PUBLIC_APP_URL;
  }

  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }

  return "http://localhost:3000";
};

export const getEnvirontmentName = () => {
  if (
    process.env.NEXT_PUBLIC_ENVIRONMENT &&
    process.env.NEXT_PUBLIC_ENVIRONMENT !== "development"
  ) {
    return process.env.NEXT_PUBLIC_ENVIRONMENT;
  }

  return "development";
};
