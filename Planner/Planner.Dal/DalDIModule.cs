using Ninject.Modules;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Planner.Dal
{
    public class DalDIModule : NinjectModule
    {
        public override void Load()
        {
            Bind<IRepository>().To<Repository>();
        }
    }
}
