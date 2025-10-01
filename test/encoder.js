const { expect } = require("chai");
const parse = require("../index").parse;

describe("Parsing encoder", () => {
    it("should detect DarQ encoder correctly", () => {
        const releaseName = "BoJack Horseman (2014) S05 (1080p NF WEB-DL x265 SDR DDP 5 1 English - DarQ HONE)";

        expect(parse(releaseName)).to.deep.include({ encoder: "DarQ" });
    });

    it("shouldn't detect when no encoder", () => {
        const releaseName = "BoJack Horseman (2014) S05 (1080p NF WEB-DL x265 SDR DDP 5 1 English - HONE)";

        expect(parse(releaseName)).to.not.have.property('encoder');
    });
});
