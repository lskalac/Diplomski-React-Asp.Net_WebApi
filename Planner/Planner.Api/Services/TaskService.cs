using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Globalization;
using Planner.Api.Dal;

namespace Planner.Api.Services
{
    public class TaskService : ITaskService
    {
        private readonly IRepository _repository;

        public TaskService(IRepository repository)
        {
            _repository = repository;
        }


        public Task<IEnumerable<Models.Task>> GetAsync()
        {
            return _repository.QueryAsync<Models.Task>(@"
            Select * from dbo.Task;");
        }

        public async Task<IEnumerable<Models.Task>> GetByPriority(int id)
        {
            var tasks = await _repository.QueryAsync<Models.Task>(@"
            Select * from dbo.Task
            where PriorityId = @PriorityId",
            new { PriorityId = id });

            foreach (var task in tasks)
            {
                task.DueDateTimeToString = task.DueDateTime.Value.ToString("dd/MM/yyyy HH:mm", CultureInfo.InvariantCulture);
            }

            return tasks.OrderBy(x => x.DueDateTime);
        }

        public async Task<IEnumerable<Models.Task>> GetTodaysTasks()
        {
            var currentDate = DateTime.UtcNow;

            var tasks = await _repository.QueryAsync<Models.Task>(@"
            Select * from dbo.Task
            where cast(DueDateTime as date) = cast(@CurrentDate as date)",
            new { CurrentDate = currentDate });

            foreach (var task in tasks)
            {
                task.DueDateTimeToString = task.DueDateTime.Value.ToString("dd/MM/yyyy HH:mm", CultureInfo.InvariantCulture);
            }

            return tasks.OrderBy(x => x.DueDateTime).ThenBy(x => x.PriorityId);
        }

        //public Task<Model.Task> GetByIdAsync(int id)
        //{
        //    return _repository.GetById<Model.Task>(id);
        //}

        //public Task<int> InsertAsync(Model.Task task)
        //{
        //    return _repository.InsertAsync(task);
        //}

        //public Task<bool> UpdateAsync(Model.Task task)
        //{
        //    return _repository.UpdateAsync(task);
        //}

        //public Task<bool> DeleteAsync(int id)
        //{
        //    return _repository.DeleteAsync<Model.Task>(id);
        //}
    }
}
