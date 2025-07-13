public class FinancialForecast {

    public static double futureValueRecursive(double presentValue, double growthRate, int years) {
        if (years == 0) return presentValue;
        return futureValueRecursive(presentValue, growthRate, years - 1) * (1 + growthRate);
    }

    public static double futureValueMemo(double presentValue, double growthRate, int years, Double[] memo) {
        if (years == 0) return presentValue;
        if (memo[years] != null) return memo[years];

        memo[years] = futureValueMemo(presentValue, growthRate, years - 1, memo) * (1 + growthRate);
        return memo[years];
    }

    public static void main(String[] args) {
        double presentValue = 300.0;
        double growthRate = 0.20;
        int years = 10;

        System.out.println("Recursive Calculation:");
        double resultRecursive = futureValueRecursive(presentValue, growthRate, years);
        System.out.printf("Future value after %d years: %.2f\n", years, resultRecursive);

        System.out.println("\nOptimized with Memoization:");
        Double[] memo = new Double[years + 1];
        double resultMemo = futureValueMemo(presentValue, growthRate, years, memo);
        System.out.printf("Future value after %d years: %.2f\n", years, resultMemo);
    }
}
