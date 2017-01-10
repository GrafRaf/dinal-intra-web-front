using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Dinal.Intra.WebBack.Models;
using Microsoft.EntityFrameworkCore;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace Dinal.Intra.WebBack.Controllers.Api
{
    [Route("api/[controller]")]
    public class WorkOrdersController : Controller
    {
        private readonly DomainModelSqlContext _context;

        public WorkOrdersController(DomainModelSqlContext context)
        {
            _context = context;
        }

        // GET: api/workorders
        [HttpGet]
        public IEnumerable<WorkOrder> Get()
        {
            return _context.WorkOrders
                .Include(workorder=>workorder.Employee)
                .Include(workorder => workorder.Order)
                .ToList();
        }

        // GET api/workorders/5
        [HttpGet("{id}")]
        public WorkOrder Get(int id)
        {
            return _context.WorkOrders.Where( workorder => workorder.Id == id).SingleOrDefault();
        }

        // POST api/workorders
        [HttpPost]
        public void Post([FromBody]WorkOrder workorder)
        {
            var ee = _context.WorkOrders.Add(new WorkOrder() { Name = workorder.Name });
            _context.SaveChanges();
            ee.Entity.Order = _context.Orders.Where(order => order.Id == workorder.Order.Id).SingleOrDefault();
            ee.Entity.Employee = _context.Employees.Where(employee => employee.Id == workorder.Employee.Id).SingleOrDefault();
            _context.WorkOrders.Update(ee.Entity);
            _context.SaveChanges();
        }

        // PUT api/workorders/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]WorkOrder value)
        {

        }

        // DELETE api/workorders/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
