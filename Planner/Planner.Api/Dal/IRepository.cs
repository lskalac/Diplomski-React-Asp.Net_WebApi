using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Planner.Api.Dal
{
    public interface IRepository
    {
        Task<int> ExecuteAsync(string sql, object param = null);
        Task<IEnumerable<T>> QueryAsync<T>(string sql, object param = null) where T : class;
        Task<T> QuerySingleAsync<T>(string sql, object param = null) where T : class;
    }
}
