let dbClient: typeof db;

// TODO: add authentication context
declare module "h3" {
  interface H3EventContext {
    db: typeof dbClient;
  }
}

export default eventHandler((event) => {
  if (!dbClient) {
    dbClient = db;
  }
  event.context.db = dbClient;
});
