package com.cognizant.spring_learn;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class HelloWorldWebServiceApplication {

	//private static final Logger LOGGER = LoggerFactory.getLogger(SpringLearnApplication.class);

	public static void main(String[] args) {
		SpringApplication.run(HelloWorldWebServiceApplication.class, args);
	}

//	public static Country displayCountry() {
//		ApplicationContext context = new ClassPathXmlApplicationContext("country.xml");
//		Country country = (Country) context.getBean("country", Country.class);
//		LOGGER.debug("Country : {}", country.toString());
//		return country;
//	}

	// Optional: If you still want to print the country in console at startup
	// This will NOT block the Spring Boot web context like your previous code
	// Safe to remove if not needed
    /*
    @Bean
    public CommandLineRunner run() {
        return args -> {
            displayCountry();
        };
    }
    */
}

