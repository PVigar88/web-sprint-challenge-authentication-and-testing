// Write your tests here

const request = require("supertest");
const server = require("./server");
const db = require("../data/dbConfig");
const User = require("./users/users-model");

beforeAll(async () => {
  await db.migrate.rollback();
  await db.migrate.latest();
});

afterAll(async () => {
  await db.destroy();
});

test("sanity", () => {
  expect(true).toBe(true);
});

describe("[POST] /auth/register", () => {
  it.skip("adds a user and returns it", async () => {
    //test 1
  });
  it.skip("returns error if username is already taken", async () => {
    //test 2
  });
});

describe("[POST] /auth/login", () => {
  it.skip("on successful login returns username and token", async () => {
    //test 1
  });
  it.skip("returns error when wrong credentials are used", async () => {
    //test 2
  });
});
