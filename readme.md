# js Update

A library for deeply nested immutable object updates using a simple path notation


## Usage

```
import jsu from jsu;

var original = {
  foo: "fooValue",
  bars: [
    { ork: "ork1Value", bif: "bif1Value" },
    { ork: "ork2Value", bif: "bif2Value" }
  ]
};

var setField = jsu(original, "bars[0].ork", (oldOrk) => {...oldOrk, ork: "newOrk1Value"});
assert(original.bars[0] === {ork: "ork1Value", bif: "bif1Value"});
assert(setField.bars[0] === {ork: "newOrk1Value", bif: "bif1Value"});
```
