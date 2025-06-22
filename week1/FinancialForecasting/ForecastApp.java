public class ForecastApp {
    public static void main(String[] args) {
        double presentValue = 10000.0;
        double growthRate = 0.07;   
        int years = 5;                     

        System.out.println("=== Financial Forecast ===");

        double fvRecursive = FutureValueCalculator.futureValueRecursive(presentValue, growthRate, years);
        System.out.printf("Future Value (Recursive): ₹%.2f%n", fvRecursive);

        double[] memo = new double[years + 1];
        double fvMemoized = FutureValueCalculator.futureValueMemo(presentValue, growthRate, years, memo);
        System.out.printf("Future Value (Memoized): ₹%.2f%n", fvMemoized);
    }
}
