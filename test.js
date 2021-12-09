function sum()={
    let newSum = 0;
    for (let i = 2; i <= 50; i += 2) {
        newSum += i;
    }
    return [newSum];
}