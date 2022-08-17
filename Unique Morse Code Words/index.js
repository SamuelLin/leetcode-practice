// https://leetcode.com/problems/unique-morse-code-words/
/**
 * @param {string[]} words
 * @return {number}
 */

const dictionary = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
const alpha = "abcdefghijklmnopqrstuvwxyz".split("");
const alphaMap = alpha.reduce((acc, alpha, index) => {
    acc[alpha] = dictionary[index];
    return acc;
}, {})

var uniqueMorseRepresentations = function(words) {
    const keys =  words.reduce((acc, word) => {
        const str = word.split('').map(w => alphaMap[w]).join('');
        acc[str] = true;
        return acc;
    }, {});
    
    return Object.keys(keys).length;
};
