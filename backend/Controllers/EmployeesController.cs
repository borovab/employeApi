using Microsoft.AspNetCore.Mvc;
using EmployeeApi.Data;
using EmployeeApi.Models;
using Microsoft.EntityFrameworkCore;

namespace EmployeeApi.Controllers;

[ApiController]
[Route("api/[controller]")]
public class EmployeesController : ControllerBase
{
    private readonly AppDbContext _db;

    public EmployeesController(AppDbContext db)
    {
        _db = db;
    }

    // GET /api/employees
    [HttpGet]
    public async Task<IActionResult> GetAll()
    {
        var list = await _db.Employees.ToListAsync();
        return Ok(list);
    }

    // GET /api/employees/{id}
    [HttpGet("{id}")]
    public async Task<IActionResult> Get(int id)
    {
        var emp = await _db.Employees.FindAsync(id);
        if (emp == null) return NotFound();
        return Ok(emp);
    }

    // POST /api/employees
    [HttpPost]
    public async Task<IActionResult> Create([FromBody] Employee e)
    {
        try
        {
            _db.Employees.Add(e);
            await _db.SaveChangesAsync();
            return Ok(e);
        }
        catch (Exception ex)
        {
            return StatusCode(500, $"Gabim: {ex.Message}");
        }
    }

    // PUT /api/employees/{id}
    [HttpPut("{id}")]
    public async Task<IActionResult> Update(int id, [FromBody] Employee e)
    {
        var existing = await _db.Employees.FindAsync(id);
        if (existing == null) return NotFound();

        try
        {
            existing.FirstName = e.FirstName;
            existing.LastName = e.LastName;
            existing.DateOfBirth = e.DateOfBirth;
            existing.EducationLevel = e.EducationLevel;

            await _db.SaveChangesAsync();
            return Ok(existing);
        }
        catch (Exception ex)
        {
            return StatusCode(500, $"Gabim: {ex.Message}");
        }
    }

    // DELETE /api/employees/{id}
    [HttpDelete("{id}")]
    public async Task<IActionResult> Delete(int id)
    {
        var emp = await _db.Employees.FindAsync(id);
        if (emp == null) return NotFound();

        _db.Employees.Remove(emp);
        await _db.SaveChangesAsync();
        return Ok();
    }
}
