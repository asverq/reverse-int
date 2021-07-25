module.exports = function reverse(n) {
    let res = Math.abs(n);
    res = res.toString().split("").reverse().join("");
    return res;
};

