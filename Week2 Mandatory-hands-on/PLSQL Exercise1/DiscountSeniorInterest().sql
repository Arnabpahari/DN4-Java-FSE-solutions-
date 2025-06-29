DELIMITER //

CREATE PROCEDURE DiscountSeniorInterest()
BEGIN
  UPDATE Loans
  SET InterestRate = InterestRate - 1
  WHERE CustomerID IN (
    SELECT CustomerID FROM Customers WHERE Age > 60
  );
END //

DELIMITER ;
