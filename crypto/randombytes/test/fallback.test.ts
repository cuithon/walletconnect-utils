import "mocha";
import * as chai from "chai";

import * as fallbackCrypto from "../src/fallback";

describe("Fallback", () => {
  describe("RandomBytes", () => {
    let length: number;
    let key: Uint8Array;

    before(async () => {
      length = 32;
      key = fallbackCrypto.randomBytes(length);
    });

    it("should generate random bytes successfully", async () => {
      chai.expect(key).to.not.be.undefined;
    });

    it("should match request byte length", async () => {
      chai.expect(key.length).to.eql(length);
    });
  });
});
