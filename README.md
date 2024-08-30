# OrderManagementGraphQL

A fullstack app to maintain and track customers and orders using the following technologies:

- .Net 8
- React
- GraphQL and HotChocolat
- EF
- Apollo CodeGen
- Docker
- Material UI
- Relational DB

[OrderManagementApp Project Reference](https://github.com/ivanthagura/OrderManagementApp)

![Project Diagram](./.resources/images/001_project_diagram.png)

## Backend

```powershell
dotnet new sln --name OrderManagementBackend --dry-run

dotnet new webapi -o API --dry-run
dotnet new classlib -o Infrastructure
dotnet new classlib -o Core

dotnet sln add API
dotnet sln add Infrastructure
dotnet sln add Core
```

## GraphQL

```json
query GetCustomers{
  customers{
    id
    firstName
    lastName
    contactNumber
    address{
      addressLine1
      addressLine2
      city
      state
      country
    }
    orders{
      id
      customerId
      orderDate
    }
  }
}

query GetOrders{
  orders{
    id
    customerId
    orderDate
    customer{
      firstName
      lastName
    }
  }
}
```
