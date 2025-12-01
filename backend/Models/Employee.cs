namespace EmployeeApi.Models;

public enum EducationLevel
{
    Primary = 1,
    Secondary = 2,
    Bachelor = 3,
    Master = 4,
    Doctorate = 5
}

public class Employee
{
    public int Id { get; set; }
    public string FirstName { get; set; } = "";
    public string LastName { get; set; } = "";
    public DateTime DateOfBirth { get; set; }
    public EducationLevel EducationLevel { get; set; }
}
