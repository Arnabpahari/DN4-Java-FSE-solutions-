import java.util.Arrays;

public class ECommerceSearchApp {
    public static void main(String[] args) {
        Product[] products = {
            new Product(103, "Laptop", "Electronics"),
            new Product(101, "Shirt", "Clothing"),
            new Product(104, "Headphones", "Electronics"),
            new Product(102, "Shoes", "Footwear")
        };

        System.out.println("Linear Search Result:");
        Product result1 = SearchService.linearSearchByName(products, "Shoes");
        System.out.println(result1 != null ? result1 : "Product not found");

        Arrays.sort(products);

        System.out.println("\nBinary Search Result:");
        Product result2 = SearchService.binarySearchById(products, 104);
        System.out.println(result2 != null ? result2 : "Product not found");
    }
}
