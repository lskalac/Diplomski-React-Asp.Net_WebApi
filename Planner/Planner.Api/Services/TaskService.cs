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

        public Task<int> InsertAsync(Models.Task task)
        {
            try
            {
                task.DueDateTime = DateTime.ParseExact(task.DueDateTimeToString, "dd/MM/yyyy HH:mm", CultureInfo.InvariantCulture);
                return _repository.QuerySingleAsync(@"
                Declare @IdentityOutput table (id int);
                Insert into dbo.Task(Name, Description, PriorityId, IsCompleted, DueDateTime)
                output inserted.TaskId into @IdentityOutput
                values (@Name, @Description, @PriorityId, @IsCompleted, @DueDateTime);
                Select id from @IdentityOutput;",
                    task);
            }
            catch (Exception ex)
            {

                throw;
            }

        }

        public async Task<bool> UpdateAsync(Models.Task task)
        {
            return (await _repository.ExecuteAsync(@"
            update dbo.Task
            set Name = @Name,
            Description = @Description,
            PriorityId = @PriorityId
            IsCompleted = @IsCompleted,
            DueDateTime = @DueDateTime;",
            task)) > 0;
        }

        public async Task<bool> DeleteAsync(int id)
        {
            return (await _repository.ExecuteAsync(@"
            delete from dbo.Task
            where TaskId = @TaskId;", 
            new { TaskId = id })) > 0;
        }

        public async Task<bool> CloseTaskAsync(int id)
        {
            return (await _repository.ExecuteAsync(@"
            update dbo.Task
            set IsCompleted = 1
            where TaskId = @TaskId;",
            new { TaskId = id })) > 0;
        }
    }
}
