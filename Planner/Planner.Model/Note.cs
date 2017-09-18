using Dapper.Contrib.Extensions;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Planner.Model
{
    [Table("dbo.Note")]
    public class Note
    {
        [Key]
        public int NoteId { get; set; }
        public string Title { get; set; }
        public string Text { get; set; }
        public bool IsActive { get; set; }
    }
}
