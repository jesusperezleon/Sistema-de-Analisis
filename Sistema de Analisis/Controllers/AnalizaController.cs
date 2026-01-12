using Microsoft.AspNetCore.Mvc;
using Sistema_de_Analisis.Models;
using System.Diagnostics;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Sistema_de_Analisis.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AnalizaController : ControllerBase
    {
        [HttpPost]
        public async Task<IActionResult> Post([FromBody] Texto texto)
        {
            // Ejecutor de python
            var psi = new ProcessStartInfo
            {
                FileName = "python",
                Arguments = $"analizador.py \"{texto.texto}\" ",
                RedirectStandardOutput = true,
                RedirectStandardError = true,
                UseShellExecute = false,
                CreateNoWindow = true
            };

            //Lanza el script
            using var process = Process.Start(psi);

            // Lee la salida estandar de escritura y error
            string output = await process.StandardOutput.ReadToEndAsync();
            string error = await process.StandardError.ReadToEndAsync();

            await process.WaitForExitAsync();

            if (!string.IsNullOrEmpty(error))
            {
                return StatusCode(500, new { error });
            }

            return Content(output, "application/json");
        }
        
    }
}
