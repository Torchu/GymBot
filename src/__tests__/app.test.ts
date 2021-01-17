import app from "../app";
import request from "supertest";

describe("Routes tests", () => {
  it("should greet you", async () => {
    const response = await request(app).get("/");
    expect(response.status).toBe(200);
    expect(response.body.message).toEqual("Welcome to GymBot");
  });

  it("should give you the routine", async () => {
    await request(app).get("/routine").expect(200).expect({
      monday: [],
      tuesday: [],
      wednesday: [],
      thursday: [],
      friday: [],
      saturday: [],
      sunday: [],
    });
  });

  it("should modify the routine", async () => {
    const routine = {
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
    };
    await request(app).post("/routine").send(routine).expect(200);
  });

  it("should clean the routine", async () => {
    await request(app)
      .delete("/routine")
      .expect(200)
      .expect('"La rutina ha sido borrada"');
  });

  it("should give today's work", async () => {
    await request(app).get("/print").expect(200);
  });
});
