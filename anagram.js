function Anagram() {
    "use strict";
    this.find = function () {
        return _.filter(_.groupBy(Array.prototype.slice.call(arguments), function (word) {
            return _.sortBy(word.split(''), function (character) {
                    return character;
                }).join('');
        }), function (group) {
            return group.length > 1;
        });
    };
}