namespace ListadoProductos.Models
{
    public class Producto
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public decimal Price { get; set; }  
        public string Description { get; set; }
        public List<string> Images { get; set; }  
        
    }


}
