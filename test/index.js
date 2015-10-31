var should = require("chai").should()
    , telecode = require("../index");

describe("#Convert", function(){
    it("char 权 to 2938", function(){
        telecode("权").should.equal(2938)
    })
})
