DELIMITER //

CREATE PROCEDURE ProcessMonthlyInterest()
BEGIN
  -- Apply 1% interest to all Savings accounts
  UPDATE Accounts
  SET Balance = Balance * 1.01
  WHERE AccountType = 'Savings';
END //

DELIMITER ;
