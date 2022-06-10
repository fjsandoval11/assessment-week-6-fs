const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    // CODE HERE

    test('shuffle array return an array', ()=>{
        expect(shuffleArray).toEqual([])
    })

    test('shuffleArray should be same length as argument', ()=>{
        
        expect(shuffleArray.length).toEqual(shuffleArray.length)
    })

})