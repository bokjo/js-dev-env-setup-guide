/**
 * Created by bstojchevski on 5/16/2017.
 */

import { expect } from "chai";
import jsdom from "jsdom";
import fs from "fs";

describe("Initial test!", () => {
  it("Should pass", () => {
    expect(true).to.equal(true);

  });
});

describe("index.html", () => {
  it("Should greet Aleksandra!", (done) => {
    const index = fs.readFileSync("./src/index.html", "utf-8");
    const window = new jsdom.JSDOM(index).window;
    const h1 = window.document.getElementsByTagName("h1")[0];

    expect(h1.innerHTML).to.equal("Ubava vecer Aleksandra!");

    window.close();
    done();

  });
});
