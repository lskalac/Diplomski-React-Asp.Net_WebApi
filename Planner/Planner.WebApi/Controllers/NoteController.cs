using Planner.Model;
using Planner.Service.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Cors;

namespace Planner.WebApi.Controllers
{
    [RoutePrefix("api/note")]
    public class NoteController : ApiController
    {
        private readonly INoteService _noteService;

        public NoteController(INoteService noteService)
        {
            _noteService = noteService;
        }


        [HttpGet, Route("")]
        public async Task<IHttpActionResult> Get()
        {
            return Ok(await _noteService.GetAsync());
        }

        [HttpGet, Route("{id}")]
        public async Task<IHttpActionResult> GetById([FromUri]int id)
        {
            return Ok(await _noteService.GetByIdAsync(id));
        }

        [HttpPost, Route("")]
        public async Task<IHttpActionResult> Insert([FromBody]Note note)
        {
            if (await _noteService.InsertAsync(note) > 0)
                return Ok();
            return StatusCode(HttpStatusCode.NotModified);
        }

        [HttpPut, Route("")]
        public async Task<IHttpActionResult> Update([FromBody]Note note)
        {
            if (await _noteService.UpdateAsync(note))
                return Ok();
            return StatusCode(HttpStatusCode.NotModified);
        }

        [HttpPut, Route("mark")]
        public async Task<IHttpActionResult> MarkActive([FromBody]Note note)
        {
            if (await _noteService.MarkAsActiveAsync(note.NoteId))
                return Ok();
            return StatusCode(HttpStatusCode.NotModified);
        }

        [HttpDelete, Route("{id}")]
        public async Task<IHttpActionResult> Delete(int id)
        {
            if (await _noteService.DeleteAsync(id))
                return Ok();
            return StatusCode(HttpStatusCode.NotModified);
        }
    }
}
