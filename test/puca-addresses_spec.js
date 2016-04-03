describe("send a card page", function() {
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

      expect(toExecute).toThrow();
    });
  });

  describe("addBlankAddressLine2", function() {
    it("adds a blank address line 2", function() {
      var expected = "a<br>b<br><br>d<br>";
      var input = "a<br>b<br>d<br>";

      var actual = module_addresses.addBlankAddressLine2(input);

      expect(actual).toEqual(expected);
    });

    it("characterize what happens when you send nothing", function() {
      var expected = "<br>";
      var input = "";

      var actual = module_addresses.addBlankAddressLine2(input);

      expect(actual).toEqual(expected);
    });

    it("characterize what happens when you send nothing", function() {
      var expected = "asdfawef<br>asdfasdf<br>";
      var input = "asdfawef<br>asdfasdf";

      var actual = module_addresses.addBlankAddressLine2(input);

      expect(actual).toEqual(expected);
    });
  });

  describe("normalizeAddress", function() {
    it("does nothing if there's 4 lines", function() {
      var expected = "a<br>b<br>c<br>d<br>";
      var input = "a<br>b<br>c<br>d<br>";

      var actual = module_addresses.normalizeAddress(input);

      expect(actual).toEqual(expected);
    });

    it("adds a blank line if there's 3 lines", function() {
      var expected = "a<br>b<br><br>d<br>";
      var input = "a<br>b<br>d<br>";

      var actual = module_addresses.normalizeAddress(input);

      expect(actual).toEqual(expected);
    });

    it("characterize that it adds a blank line if there's less than 3 lines", function() {
      var expected = "a<br><br>";
      var input = "a<br>";

      var actual = module_addresses.normalizeAddress(input);

      expect(actual).toEqual(expected);
    });
  });
});
