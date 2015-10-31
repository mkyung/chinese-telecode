var expect = require("chai").expect
    , telecode = require("../index");

describe("#Convert (with default options)", function(){
    it("char 权 to 2938", function(){
        expect(telecode("权")).to.deep.equal(["2938"])
    })

    it("char 權 to 2938", function(){
        expect(telecode("權")).to.deep.equal(["2938"])
    })

    it("char 权利 to 2938 0448", function(){
        expect(telecode("权利")).to.deep.equal(["2938", "0448"])
    })

    it("char 權利 to 2938 0448", function(){
        expect(telecode("權利")).to.deep.equal(["2938", "0448"])
    })

    it("char \\s權利ABC權利 to \"\" 2938 0448 \"\" \"\" \"\" 2938 0448", function(){
        expect(telecode(" 權利ABC權利")).to.deep.equal(["", "2938", "0448", "", "", "", "2938", "0448"])
    })
})

describe("#Convert (with sc codeType)", function(){
    it("char 权 to 2938", function(){
        expect(telecode("权", {codeType: "sc"})).to.deep.equal(["2938"])
    })

    it("char 權 to \"\"", function(){
        expect(telecode("權", {codeType: "sc"})).to.deep.equal([""])
    })

    it("char 权利 to 2938 0448", function(){
        expect(telecode("权利", {codeType: "sc"})).to.deep.equal(["2938", "0448"])
    })

    it("char 權利 to \"\" 0448", function(){
        expect(telecode("權利", {codeType: "sc"})).to.deep.equal(["", "0448"])
    })

    it("char \\s權利ABC權利 to \"\" \"\" 0448 \"\" \"\" \"\" \"\" 0448", function(){
        expect(telecode(" 權利ABC權利", {codeType: "sc"})).to.deep.equal(["", "", "0448", "", "", "", "", "0448"])
    })
})

describe("#Convert (with tc codeType)", function(){
    it("char 权 to \"\"", function(){
        expect(telecode("权", {codeType: "tc"})).to.deep.equal([""])
    })

    it("char 權 to 2938", function(){
        expect(telecode("權", {codeType: "tc"})).to.deep.equal(["2938"])
    })

    it("char 权利 to \"\" 0448", function(){
        expect(telecode("权利", {codeType: "tc"})).to.deep.equal(["", "0448"])
    })

    it("char 權利 to 2938 0448", function(){
        expect(telecode("權利", {codeType: "tc"})).to.deep.equal(["2938", "0448"])
    })

    it("char \\s權利ABC權利 to \"\" 2938 0448 \"\" \"\" \"\" 2938 0448", function(){
        expect(telecode(" 權利ABC權利", {codeType: "tc"})).to.deep.equal(["", "2938", "0448", "", "", "", "2938", "0448"])
    })
})
