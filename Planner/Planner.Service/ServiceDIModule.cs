using Ninject.Modules;
using Planner.Dal;
using Planner.Service.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Planner.Service
{
    public class ServiceDIModule : NinjectModule
    {
        public override void Load()
        {
            Kernel.Load(new NinjectModule[] {
                new DalDIModule()
            });

            Bind<ITaskService>().To<TaskService>();
            Bind<INoteService>().To<NoteService>();
        }
    }
}
