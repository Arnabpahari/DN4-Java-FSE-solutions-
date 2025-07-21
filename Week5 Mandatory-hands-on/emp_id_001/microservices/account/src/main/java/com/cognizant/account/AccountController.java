package com.cognizant.account;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/accounts")
public class AccountController {

    @Autowired
    private AccountRepository accountRepository;

    // Get accounts by customer ID
    @GetMapping("/{customerId}")
    public List<Account> getAccountsByCustomerId(@PathVariable int customerId) {
        return accountRepository.findByCustomerId(customerId);
    }

    // Get all accounts
    @GetMapping
    public List<Account> getAllAccounts() {
        return accountRepository.findAll();
    }
}
