const supertest = require("supertest");
const app = require("./app");

describe("Categories", () => {
  describe("GET", () => {
    const request = supertest(app);
    it("responds with 200", () => {
      request.get("/categories").then((res) => {
        expect(res.statusCode).toBe(200);
      });
    });
    it("responds with json", () => {
      request.get("/categories").then((res) => {
        expect(res.headers["content-type"]).toContain("json");
      });
    });
  });
});

describe("Users", () => {
  describe("POST", () => {
    const request = supertest(app);
    it("rejects a post without username and pass", async () => {
      const res = await request.post("/users").send({ username: "Anthony" });
      expect(res.status).toBe(400);
    });
  });
});

describe("Log In", () => {
  describe("POST", () => {
    const request = supertest(app);
    it("rejects a post without username and pass", async () => {
      const res = await request.post("/login").send({});
      expect(res.status).toBe(400);
    });
  });
});
