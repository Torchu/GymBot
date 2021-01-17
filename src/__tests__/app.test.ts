import app from "../app";
import request from "supertest";
import mongoose from "mongoose";
mongoose.connect("mongodb://localhost/gymbot-test", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

describe("Routes tests", () => {
  let id: string;
  it("should greet you", async () => {
    const response = await request(app).get("/");
    expect(response.status).toBe(200);
    expect(response.body.message).toEqual("Welcome to GymBot");
  });

  it("should list the users", async () => {
    const response = await request(app).get("/users");
    expect(response.status).toBe(200);
  });

  it("should create the users", async () => {
    const req = {
      name: "Test",
    };
    const response = await request(app).post("/users").send(req);
    id = response.body._id;
    expect(response.status).toBe(201);
  });

  it("should give you the routine", async () => {
    await request(app).get(`/users/${id}/routine`).expect(200);
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
    await request(app).patch(`/users/${id}/routine`).send(routine).expect(200);
  });

  it("should modify one day work", async () => {
    const work = [
      { name: "Press Banca", _weight: 40 },
      { name: "Peso Muerto", _weight: 70 },
    ];
    await request(app).patch(`/users/${id}/routine/2`).send(work).expect(200);
  });

  it("should give today's work", async () => {
    await request(app).get(`/users/${id}/today`).expect(200);
  });

  it("should delete the user", async () => {
    const response = await request(app).delete(`/users/${id}`);
    expect(response.status).toBe(200);
  });
});
