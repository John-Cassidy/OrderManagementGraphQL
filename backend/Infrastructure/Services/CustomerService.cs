using System;
using Core.Entities;
using Core.Interfaces;
using Infrastructure.Data;
using Microsoft.EntityFrameworkCore;

namespace Infrastructure.Services;

public class CustomerService : ICustomerService
{
    private readonly IDbContextFactory<OMAContext> _contextFactory;

    public CustomerService(IDbContextFactory<OMAContext> contextFactory)
    {
        _contextFactory = contextFactory;
    }

    public IQueryable<Customer> GetCustomersAndOrders()
    {
        var context = _contextFactory.CreateDbContext();
        context.Database.EnsureCreated();

        return context.Customers
            .Where(x => !x.IsDeleted)
            .Include(x => x.Orders.Where(x => !x.IsDeleted))
            .Include(x => x.Address);
    }
}
