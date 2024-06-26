public int MaxProfit(int[] prices) {
    int smlIndex = 0; // Buy day
    int lrgIndex = 0; // Sell day
    int profit = 0;

    for(int i = 0; i < prices.Length; i++) {
        for(int j = 1; j < prices.Length; j++) {

            if(prices[j] - prices[i] > profit) {
                profit = prices[j] - prices[i];
                smlIndex = j;
                lrgIndex = i;
            }
        }
        
    }
    return $"{profit} = {smlIndex} - {lrgIndex}";
}


int[] prices = [7,1,5,3,6,4];

Console.WriteLine(MaxProfit(prices));
