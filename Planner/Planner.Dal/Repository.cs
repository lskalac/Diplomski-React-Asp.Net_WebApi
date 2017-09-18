using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Dapper;

namespace Planner.Dal
{
    public class Repository : IRepository
    {
        string connectionString = ConfigurationManager.ConnectionStrings["PlannerContext"].ToString();

        public async Task<IEnumerable<T>> QueryAsync<T>(string sql, object param = null) where T : class
        {
            using (var connection = new SqlConnection(connectionString))
            {
                return await connection.QueryAsync<T>(sql, param);
            }
        }

        public async Task<T> QuerySingleAsync<T>(string sql, object param = null) where T : class
        {
            using (var connection = new SqlConnection(connectionString))
            {
                return await connection.QueryFirstOrDefaultAsync<T>(sql, param);
            }
        }

        public async Task<int> ExecuteAsync(string sql, object param = null)
        {
            using (var connection = new SqlConnection(connectionString))
            {
                return await connection.ExecuteAsync(sql, param);
            }
        }

    }
}
