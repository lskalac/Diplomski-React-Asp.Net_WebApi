using System.Collections.Generic;
using System.Threading.Tasks;

namespace Planner.Api.Services
{
    public interface ITaskService
    {
        Task<IEnumerable<Models.Task>> GetAsync();
        Task<IEnumerable<Models.Task>> GetByPriority(int id);
        Task<IEnumerable<Models.Task>> GetTodaysTasks();
        Task<bool> CloseTaskAsync(int id);
        Task<int> InsertAsync(Models.Task task);
        Task<bool> UpdateAsync(Models.Task task);
        Task<bool> DeleteAsync(int id);
    }
}
