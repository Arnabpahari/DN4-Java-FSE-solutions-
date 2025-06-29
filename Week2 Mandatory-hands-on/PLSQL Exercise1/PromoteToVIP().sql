DELIMITER //

CREATE PROCEDURE PromoteToVIP()
BEGIN
  -- Set IsVIP to TRUE for customers with balance above 10000
  UPDATE Customers
  SET IsVIP = TRUE
  WHERE Balance > 10000;
END //

DELIMITER ;
