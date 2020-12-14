const request = require("supertest");
const apps = require("../app");

describe("Routes tests", () => {
  it("should greet you", async () => {
    const response = await request(apps).get("/");
    expect(response.status).toBe(200);
    expect(response.body.message).toEqual("Welcome to GymBot");
  });

  it("should give you the routine", async () => {
    const result = require("../../db/routine.json");
    await request(apps).get("/routine").expect(200).expect(result);
  });

  it("should modify the routine", async () => {
    await request(apps)
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
      .expect(200);
  });

  it("should clean the routine", async () => {
    await request(apps)
      .delete("/routine")
      .expect(200)
      .expect('"La rutina ha sido borrada"');
  });

  it("should give today's work", async () => {
    await request(apps).get("/print").expect(200);
  });

  afterAll(async () => {
    await apps.close();
  });
});
