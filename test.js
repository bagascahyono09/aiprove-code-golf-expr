const assert = require('node:assert/strict')
const { evalExpr } = require('./index.js')
const cases = require('./cases.json')
const edgeCases = [
  { in: ' -3+2 ', out: -1 },
  { in: '2*-3', out: -6 },
  { in: '010+1', out: 11 },
  { in: '.5*4', out: 2 },
  { in: '((2))', out: 2 },
  { in: '7-3-2', out: 2 },
  { in: '1/3', out: 0.3333333333333333 },
]

for (const { in: expression, out: expected } of [...cases, ...edgeCases]) {
  assert.strictEqual(evalExpr(expression), expected, expression)
}

console.log(`${cases.length + edgeCases.length} tests passed`)
