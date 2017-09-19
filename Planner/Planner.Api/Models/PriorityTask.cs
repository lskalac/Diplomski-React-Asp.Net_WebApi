using System.Collections.Generic;

namespace Planner.Api.Models
{
    public class PriorityTask
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public IEnumerable<Task> Tasks { get; set; }
    }
}
