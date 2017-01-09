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
    public class OrdersController : Controller
    {
        private readonly DomainModelPostgreSqlContext _context;

        public OrdersController(DomainModelPostgreSqlContext context)
        {
            _context = context;
        }

        // GET: api/orders
        [HttpGet]
        public IEnumerable<Order> Get()
        {
            return _context.Orders.ToList();
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public Order Get(int id)
        {
            return _context.Orders.Where( order => order.Id == id).SingleOrDefault();
        }

        // POST api/orders
        [HttpPost]
        public void Post([FromBody]Order order)
        {
            _context.Orders.Add(order);
            _context.SaveChanges();
        }

        // PUT api/orders/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]Order value)
        {

        }

        // DELETE api/orders/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
