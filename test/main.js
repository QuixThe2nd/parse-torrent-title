const { expect } = require("chai");
const parse = require("../index").parse;

describe("Random releases", () => {
    it("sons.of.anarchy.s05e10.480p.BluRay.x264-GAnGSteR", () => {
        const releaseName = "sons.of.anarchy.s05e10.480p.BluRay.x264-GAnGSteR";

        expect(parse(releaseName)).to.deep.equal({
            title: "sons of anarchy",
            resolution: "480p",
            season: 5,
            seasonlist: [5],
            episode: 10,
            source: "bluray",
            codec: "x264",
            group: "GAnGSteR",
        });
    });

    it("Color.Of.Night.Unrated.DC.VostFR.BRrip.x264", () => {
        const releaseName = "Color.Of.Night.Unrated.DC.VostFR.BRrip.x264";

        expect(parse(releaseName)).to.deep.equal({
            title: "Color Of Night",
            unrated: true,
            language: "vostfr",
            source: "brrip",
            codec: "x264",
        });
    });

    it("Finding.Nemo.2003.DSNP.WEB-DL.1080p.HDR10.DDPDA5.1.HEVC-ARCADE.mkv", () => {
        const releaseName = "Finding.Nemo.2003.DSNP.WEB-DL.1080p.HDR10.DDPDA5.1.HEVC-ARCADE.mkv";

        expect(parse(releaseName)).to.deep.equal({
            title: "Finding Nemo",
            year: 2003,
            service: "DSNP",
            source: "web-dl",
            resolution: "1080p",
            color: "HDR",
            audio: "atmos",
            audiolist: ["atmos", "ddp"],
            channels: 5.1,
            codec: "h265",
            container: "mkv"
        });
    });

    it ("The Fresh Prince of Bel-Air (1990) S04 (1080p HMAX WEB-DL H265 SDR DD 2.0 English - HONE)", () => {
        const releaseName = "The Fresh Prince of Bel-Air (1990) S04 (1080p HMAX WEB-DL H265 SDR DD 2.0 English - HONE)";

        expect(parse(releaseName)).to.deep.equal({
            title: "The Fresh Prince of Bel-Air",
            year: 1990,
            season: 4,
            resolution: "1080p",
            service: "HMAX",
            source: "web-dl",
            codec: "h265",
            color: "SDR",
            audio: "dd",
            channels: 2.0,
            language: "eng",
            group: "HONE"

        });
    })

    it("Da Vinci Code DVDRip", () => {
        const releaseName = "Da Vinci Code DVDRip";

        expect(parse(releaseName)).to.deep.equal({
            title: "Da Vinci Code",
            source: "dvdrip",
        });
    });

    it("Some.girls.1998.DVDRip", () => {
        const releaseName = "Some.girls.1998.DVDRip";

        expect(parse(releaseName)).to.deep.equal({
            title: "Some girls",
            source: "dvdrip",
            year: 1998,
        });
    });

    it("Ecrit.Dans.Le.Ciel.1954.MULTI.DVDRIP.x264.AC3-gismo65", () => {
        const releaseName = "Ecrit.Dans.Le.Ciel.1954.MULTI.DVDRIP.x264.AC3-gismo65";

        expect(parse(releaseName)).to.deep.equal({
            title: "Ecrit Dans Le Ciel",
            source: "dvdrip",
            year: 1954,
            language: "multi",
            codec: "x264",
            audio: "dd",
            group: "gismo65",
        });
    });

    it("2019 After The Fall Of New York 1983 REMASTERED BDRip x264-GHOULS", () => {
        const releaseName = "2019 After The Fall Of New York 1983 REMASTERED BDRip x264-GHOULS";

        expect(parse(releaseName)).to.deep.equal({
            title: "2019 After The Fall Of New York",
            source: "bdrip",
            remastered: true,
            year: 1983,
            codec: "x264",
            group: "GHOULS",
        });
    });

    it("BoJack Horseman (2014) S05 (1080p NF WEB-DL x265 SDR DDP 5 1 English - DarQ HONE)", () => {
        const releaseName = "BoJack Horseman (2014) S05 (1080p NF WEB-DL x265 SDR DDP 5 1 English - DarQ HONE)";

        expect(parse(releaseName)).to.deep.equal({
            title: "BoJack Horseman",
            source: "web-dl",
            year: 2014,
            resolution: "1080p",
            codec: "x265",
            audio: "ddp",
            color: "SDR",
            language: "eng",
            service: "NFLX",
            season: 5,
            channels: 5.1,
            group: "HONE",
            encoder: "DarQ"
        });
    });

    it("Ghost In The Shell 2017 720p HC HDRip X264 AC3-EVO", () => {
        const releaseName = "Ghost In The Shell 2017 720p HC HDRip X264 AC3-EVO";

        expect(parse(releaseName)).to.deep.equal({
            title: "Ghost In The Shell",
            source: "hdrip",
            hardcoded: true,
            year: 2017,
            resolution: "720p",
            codec: "x264",
            audio: "dd",
            group: "EVO",
        });
    });

    it("Rogue One 2016 1080p BluRay x264-SPARKS", () => {
        const releaseName = "Rogue One 2016 1080p BluRay x264-SPARKS";

        expect(parse(releaseName)).to.deep.equal({
            title: "Rogue One",
            source: "bluray",
            year: 2016,
            resolution: "1080p",
            codec: "x264",
            group: "SPARKS",
        });
    });

    it("Desperation 2006 Multi Pal DvdR9-TBW1973", () => {
        const releaseName = "Desperation 2006 Multi Pal DvdR9-TBW1973";

        expect(parse(releaseName)).to.deep.equal({
            title: "Desperation",
            source: "dvd",
            year: 2006,
            language: "multi",
            region: "R9",
            group: "TBW1973",
        });
    });

    it("Maman, j'ai raté l'avion 1990 VFI 1080p BluRay DTS x265-HTG", () => {
        const releaseName = "Maman, j'ai raté l'avion 1990 VFI 1080p BluRay DTS x265-HTG";

        expect(parse(releaseName)).to.deep.equal({
            title: "Maman, j'ai raté l'avion",
            source: "bluray",
            year: 1990,
            audio: "dts",
            resolution: "1080p",
            language: "vfi",
            codec: "x265",
            group: "HTG",
        });
    });
});
