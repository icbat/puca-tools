describe("removeDuplicates", function() {
  it("removes duplicates", function() {
    var expected = ['joel'];
    var input = ['joel', 'joel'];

    var actual = module_addresses.removeDuplicates(input);

    expect(actual).toEqual(expected);
  });

  it("doesn't remove unique items", function() {
    var expected = ['joel', 'ginny'];
    var input = ['joel', 'ginny'];

    var actual = module_addresses.removeDuplicates(input);

    expect(actual).toEqual(expected);
  });

  it("doesn't panic on empty list", function() {
    var expected = [];
    var input = [];

    var actual = module_addresses.removeDuplicates(input);

    expect(actual).toEqual(expected);
  });

  it("panics on not-array", function() {
    var input = "[]";

    var toExecute = function() {module_addresses.removeDuplicates(input);};

    expect(toExecute).toThrow(new TypeError("array.filter is not a function"));
  });
});
