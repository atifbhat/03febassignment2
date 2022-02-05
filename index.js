var restoreString = function(s, indices) {
    var sort = [];
    for (let i = 0; i < s.length; i++) {
        sort[indices[i]] = s[i];
    }

    return sort.join("");

};
var result = restoreString("codeleet", [4, 5, 6, 7, 0, 2, 1, 3]);
document.write(result);