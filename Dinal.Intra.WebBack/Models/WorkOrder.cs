using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Dinal.Intra.WebBack.Models
{
    public class WorkOrder
    {
        [Key]
        public int Id { get; set; }
        public string Name { get; set; }
        [ForeignKey("Id")]
        public Order Order { get; set; }
        [ForeignKey("Id")]
        public Employee Employee { get; set; }
    }
}
