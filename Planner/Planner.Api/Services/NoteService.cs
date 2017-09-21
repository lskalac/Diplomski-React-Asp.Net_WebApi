using Planner.Api.Dal;
using Planner.Api.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Planner.Api.Services
{
    public class NoteService : INoteService
    {
        private readonly IRepository _repository;

        public NoteService(IRepository repository)
        {
            _repository = repository;
        }


        public Task<IEnumerable<Note>> GetAsync()
        {
            return _repository.QueryAsync<Note>(@"
            Select * from dbo.Note;");
        }

        public Task<Note> GetByIdAsync(int id)
        {
            return _repository.QuerySingleAsync<Note>(@"
            Select * from dbo.Note where NoteId = @NoteId;", 
            new { NoteId = id});
        }

        public Task<int> InsertAsync(Note note)
        {
            return _repository.QuerySingleAsync(@"
            Declare @IdentityOutput table (id int);
            Insert into dbo.Note(Title, Text, IsActive)
            output inserted.NoteId into @IdentityOutput
            values (@Title, @Text, @IsActive);
            Select id from @IdentityOutput;",
            note);
        }

        public async Task<bool> UpdateAsync(Note note)
        {
            return (await _repository.ExecuteAsync(@"
            Update dbo.Note
            set Title = @Title,
            Text = @Text,
            IsActive = @IsActive
            where NoteId = @NoteId;",
            note)) > 0;
        }

        public async Task<bool> DeleteAsync(int id)
        {
            return (await _repository.ExecuteAsync(@"
            Delete from dbo.Note where NoteId = @NoteId;",
            new { NoteId = id })) > 0;
        }

        public async Task<bool> MarkAsActiveAsync(int id)
        {
            if ((await _repository.ExecuteAsync(@"
            Update dbo.Note
            Set IsActive = 0")) > 0)
            {
                return (await _repository.ExecuteAsync(@"
                Update dbo.Note
                set IsActive = 1
                where NoteId = @NoteId",
                new { NoteId = id })) > 0;
            }

            return false;
        }
    }
}
