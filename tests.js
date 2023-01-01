const chai = window.chai
const expect = chai.expect

describe('getCelcius', () =>{
    it('should convert farenheit to celcius for all values in an array', () =>{
        expect(getCelcius([23, 140, 212, 41])).to.deep.equal([-5, 60, 100, 5])
    })
})

describe('addNumbers',() => {
    it('should add two numbers', () => {
        expect(addNumbers([2,3])).to.deep.equal(5);
    })
})

describe('goodOrBadIdea', () =>{
    it('should count number of good ideas in array and provide final decision based on number', () =>{
        expect(goodOrBadIdea(["good", "bad", "good", "bad", "good",])).to.deep.equal("I smell a series!");
        expect(goodOrBadIdea(["bad", "bad"])).to.deep.equal("Fail!");  
        expect(goodOrBadIdea(["good","bad"])).to.deep.equal("Publish");
    })
})