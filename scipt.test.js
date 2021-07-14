const googleSearch =require('./script')
dbMock =[
    "dog.com",
    "cheese.com",
    "football.com",
    "marvel"
]

describe("googleSearch",()=>{
    it('this is a 1 test', function () {
        expect("hello").toBe("hello")
        googleSearch("testtest",dbMock)

    });

    it('this is searching in google', function () {
        expect(googleSearch("testtest",dbMock)).toEqual([])
        expect(googleSearch("dog",dbMock)).toEqual(["dog.com"])

    });

    it('work with undefined and null input', function () {
        expect(googleSearch(undefined,dbMock)).toEqual([])
        expect(googleSearch(null,dbMock)).toEqual([])

    });


    it('return no more than 3 matches', function () {
        expect(googleSearch('.com',dbMock).length).toEqual(3)

    });


})
