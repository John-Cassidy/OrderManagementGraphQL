using System;
using Core.Entities;
using Infrastructure.Data;

namespace API.GraphQL;

public class Query
{
    [UseFiltering]
    public IQueryable<Customer> GetCustomers([Service] OMAContext context) => context.Customers;

    [UseFiltering]
    public IQueryable<Order> GetOrders([Service] OMAContext context) => context.Orders;
}
