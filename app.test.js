const request = require("supertest");
const app = require("./app");

const testForJSON = async (route) => {
  const res = await request(app).get(route);
  expect(res.headers["content-type"]).toContain("json");
};

const testFor200 = async (route) => {
  const res = await request(app).get(route);
  expect(res.statusCode).toBe(200);
};

describe("Categories", () => {
  const route = "/categories/";
  describe("GET", () => {
    it("responds with 200", () => testFor200(route));
    it("responds with json", async () => await testForJSON(route));
  });
  describe("GET ONE", () => {
    const endpoint = route + "id";
    it("responds with json", async () => await testForJSON(endpoint));
  });
});

describe("Lists", () => {
  describe("GET", () => {
    const route = "/lists";
    it("returns with 200", async () => testFor200(route));
    it("returns json", async () => testForJSON(route));
  });
});

describe("Products", () => {
  describe("GET", () => {
    const route = "/products";
    it("returns with 200", async () => testFor200(route));
    it("returns json", async () => testForJSON(route));
  });
});

describe("Users", () => {
  describe("POST", () => {
    it("rejects a post without username and pass", async () => {
      const res = await request(app)
        .post("/users")
        .send({ username: "Anthony" });
      expect(res.status).toBe(400);
    });
  });
});

describe("Log In", () => {
  describe("POST", () => {
    it("rejects a post without username and pass", async () => {
      const res = await request(app).post("/login").send({});
      expect(res.status).toBe(400);
    });
  });
});
