using API.GraphQL;
using GraphQL.Server.Ui.Voyager;
using Infrastructure.Data;
using Microsoft.EntityFrameworkCore;

string AllowSpecificOrigins = "_allowSpecificOrigins";
var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddDbContextFactory<OMAContext>(options =>
{
    options.UseInMemoryDatabase("InMemoryDb");
    // options.UseSqlite(builder.Configuration.GetConnectionString("DefaultConnection"));
});

// graphql
builder.Services
    .AddGraphQLServer()
    .AddQueryType<Query>()
    .AddFiltering();

// CORS
builder.Services.AddCors(options =>
{
    options.AddPolicy(name: AllowSpecificOrigins,
        builder =>
        {
            // builder.WithOrigins("http://localhost:3000")
            //    .AllowAnyHeader()
            //    .AllowAnyMethod();
            builder.AllowAnyOrigin()
                .AllowAnyHeader()
                .AllowAnyMethod();
        });
});

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseCors(AllowSpecificOrigins);

app.MapGraphQL();
app.UseGraphQLVoyager("/graphql-voyager", new VoyagerOptions { GraphQLEndPoint = "/graphql" });

app.UseAuthorization();

app.MapControllers();

app.Run();
