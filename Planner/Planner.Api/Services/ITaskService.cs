using System.Collections.Generic;
using System.Threading.Tasks;

namespace Planner.Api.Services
{
    public interface ITaskService
    {
        Task<IEnumerable<Models.Task>> GetAsync();
        Task<IEnumerable<Models.Task>> GetByPriority(int id);
        Task<IEnumerable<Models.Task>> GetTodaysTasks();
        //Task<Planner.Model.Task> GetByIdAsync(int id);
        //Task<int> InsertAsync(Planner.Model.Task task);
        //Task<bool> UpdateAsync(Planner.Model.Task task);
        //Task<bool> DeleteAsync(int id);
    }
}
