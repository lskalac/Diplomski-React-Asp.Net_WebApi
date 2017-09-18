using Dapper.Contrib.Extensions;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Planner.Model
{
    [Table("dbo.Task")]
    public class Task
    {
        [Key]
        public int TaskId { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public int? CategoryId { get; set; }
        public int PriorityId { get; set; }
        public bool IsCompleted { get; set; }
        public DateTime? DueDateTime { get; set; }
        public string DueDateTimeToString { get; set; }
    }
}
