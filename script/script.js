
function message(a) {
if (typeof a != 'string') {
    return ('Not string');
} else if (typeof a === 'string') {
let str = a.trim();
    if (str.length > 30) {
        return str.replace(str.slice(30, str.length), '...');
}
}
}
