import java.util.Arrays;
import java.util.Comparator;

public class ProductSearch {

    public static Product linearSearch(Product[] products, String targetName) {
        for (Product product : products) {
            if (product.productName.equalsIgnoreCase(targetName)) {
                return product;
            }
        }
        return null;
    }

    public static Product binarySearch(Product[] products, String targetName) {
        int left = 0, right = products.length - 1;
        while (left <= right) {
            int mid = left + (right - left) / 2;
            int cmp = products[mid].productName.compareToIgnoreCase(targetName);
            if (cmp == 0)
                return products[mid];
            else if (cmp < 0)
                left = mid + 1;
            else
                right = mid - 1;
        }
        return null;
    }

    public static void main(String[] args) {
        Product[] products = {
                new Product(1001, "Computer", "Electronics"),
                new Product(1002, "T-shirt", "Apparel"),
                new Product(1003, "Mobile", "Electronics"),
                new Product(1004, "Shoes", "Footwear"),
                new Product(1005, "Watch", "Accessories"),
                new Product(1006, "Laptop", "Electronics"),
                new Product(1007, "Jeans", "Apparel"),
                new Product(1008, "Smartphone", "Electronics"),
                new Product(1009, "Sneakers", "Footwear"),
                new Product(1010, "Backpack", "Accessories"),
                new Product(1011, "Tablet", "Electronics"),
                new Product(1012, "Jacket", "Apparel"),
                new Product(1013, "Sandals", "Footwear"),
                new Product(1014, "Sunglasses", "Accessories"),
                new Product(1015, "Headphones", "Electronics")
        };
        System.out.println("Linear Search:");
        Product linearResult = linearSearch(products, "Shoes");
        System.out.println(linearResult != null ? linearResult : "Not found");
        Arrays.sort(products, Comparator.comparing(p -> p.productName.toLowerCase()));
        System.out.println("\nBinary Search:");
        Product binaryResult = binarySearch(products, "Jacket");
        System.out.println(binaryResult != null ? binaryResult : "Not found");
    }
}
