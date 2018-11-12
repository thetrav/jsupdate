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

var setField = jsu(original, "bars[0].ork", (_) => "newOrk1Value");
assert(original.bars[0] === {ork: "ork1Value", bif: "bif1Value"});
assert(setField.bars[0] === {ork: "newOrk1Value", bif: "bif1Value"});

var transformField = jsu(original, "foo", (v) => v.toUpperCase());
assert(transformField.foo === "FOOVALUE");
```
