# Frontend for Restaurant Reservation Application

Application will use:

- React
- Typescript
- Graphql

  - [GraphQL Documentation](https://graphql.org/)
  - [Getting Started With GraphQL.js](https://graphql.org/graphql-js/)

- Apollo client

  - Make requests and caches objects

- GraphQL Code generator (codegen)

  - Generates templated code to consume the already created queries based on the back-end schema

## Create React App

### Create React App with CRA

[Legacy Documenation](https://create-react-app.dev/docs/getting-started)

[Legacy Documentation 2](https://legacy.reactjs.org/docs/create-a-new-react-app.html)

[New Documentation](https://react.dev/learn/start-a-new-react-project)

```powershell
npx create-react-app ordermanagementcra --template typescript

Creating a new React app in C:\DEV\github.com\OrderManagementGraphQL\frontend\ordermanagementcra.

Installing packages. This might take a couple of minutes.
Installing react, react-dom, and react-scripts with cra-template-typescript...
```

[How to Add eslint to React Project](https://www.freecodecamp.org/news/how-to-add-eslint-to-your-react-project/)

### Alternative: Create React App using Vite

[Documentation](https://vitejs.dev/guide/)

```powershell

npm create vite@latest

√ Project name: ... ordermanagementvite
√ Select a framework: » React
√ Select a variant: » TypeScript + SWC

Done. Now run:

  cd ordermanagementvite
  npm install
  npm run start
```

## Packages

```powershell
npm i graphql @apollo/client @graphql-codegen/cli @graphql-codegen/typescript @graphql-codegen/typescript-operations @graphql-codegen/typescript-react-apollo

```
