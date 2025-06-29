DELIMITER //

CREATE PROCEDURE TransferFunds(
  IN fromAccount INT,
  IN toAccount INT,
  IN amount DECIMAL(10,2)
)
BEGIN
  DECLARE fromBalance DECIMAL(12,2);

  -- Get balance of source account
  SELECT Balance INTO fromBalance
  FROM Accounts
  WHERE AccountID = fromAccount;

  -- Check if sufficient funds exist
  IF fromBalance >= amount THEN
    -- Deduct from source
    UPDATE Accounts
    SET Balance = Balance - amount
    WHERE AccountID = fromAccount;

    -- Add to destination
    UPDATE Accounts
    SET Balance = Balance + amount
    WHERE AccountID = toAccount;
  ELSE
    SIGNAL SQLSTATE '45000'
    SET MESSAGE_TEXT = 'Insufficient balance in source account';
  END IF;
END //

DELIMITER ;
