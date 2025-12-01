using System.ComponentModel.DataAnnotations;
using EmployeeApi.Models;

namespace EmployeeApi.DTOs;

public class EmployeeDto
{
    public int Id { get; set; }
    public string FirstName { get; set; } = "";
    public string LastName { get; set; } = "";
    public DateTime DateOfBirth { get; set; }
    public EducationLevel EducationLevel { get; set; }
    public int Age { get; set; }
}

public class CreateEmployeeDto
{
    [Required] public string FirstName { get; set; } = "";
    [Required] public string LastName { get; set; } = "";
    [Required] public DateTime DateOfBirth { get; set; }
    [Required] public EducationLevel EducationLevel { get; set; }
}

public class UpdateEmployeeDto : CreateEmployeeDto {}
