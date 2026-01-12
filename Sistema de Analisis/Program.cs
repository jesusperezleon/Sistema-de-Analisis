var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();

var app = builder.Build();

// Habilitar archivos estáticos (HTML, CSS, JS)
app.UseStaticFiles();

app.UseHttpsRedirection();

app.MapControllers();

app.Run();

