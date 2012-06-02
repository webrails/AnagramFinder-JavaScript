(function () {
    "use strict";
    describe("Anagram", function () {
        beforeEach(function () {
            this.anagramFinder = new Anagram();
        });
        it("should be instantiable", function () {
            expect(this.anagramFinder).toBeTruthy();
        });
        describe("find", function () {
            it("should be a function", function () {
                expect(_.isFunction(this.anagramFinder.find)).toBeTruthy();
            });
            it("should return an empty Array", function () {
                expect(this.anagramFinder.find()).toEqual([]);
            });
            it("should return an empty Array", function () {
                expect(this.anagramFinder.find("meat", "mat", "team", "mate", "eat")).toEqual([["meat", "team", "mate"]]);
            });
            it("should return an empty Array", function () {
                expect(this.anagramFinder.find("veer", "lake", "item", "kale", "mite", "ever")).toEqual([["veer", "ever"], ["lake", "kale"], ["item", "mite"]]);
            });
        });
    });
})();