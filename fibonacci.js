function fibs(n) {
    let prev = 0;
    let current = 1;
    const result = [prev, current];

    for (let i = 2; i < n; i++) {
        const next = prev + current;
        prev = current;
        current = next;

        result.push(next);
    }

    return result;
}

function fibsRec(n) {
    if (n === 1) return [0];
    if (n === 2) return [0, 1];

    const fibs = fibsRec(n - 1);

    fibs.push(fibs[fibs.length - 1] + fibs[fibs.length - 2]);

    return fibs;
}