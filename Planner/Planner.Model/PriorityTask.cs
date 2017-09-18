using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Planner.Model
{
    public class PriorityTask
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public IEnumerable<Task> Tasks { get; set; }
    }
}
