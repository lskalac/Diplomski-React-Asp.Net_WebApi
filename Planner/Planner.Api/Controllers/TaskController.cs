﻿using Planner.Api.Models;
using Planner.Api.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Text.RegularExpressions;
using System.Threading.Tasks;
using System.Web.Http;
using static Planner.Api.Models.Constants;

namespace Planner.Api.Controllers
{
    [RoutePrefix("api/task")]
    public class TaskController : ApiController
    {
        private readonly ITaskService _taskService;

        public TaskController(ITaskService taskService)
        {
            _taskService = taskService;
        }


        [HttpGet, Route("")]
        public async Task<IHttpActionResult> Get()
        {
            return Ok(await _taskService.GetAsync());
        }

        [HttpGet, Route("priority")]
        public async Task<IHttpActionResult> GetPriorities()
        {
            var priorities = Enum.GetValues(typeof(Priority))
                .Cast<Priority>()
                .Select(x => new PriorityTask{
                    Id = (int)x,
                    Name = Regex.Replace(x.ToString(), "([A-Z])", " $1").Trim(),
                    Tasks = new List<Api.Models.Task>()
                })
                .ToList();

            foreach (var priority in priorities)
            {
                priority.Tasks = await _taskService.GetByPriority(priority.Id);
            }

            return Ok(priorities);
        }

        [HttpGet, Route("today")]
        public async Task<IHttpActionResult> GetTodaysTasks()
        {
            return Ok(await _taskService.GetTodaysTasks());
        }

        //[HttpGet, Route("{id}")]
        //public async Task<IHttpActionResult> GetById([FromUri]int id)
        //{
        //    return Ok(await _taskService.GetByIdAsync(id));
        //}

        //[HttpPost, Route("")]
        //public async Task<IHttpActionResult> Insert([FromBody]Planner.Model.Task note)
        //{
        //    if (await _taskService.InsertAsync(note) > 0)
        //        return Ok();
        //    return StatusCode(HttpStatusCode.NotModified);
        //}

        //[HttpPut, Route("")]
        //public async Task<IHttpActionResult> Update([FromBody]Planner.Model.Task note)
        //{
        //    if (await _taskService.UpdateAsync(note))
        //        return Ok();
        //    return StatusCode(HttpStatusCode.NotModified);
        //}

        //[HttpDelete, Route("{id}")]
        //public async Task<IHttpActionResult> Delete(int id)
        //{
        //    if (await _taskService.DeleteAsync(id))
        //        return Ok();
        //    return StatusCode(HttpStatusCode.NotModified);
        //}
    }
}
