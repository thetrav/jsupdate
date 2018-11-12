import jsu from "./index";

const original = {
  foo: "fooValue",
  bars: [
    { ork: "ork1Value", bif: "bif1Value" },
    { ork: "ork2Value", bif: "bif2Value" }
  ]
};

test("replace string", () => {
  const updated = jsu(original, "foo", () => "sommick");
  expect(original.foo).toEqual("fooValue");
  expect(updated.foo).toEqual("sommick");
});

test("replace whole array", () => {
  const updated = jsu(original, "bars", () => [1,2,3]);
  expect(original.bars).toHaveLength(2);
  expect(updated.bars).toEqual([1,2,3]);
});

test("replace value in array", () => {
  const updated = jsu(original, "bars[0]", () => {return {test: true};});
  expect(original.bars).toEqual([
    { ork: "ork1Value", bif: "bif1Value" },
    { ork: "ork2Value", bif: "bif2Value" }
  ]);
  expect(updated.bars).toEqual([{test: true}, 
    { ork: "ork2Value", bif: "bif2Value" }
  ]);
});

test("replace nested value in array", () => {
  const updated = jsu(original, "bars[0].ork", () => "newOrk1Value");
  expect(updated).not.toBe(original);
  expect(original.bars[0]).toEqual({ork: "ork1Value", bif: "bif1Value"});
  expect(updated.bars[0]).toEqual({ork: "newOrk1Value", bif: "bif1Value"});
});

test("transform nested value in array", () => {
  const updated = jsu(original, "bars[0].ork", (v) => v.toUpperCase());
  expect(original.bars[0]).toEqual({ork: "ork1Value", bif: "bif1Value"});
  expect(updated.bars[0]).toEqual({ork: "ORK1VALUE", bif: "bif1Value"});

});
