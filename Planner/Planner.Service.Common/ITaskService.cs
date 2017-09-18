using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Planner.Model;

namespace Planner.Service.Common
{
    public interface ITaskService
    {
        Task<IEnumerable<Planner.Model.Task>> GetAsync();
        Task<IEnumerable<Model.Task>> GetByPriority(int id);
        Task<IEnumerable<Model.Task>> GetTodaysTasks();
        //Task<Planner.Model.Task> GetByIdAsync(int id);
        //Task<int> InsertAsync(Planner.Model.Task task);
        //Task<bool> UpdateAsync(Planner.Model.Task task);
        //Task<bool> DeleteAsync(int id);
    }
}
