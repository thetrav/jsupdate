import rewire from "rewire"
import jsu from "./index"

const index = rewire("./index")
const parse = index.__get__("parse")
const original = {
  foo: "fooValue",
  bars: [
    { ork: "ork1Value", bif: "bif1Value" },
    { ork: "ork2Value", bif: "bif2Value" }
  ]
}

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

// @ponicode
describe("index.default", () => {
    test("0", () => {
        let param1 = [["District", "Future", "Legacy", "Corporate", "Future"], ["Corporate", "District", "Legacy", "District", "District"], ["Future", "District", "Future", "Legacy", "District"], ["Corporate", "District", "Future", "Future", "Legacy"], ["District", "Legacy", "Legacy", "District", "Future"], ["Future", "Legacy", "Corporate", "District", "Legacy"], ["Legacy", "Corporate", "Legacy", "Future", "Legacy"]]
        let callFunction = () => {
            index.default(param1, "/path/to/file", "callback detected, not supported yet")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let param1 = [["District", "Corporate", "District", "Corporate", "Future"], ["Future", "Future", "Future", "Corporate", "Legacy"], ["Legacy", "Legacy", "District", "Future", "Future"], ["Legacy", "Legacy", "Legacy", "Legacy", "Legacy"], ["Future", "Legacy", "Legacy", "Future", "Corporate"], ["Legacy", "Legacy", "District", "Legacy", "Legacy"], ["Legacy", "Corporate", "Corporate", "Legacy", "Legacy"]]
        let callFunction = () => {
            index.default(param1, "C:\\\\path\\to\\file.ext", "callback detected, not supported yet")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let param1 = [["Legacy", "District", "Corporate", "Legacy", "Legacy"], ["District", "Legacy", "Future", "Future", "Legacy"], ["District", "Future", "Future", "District", "District"], ["Legacy", "Future", "District", "Corporate", "Legacy"], ["Future", "Legacy", "District", "Corporate", "District"], ["Corporate", "Legacy", "District", "Future", "Legacy"], ["Future", "Future", "Legacy", "Legacy", "Future"]]
        let callFunction = () => {
            index.default(param1, "./path/to/file", "callback detected, not supported yet")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let param1 = [["Legacy", "Legacy", "Legacy", "District", "Legacy"], ["Future", "Legacy", "Future", "Legacy", "Legacy"], ["Legacy", "Legacy", "Future", "Future", "Legacy"], ["Future", "Legacy", "District", "Legacy", "District"], ["Legacy", "District", "Corporate", "Legacy", "Legacy"], ["District", "Legacy", "Legacy", "Legacy", "District"], ["Future", "District", "District", "Future", "Corporate"]]
        let callFunction = () => {
            index.default(param1, "/path/to/file", "callback detected, not supported yet")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let param1 = [["Legacy", "Legacy", "Legacy", "District", "Future"], ["Legacy", "Future", "Legacy", "Legacy", "Corporate"], ["Future", "District", "Legacy", "Legacy", "Corporate"], ["Legacy", "Corporate", "District", "Future", "Future"], ["Legacy", "Corporate", "Future", "Future", "Corporate"], ["Legacy", "District", "Legacy", "Future", "Corporate"], ["Corporate", "Legacy", "Legacy", "Legacy", "Future"]]
        let callFunction = () => {
            index.default(param1, "/path/to/file", "callback detected, not supported yet")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            index.default(undefined, undefined, "")
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("parse", () => {
    test("0", () => {
        let callFunction = () => {
            parse("C:\\\\path\\to\\file.ext")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            parse(".")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            parse("path/to/file.ext")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            parse("path/to/folder/.path/to/folder/")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            parse("./path/to/file")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            parse(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
