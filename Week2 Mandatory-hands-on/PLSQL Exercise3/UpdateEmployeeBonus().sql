DELIMITER //

CREATE PROCEDURE UpdateEmployeeBonus(
  IN dept_name VARCHAR(50),
  IN bonus_percent DECIMAL(5,2)
)
BEGIN
  -- Give bonus to employees of the specified department
  UPDATE Employees
  SET Salary = Salary + (Salary * bonus_percent / 100)
  WHERE Department = dept_name;
END //

DELIMITER ;
