using MongoDBMVC.Models;
using System.Collections.Generic;
using System.Net;
using System.Threading.Tasks;
using System.Web.Mvc;
using PagedList;
using System.Linq;

namespace MongoDBMVC.Controllers
{
    public class EmployeesController : Controller
    {
        private readonly IEmployeeRepository _dataAccessProvider = new EmployeeRepository();
        public async Task<ActionResult> Index(int? pagina)
        {
            IEnumerable<Employee> employees = await _dataAccessProvider.GetEmployees();
            int paginaTamanho = 5;
            int paginaNumero = (pagina ?? 1);
            return View(employees.ToPagedList(paginaNumero, paginaTamanho));
        }

       

        public async Task<ActionResult> Details(string id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Employee employee = await _dataAccessProvider.GetEmployee(id);
            if (employee == null)
            {
                return HttpNotFound();
            }
            return View(employee);
        }

        public ActionResult Create()
        {
            return View();
        }

        [HttpPost]
        [ValidateAntiForgeryToken]



        public async Task<ActionResult> Create([Bind(Include = "nome,endereco,endereco2,data,telefone,telefone2,redessociais,cpf,rg")] Employee employee)
        {
            if (ModelState.IsValid)
            {
                await _dataAccessProvider.Add(employee);
                return RedirectToAction("Index");
            }

            return View(employee);
        }

        public async Task<ActionResult> Edit(string id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Employee employee = await _dataAccessProvider.GetEmployee(id);
            if (employee == null)
            {
                return HttpNotFound();
            }
            return View(employee);
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> Edit([Bind(Include = "Id,nome,endereco,endereco2,data,telefone,telefone2,redessociais,cpf,rg")] Employee employee)
        {
            if (ModelState.IsValid)
            {
                await _dataAccessProvider.Update(employee);
                return RedirectToAction("Index");
            }
            return View(employee);
        }

        public async Task<ActionResult> Delete(string id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }

            Employee employee = await _dataAccessProvider.GetEmployee(id);
            if (employee == null)
            {
                return HttpNotFound();
            }
            return View(employee);
        }

        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> DeleteConfirmed(string id)
        {
            await _dataAccessProvider.Delete(id);
            return RedirectToAction("Index");
        }

        protected override void Dispose(bool disposing)
        {
            base.Dispose(disposing);
        }

       
    }
}
