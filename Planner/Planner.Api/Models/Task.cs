using System;

namespace Planner.Api.Models
{
    public class Task
    {
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
