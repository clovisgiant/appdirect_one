using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace MongoDBMVC.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "MongoDB Atlas With MVC 5 Application";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Contact Details";

            return View();
        }
    }
}