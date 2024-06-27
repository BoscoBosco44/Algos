    public int MaxProfit(int[] prices) {       // Works but is slow
        int smlIndex = 0; // Buy day
        int lrgIndex = 0; // Sell day
        int profit = 0;
        int counter = 1;

        for(int i = 0; i < prices.Length; i++) {
            for(int j = counter; j < prices.Length; j++) {

                if(prices[j] - prices[i] > profit) {
                    profit = prices[j] - prices[i];
                    smlIndex = j;
                    lrgIndex = i;
                }
            }
            counter++;
            
        }
        return profit;
    }