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

## Graphql codegen

[Documentation](https://the-guild.dev/graphql/codegen/docs/getting-started/installation)

```powershell

npx graphql-code-generator init

    Welcome to GraphQL Code Generator!
    Answer few questions and we will setup everything for you.

? What type of application are you building? Application built with React
? Where is your schema?: (path or url) http://localhost:5263/graphql/
? Where are your operations and fragments?: **/*.{gql,graphql}
? Where to write the output: src/gql/
? Do you want to generate an introspection file? No
? How to name the config file? codegen.ts
? What script in package.json should run the codegen? codegen

Fetching latest versions of selected plugins...

    Config file generated at codegen.ts

      $ npm install

    To install the plugins.

      $ npm run codegen

    To run GraphQL Code Generator.
```

Manually update codegen.ts

```typescript
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: 'http://localhost:5263/graphql/',
  documents: '**/*.{gql,graphql}',
  generates: {
    'src/graphql/generated/schema.ts': {
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-react-apollo',
      ],
    },
  },
};

export default config;
```

From command line run: npm run codegen

.. This will create /graphql/generated/schema.ts
