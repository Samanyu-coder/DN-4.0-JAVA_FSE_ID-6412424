package com.library;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import com.library.service.BookService;

public class LibraryManagementApplication {
    public static <ApplicationContext> void main(String[] args) {
        ApplicationContext context = new com.library.ClassPathXmlApplicationContext("applicationContext.xml");
        BookService service = context.getBean("bookService", BookService.class);
        service.addBook("Spring in Action");
    }
}
