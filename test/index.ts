import request from "supertest";
import App from '../app';

describe("server test", async () => {

  let server = await App();

  describe("group one", () => {
    it("test GET", async () => {

      await request(server)
        .get('/')
        .expect(200, '<!DOCTYPE html><html><head><title>Hello Koa 2!</title><link rel="stylesheet" href="/stylesheets/style.css"></head><body><h1>Hello Koa 2!</h1><p>Welcome to Hello Koa 2!</p></body></html>');

    });

  });

  
  after(() => {
    server.close();
    process.exit();
  });
});