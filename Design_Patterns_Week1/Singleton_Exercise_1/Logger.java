public class Logger {
// Singleton pattern implementation for Logger
// Ensures that only one instance of Logger exists throughout the application.
    private static Logger instance;
    private Logger() {
        System.out.println("Logger instance created.");
    }
    public static Logger getInstance() {
        if (instance == null) {
            instance = new Logger();
        }
        return instance;
    }
    public void log(String message) {
        System.out.println("Log: " + message);
    }
}
