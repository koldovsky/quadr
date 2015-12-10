function quadr(a, b, c) {
    var d = Math.pow(b, 2) - 4 * a * c;
    if (d < 0) {
        return 'Рівняння не має розв\'язків';
    } 
    if (d === 0) {
        var x = -b / (2*a);
        return 'x = ' + x;
    }
    var x1 = (- b - Math.sqrt(d)) / (2*a);
    var x2 = (- b + Math.sqrt(d)) / (2*a);
    return 'x1 = ' + x1 + ', x2 = ' + x2;
}
