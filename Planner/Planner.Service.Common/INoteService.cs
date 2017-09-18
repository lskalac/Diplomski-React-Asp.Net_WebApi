using Planner.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Planner.Service.Common
{
    public interface INoteService
    {
        Task<IEnumerable<Note>> GetAsync();
        Task<Note> GetByIdAsync(int id);
        Task<int> InsertAsync(Note note);
        Task<bool> UpdateAsync(Note note);
        Task<bool> DeleteAsync(int id);
        Task<bool> MarkAsActiveAsync(int id);
    }
}
