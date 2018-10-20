// Add rooms here
var rooms = {
  room1: {
    name: "Room1",
    description: "This is room 1",
    completed: true
  },
  room2: {
    name: "Room2",
    description: "This is room 2",
    completed: false
  },
  room3: {
    name: "Room3",
    description: "This is room 3",
    completed: true
  }
};

describe("room creation", () => {
  const keys = Object.keys(rooms);
  it("should have at least three rooms", () => {
    Test.assertEquals(keys.length >= 3, true);
  });
  it("each room should be an object", () => {
    keys.forEach(name => {
      Test.expect(
        typeof rooms[name] === "object",
        `${name} should be an object`
      );
    });
  });
  it("should contain at least three properties per room", () => {
    keys.forEach(name => {
      let numKeys = Object.keys(rooms[name]).length;
      Test.expect(numKeys >= 3, `not enough properties for room: ${name}`);
    });
  });
});
