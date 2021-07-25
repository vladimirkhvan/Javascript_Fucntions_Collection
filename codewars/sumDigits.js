function digital_root(n) {
    if (n < 10) {
        return n;
    }
    return digital_root(+(n.toString().split("").reduce((sum, current) => sum += +current, 0)));
}