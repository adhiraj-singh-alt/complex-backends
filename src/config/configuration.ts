export default () => ({
  port: parseInt(process.env.APP_PORT as string) || 8000,
});
