# code-golf-expr

`index.js` (52 bytes) exports `evalExpr(s)` for + - * /, decimals, parentheses, precedence and unary minus.
It evaluates with JS semantics after normalizing numeric literals (`010` would otherwise be read as octal by `eval`).

Run the tests (public cases + edge cases):

```
node test.js
```
