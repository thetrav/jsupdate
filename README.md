# js Update

A library for deeply nested immutable object updates using a simple path notation


## Usage

```
import jsupdate from jsupdate;

var original = {
  foo: "fooValue",
  bars: [
    { ork: "ork1Value", bif: "bif1Value" },
    { ork: "ork2Value", bif: "bif2Value" }
  ]
};

var setField = jsupdate(original, "bars[0].ork", (_) => "newOrk1Value");
assert(original.bars[0] === {ork: "ork1Value", bif: "bif1Value"});
assert(setField.bars[0] === {ork: "newOrk1Value", bif: "bif1Value"});

var transformField = jsupdate(original, "foo", (v) => v.toUpperCase());
assert(transformField.foo === "FOOVALUE");
```
