var a, b

beforeEach(function() {
  a = Math.floor(Math.random() * 1000)
  b = Math.floor(Math.random() * 1000)
})

function add (a , b) {
  return (a + b)
}

function subtract (a, b) {
  return (a - b)
}

function multiply (a, b) {
  return (a * b)
}

function divide (a, b) {
  return (a / b)
}

function inc(n) {
  return a += 1 
}

it('inc(n) increments n and returns the result', function() {
  expect(inc(a)).toEqual(a + 1)
})

