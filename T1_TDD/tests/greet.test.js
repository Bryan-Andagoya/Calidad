const assert = require("assert");
const { greet, isUpperCase } = require("../index");

// new unit test
describe("Check greet", function () {
  describe("Greet to Bob", function () {
    it("should return 'Hello, Bob.'", function () {
      let result = greet("Bob");
      assert.equal("Hello, Bob.", result);
    });
  });
  describe("Greet to Juan Pablo", function () {
    it("should return 'Hello, Juan Pablo.'", function () {
      let result = greet("Juan Pablo");
      assert.equal("Hello, Juan Pablo.", result);
    });
  });
  describe("Greet with empty name", function () {
    it("should return 'Hello, my friend.'", function () {
      let result = greet("");
      assert.equal("Hello, my friend.", result);
    });
  });
  describe("Greet with uppercase name", function () {
    it("should return 'HELLO JERRY!'", function () {
      let result = greet("JERRY");
      assert.equal("HELLO JERRY!", result);
    });
  });
  describe("Greet with two names", function () {
    it("should return 'Hello, Jill and Jane.'", function () {
      let result = greet(["Jill", "Jane"]);
      assert.equal("Hello, Jill and Jane.", result);
    });
  });
  describe("Greet with more than two names", function () {
    it("should return 'Hello, Amy, Brian, and Charlotte.'", function () {
      let result = greet(["Amy", "Brian", "Charlotte"]);
      assert.equal("Hello, Amy, Brian, and Charlotte.", result);
    });
  });
  describe("Greet with normal and shouted names", function () {
    it("should return 'Hello, Amy and Charlotte. AND HELLO BRIAN!'", function () {
      let result = greet(["Amy", "BRIAN", "Charlotte"]);
      assert.equal("Hello, Amy and Charlotte. AND HELLO BRIAN!", result);
    });
  });
  describe("Greet with normal and shouted names", function () {
    it("should return 'Hello, Amy and Charlotte. AND HELLO ANA AND BRIAN!'", function () {
      let result = greet(["Amy", "ANA", "BRIAN", "Charlotte"]);
      assert.equal(
        "Hello, Amy and Charlotte. AND HELLO ANA AND BRIAN!",
        result
      );
    });
  });
  describe("Greet with normal and shouted names", function () {
    it("should return 'Hello, Amy and Charlotte. AND HELLO ANA, BRIAN, JOSE AND MARIA!'", function () {
      let result = greet(["Amy", "ANA", "BRIAN", "JOSE", "MARIA", "Charlotte"]);
      assert.equal(
        "Hello, Amy and Charlotte. AND HELLO ANA, BRIAN, JOSE AND MARIA!",
        result
      );
    });
  });
  describe("Greet with a name as a string containing a comma", function () {
    it("should return 'Hello, Bob, Charlie, and Dianne.'", function () {
      let result = greet(["Bob", "Charlie, Dianne"]);
      assert.equal("Hello, Bob, Charlie, and Dianne.", result);
    });
  });
  describe("Greet with with double quotes surrounding the entry", function () {
    it("should return 'Hello, Bob and Charlie, Dianne.'", function () {
      let result = greet(["Bob", '"Charlie, Dianne"']);
      assert.equal("Hello, Bob and Charlie, Dianne.", result);
    });
  });
});

describe("Check isUpperCase function", () => {
  describe("Check with a single upper character", () => {
    it("should return 'true'", () => {
      let result = isUpperCase("A");
      assert.equal(true, result);
    });
  });
  describe("Check with a single lower character", () => {
    it("should return 'false'", () => {
      let result = isUpperCase("a");
      assert.equal(false, result);
    });
  });
  describe("Check with a sigle upper word", () => {
    it("should return 'true'", () => {
      let result = isUpperCase("JERRY");
      assert.equal(true, result);
    });
  });
  describe("Check with a sigle lower word", () => {
    it("should return 'false'", () => {
      let result = isUpperCase("jerry");
      assert.equal(false, result);
    });
  });
  describe("Check with a capital letter", () => {
    it("should return 'false'", () => {
      let result = isUpperCase("Jerry");
      assert.equal(false, result);
    });
  });
  describe("Check with an empty string", () => {
    it("should return 'false'", () => {
      let result = isUpperCase("");
      assert.equal(false, result);
    });
  });
});
