DELIMITER //

CREATE PROCEDURE ShowLoanReminders()
BEGIN
  -- Select loans due within the next 30 days and show reminder messages
  SELECT 
    CONCAT('Reminder: Dear ', C.Name, 
           ', your loan (ID: ', L.LoanID, 
           ') is due on ', DATE_FORMAT(L.DueDate, '%d-%b-%Y')) AS ReminderMessage
  FROM Loans L
  JOIN Customers C ON L.Customer_Id = C.Customer_Id
  WHERE L.DueDate BETWEEN CURDATE() AND (CURDATE() + INTERVAL 30 DAY);
END //

DELIMITER ;
