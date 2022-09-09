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
