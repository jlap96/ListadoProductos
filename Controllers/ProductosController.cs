using ListadoProductos.Models;
using Microsoft.AspNetCore.Mvc;
using System.Net.Http;

namespace ListadoProductos.Controllers
{
    public class ProductosController: Controller
    {
        private readonly HttpClient _httpClient;
        public ProductosController(HttpClient httpClient)
        {
            _httpClient = httpClient;
            _httpClient.BaseAddress = new Uri("https://api.escuelajs.co");
        }

        //Obtención de productos
        public async Task<IActionResult> Index()
        {
            
            var productos = await _httpClient.GetFromJsonAsync<List<Producto>>("/api/v1/products");

            if (productos == null)
            {
                ViewBag.ErrorMessage = "No se pudieron cargar los productos.";
                return View();
            }

            return View(productos);
        }
    }
}
