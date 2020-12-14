const request = require("supertest");
const app = require("../app");

describe("Routes tests", () => {
  it("should greet you", async () => {
    const response = await request(app).get("/");
    expect(response.status).toBe(200);
    expect(response.body.message).toEqual("Welcome to GymBot");
  });

  it("should give you the routine", async (done) => {
    const result = require("../../db/routine.json");
    request(app).get("/routine").expect(200).expect(result, done);
  });

  it("should modify the routine", async (done) => {
    request(app)
      .put("/routine")
      .send({
        monday: [
          { name: "Press Banca", _weight: 40 },
          { name: "Peso Muerto", _weight: 70 },
        ],
        tuesday: [],
        wednesday: [
          { name: "Press Banca", _weight: 40 },
          { name: "Peso Muerto", _weight: 70 },
        ],
        thursday: [],
        friday: [
          { name: "Press Banca", _weight: 40 },
          { name: "Peso Muerto", _weight: 70 },
        ],
        saturday: [],
        sunday: [],
      })
      .expect(200, done);
  });

  it("should clean the routine", async (done) => {
    request(app)
      .delete("/routine")
      .expect(200)
      .expect('"La rutina ha sido borrada"', done);
  });

  it("should give today's work", async () => {
    request(app).get("/print").expect(200);
  });

  afterAll(async () => {
    await app.close();
  });
});
