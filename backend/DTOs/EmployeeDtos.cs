namespace EmployeeApi.DTOs;

public class EmployeeDto
{
    public int Id { get; set; }
    public string FirstName { get; set; } = "";
    public string LastName { get; set; } = "";
    public DateTime DateOfBirth { get; set; }
    public string EducationLevel { get; set; } = "";
}

public class CreateEmployeeDto
{
    public string FirstName { get; set; } = "";
    public string LastName { get; set; } = "";
    public DateTime DateOfBirth { get; set; }
    public string EducationLevel { get; set; } = "";
}

public class UpdateEmployeeDto
{
    public string FirstName { get; set; } = "";
    public string LastName { get; set; } = "";
    public DateTime DateOfBirth { get; set; }
    public string EducationLevel { get; set; } = "";
}
