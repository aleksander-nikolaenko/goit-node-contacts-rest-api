const request = require("supertest");
const mongoose = require("mongoose");
const app = require("../../../../src/app");

const { DB_HOST, PORT = 4000 } = process.env;

describe("Test login controller", () => {
  beforeAll(() =>
    mongoose
      .connect(DB_HOST)
      .then(() => {
        console.log("Database connection successful");
        app.listen(PORT, () => {
          console.log(`Server running. Use our API on port: ${PORT}`);
        });
      })
      .catch((error) => {
        console.log(`Server not running. Error message: ${error.message}`);
        process.exit(1);
      })
  );

  test("login returns response status 200 response body must contains token and user", async () => {
    const response = await request(app).post("/api/users/login").send({
      email: "oleksandr@gmail.com",
      password: "123456",
    });

    expect(response.status).toBe(200);
    expect(typeof response.body.token).toBe("string");
    expect(typeof response.body.user.email).toBe("string");
    expect(typeof response.body.user.subscription).toBe("string");
  });
});
