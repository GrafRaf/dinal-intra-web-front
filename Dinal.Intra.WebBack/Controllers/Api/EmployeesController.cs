using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Dinal.Intra.WebBack.Models;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace Dinal.Intra.WebBack.Controllers.Api
{
    [Route("api/[controller]")]
    public class EmployeesController : Controller
    {
        private readonly DomainModelPostgreSqlContext _context;

        public EmployeesController(DomainModelPostgreSqlContext context)
        {
            _context = context;
        }

        // GET: api/employees
        [HttpGet]
        public IEnumerable<Employee> Get()
        {
            return _context.Employees.ToList();
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public Employee Get(int id)
        {
            return _context.Employees.Where( employee => employee.Id == id).SingleOrDefault();
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody]Employee employee)
        {
            _context.Employees.Add(employee);
            _context.SaveChanges();
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {

        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
