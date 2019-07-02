"use strict"

/**
 * Function that takes two parameters, a string and an integer.
 * The function will return another string that is similar to the input
 * string, but with certain characters removed. It's going to remove
 * characters from consecutive runs of the same character, where the
 * length of the run is greater than the input parameter.
 *
 * @param {String} inString
 * @param {Number} inCount
 */
var processString = function (input_string, max_consecutive_chars) {
    var output = "";
    var prev_char = undefined;
    var current_char_seen = 0;
    for (var current_char in input_string) {
        if (input_string[current_char] == prev_char) {
            current_char_seen += 1;

        } else {
            current_char_seen = 0;
            prev_char = input_string[current_char];
        }

        if (current_char_seen < max_consecutive_chars) {
            output += input_string[current_char];
        }
    }
    return output;
}

console.log(processString('aaab', 2));
console.log(processString('aabbaa', 1));