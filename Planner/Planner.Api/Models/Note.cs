namespace Planner.Api.Models
{
    public class Note
    {
        public int NoteId { get; set; }
        public string Title { get; set; }
        public string Text { get; set; }
        public bool IsActive { get; set; }
    }
}
