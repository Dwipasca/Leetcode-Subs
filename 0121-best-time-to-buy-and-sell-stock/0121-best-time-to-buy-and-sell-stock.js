
// note: we cannot sell the stock on the day we buy it and before

// to solve this problem we will use sliding windows

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    
    // initialization var left = 0; right = 1 and maxProfit = 0
    // left stand for buy stock and right stand for sell stock
    let left = 0;
    let right = 1;
    let maxProfit = 0;

    // looping as long as right value is lower than prices.length
    while (right < prices.length) {

        // if sell stock is lower or equals than buy stock
        // then swap value
        if (prices[right] <= prices[left]) {
            left = right;
        }

        // calculate the profit
        let profit = prices[right] - prices[left]

        // compare which one is the biggest profit
        maxProfit = Math.max(profit, maxProfit);

        // increase right value or you can say change the day we sell the stock
        right++;
    }

    return maxProfit;
};

// big O space = O(1)
// big O time  = O(N)