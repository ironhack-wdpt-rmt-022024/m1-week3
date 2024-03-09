// describe(description, function() {})

// it(description, function() {})

// expect( invokeFunction() ).toEqual( expectedResult )

describe("function centsToDecimals()", () => {
 it("Should convert cents value to a floating point number with 2 decimals", () => {
   expect( centsToDecimals(103) ).toEqual(1.03);
   expect( centsToDecimals(25) ).toEqual(0.25);
 })
})


console.log("Should convert cents value to a floating point number with 2 decimals")
console.log( centsToDecimals(103) === 1.03  )
console.log( centsToDecimals(25) === 0.25  )
