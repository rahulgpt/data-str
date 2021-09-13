// Requirements to implement a dynamic programming solution to a problem
// - overlapping subproblems
// - optimal substructure

// recursive solution to find the nth element of fibonacci series 
function fib(n) {
    if (n <= 2) return 1;
    return fib(n - 1) + fib(n - 2)
}

// recursion + memoization solution
function fibonacci(n, memo = []) {
    if (memo[n] !== undefined) return memo[n];
    if (n <= 2) return 1;
    let res = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
    memo[n] = res;
    return res;
}

// tabulation version 
function fibTabulation(n) {
    if (n <= 2) return 1;
    let fibNums = [0, 1, 1];
    for (let i = 3; i <= n; i++) {
        fibNums[i] = fibNums[i - 1] + fibNums[i - 2];
    }
    return fibNums[n];
}
