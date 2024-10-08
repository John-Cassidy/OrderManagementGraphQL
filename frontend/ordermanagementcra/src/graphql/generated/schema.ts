import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
  Decimal: { input: any; output: any; }
};

export type Address = {
  __typename?: 'Address';
  addressLine1?: Maybe<Scalars['String']['output']>;
  addressLine2?: Maybe<Scalars['String']['output']>;
  city?: Maybe<Scalars['String']['output']>;
  country?: Maybe<Scalars['String']['output']>;
  customerId: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  state?: Maybe<Scalars['String']['output']>;
};

export type AddressFilterInput = {
  addressLine1?: InputMaybe<StringOperationFilterInput>;
  addressLine2?: InputMaybe<StringOperationFilterInput>;
  and?: InputMaybe<Array<AddressFilterInput>>;
  city?: InputMaybe<StringOperationFilterInput>;
  country?: InputMaybe<StringOperationFilterInput>;
  customerId?: InputMaybe<IntOperationFilterInput>;
  id?: InputMaybe<IntOperationFilterInput>;
  or?: InputMaybe<Array<AddressFilterInput>>;
  state?: InputMaybe<StringOperationFilterInput>;
};

export type BooleanOperationFilterInput = {
  eq?: InputMaybe<Scalars['Boolean']['input']>;
  neq?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Customer = {
  __typename?: 'Customer';
  address?: Maybe<Address>;
  contactNumber?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  isDeleted: Scalars['Boolean']['output'];
  lastName?: Maybe<Scalars['String']['output']>;
  orders?: Maybe<Array<Maybe<Order>>>;
};

export type CustomerFilterInput = {
  address?: InputMaybe<AddressFilterInput>;
  and?: InputMaybe<Array<CustomerFilterInput>>;
  contactNumber?: InputMaybe<StringOperationFilterInput>;
  email?: InputMaybe<StringOperationFilterInput>;
  firstName?: InputMaybe<StringOperationFilterInput>;
  id?: InputMaybe<IntOperationFilterInput>;
  isDeleted?: InputMaybe<BooleanOperationFilterInput>;
  lastName?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<CustomerFilterInput>>;
  orders?: InputMaybe<ListFilterInputTypeOfOrderFilterInput>;
};

export type CustomerModelInput = {
  addressLine1?: InputMaybe<Scalars['String']['input']>;
  addressLine2?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  contactNumber?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  state?: InputMaybe<Scalars['String']['input']>;
};

export type DateTimeOperationFilterInput = {
  eq?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  neq?: InputMaybe<Scalars['DateTime']['input']>;
  ngt?: InputMaybe<Scalars['DateTime']['input']>;
  ngte?: InputMaybe<Scalars['DateTime']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  nlt?: InputMaybe<Scalars['DateTime']['input']>;
  nlte?: InputMaybe<Scalars['DateTime']['input']>;
};

export type DecimalOperationFilterInput = {
  eq?: InputMaybe<Scalars['Decimal']['input']>;
  gt?: InputMaybe<Scalars['Decimal']['input']>;
  gte?: InputMaybe<Scalars['Decimal']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Decimal']['input']>>>;
  lt?: InputMaybe<Scalars['Decimal']['input']>;
  lte?: InputMaybe<Scalars['Decimal']['input']>;
  neq?: InputMaybe<Scalars['Decimal']['input']>;
  ngt?: InputMaybe<Scalars['Decimal']['input']>;
  ngte?: InputMaybe<Scalars['Decimal']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Decimal']['input']>>>;
  nlt?: InputMaybe<Scalars['Decimal']['input']>;
  nlte?: InputMaybe<Scalars['Decimal']['input']>;
};

export type IntOperationFilterInput = {
  eq?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  neq?: InputMaybe<Scalars['Int']['input']>;
  ngt?: InputMaybe<Scalars['Int']['input']>;
  ngte?: InputMaybe<Scalars['Int']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  nlt?: InputMaybe<Scalars['Int']['input']>;
  nlte?: InputMaybe<Scalars['Int']['input']>;
};

export type ListFilterInputTypeOfOrderFilterInput = {
  all?: InputMaybe<OrderFilterInput>;
  any?: InputMaybe<Scalars['Boolean']['input']>;
  none?: InputMaybe<OrderFilterInput>;
  some?: InputMaybe<OrderFilterInput>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addOrUpdateCustomer?: Maybe<Customer>;
  addOrUpdateOrder?: Maybe<Order>;
  deleteCustomer: Scalars['Boolean']['output'];
  deleteOrder: Scalars['Boolean']['output'];
};


export type MutationAddOrUpdateCustomerArgs = {
  customer?: InputMaybe<CustomerModelInput>;
};


export type MutationAddOrUpdateOrderArgs = {
  order?: InputMaybe<OrderModelInput>;
};


export type MutationDeleteCustomerArgs = {
  customerId: Scalars['Int']['input'];
};


export type MutationDeleteOrderArgs = {
  orderId: Scalars['Int']['input'];
};

export type Order = {
  __typename?: 'Order';
  customer?: Maybe<Customer>;
  customerId: Scalars['Int']['output'];
  depositAmount: Scalars['Decimal']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  isDeleted: Scalars['Boolean']['output'];
  isDelivery: Scalars['Boolean']['output'];
  orderDate: Scalars['DateTime']['output'];
  otherNotes?: Maybe<Scalars['String']['output']>;
  status: Status;
  totalAmount: Scalars['Decimal']['output'];
};

export type OrderFilterInput = {
  and?: InputMaybe<Array<OrderFilterInput>>;
  customer?: InputMaybe<CustomerFilterInput>;
  customerId?: InputMaybe<IntOperationFilterInput>;
  depositAmount?: InputMaybe<DecimalOperationFilterInput>;
  description?: InputMaybe<StringOperationFilterInput>;
  id?: InputMaybe<IntOperationFilterInput>;
  isDeleted?: InputMaybe<BooleanOperationFilterInput>;
  isDelivery?: InputMaybe<BooleanOperationFilterInput>;
  or?: InputMaybe<Array<OrderFilterInput>>;
  orderDate?: InputMaybe<DateTimeOperationFilterInput>;
  otherNotes?: InputMaybe<StringOperationFilterInput>;
  status?: InputMaybe<StatusOperationFilterInput>;
  totalAmount?: InputMaybe<DecimalOperationFilterInput>;
};

export type OrderModelInput = {
  customerId: Scalars['Int']['input'];
  depositAmount: Scalars['Decimal']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  isDelivery: Scalars['Boolean']['input'];
  orderDate: Scalars['DateTime']['input'];
  otherNotes?: InputMaybe<Scalars['String']['input']>;
  status: Status;
  totalAmount: Scalars['Decimal']['input'];
};

export type Query = {
  __typename?: 'Query';
  customers?: Maybe<Array<Maybe<Customer>>>;
  orders?: Maybe<Array<Maybe<Order>>>;
};


export type QueryCustomersArgs = {
  where?: InputMaybe<CustomerFilterInput>;
};


export type QueryOrdersArgs = {
  where?: InputMaybe<OrderFilterInput>;
};

export enum Status {
  Completed = 'COMPLETED',
  Draft = 'DRAFT',
  Pending = 'PENDING',
  Shipped = 'SHIPPED'
}

export type StatusOperationFilterInput = {
  eq?: InputMaybe<Status>;
  in?: InputMaybe<Array<Status>>;
  neq?: InputMaybe<Status>;
  nin?: InputMaybe<Array<Status>>;
};

export type StringOperationFilterInput = {
  and?: InputMaybe<Array<StringOperationFilterInput>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  eq?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  ncontains?: InputMaybe<Scalars['String']['input']>;
  nendsWith?: InputMaybe<Scalars['String']['input']>;
  neq?: InputMaybe<Scalars['String']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  nstartsWith?: InputMaybe<Scalars['String']['input']>;
  or?: InputMaybe<Array<StringOperationFilterInput>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type AddOrUpdateCustomerMutationVariables = Exact<{
  customer: CustomerModelInput;
}>;


export type AddOrUpdateCustomerMutation = { __typename?: 'Mutation', addOrUpdateCustomer?: { __typename?: 'Customer', id: number, firstName?: string | null, lastName?: string | null, email?: string | null, contactNumber?: string | null, address?: { __typename?: 'Address', addressLine1?: string | null, addressLine2?: string | null, city?: string | null, state?: string | null, country?: string | null } | null } | null };

export type AddOrUpdateOrderMutationVariables = Exact<{
  order: OrderModelInput;
}>;


export type AddOrUpdateOrderMutation = { __typename?: 'Mutation', addOrUpdateOrder?: { __typename?: 'Order', id: number, orderDate: any, description?: string | null, totalAmount: any, depositAmount: any, isDelivery: boolean, status: Status, otherNotes?: string | null, customer?: { __typename?: 'Customer', id: number, firstName?: string | null, lastName?: string | null, contactNumber?: string | null, email?: string | null } | null } | null };

export type DeleteCustomerMutationVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type DeleteCustomerMutation = { __typename?: 'Mutation', deleteCustomer: boolean };

export type DeleteOrderMutationVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type DeleteOrderMutation = { __typename?: 'Mutation', deleteOrder: boolean };

export type GetCustomerByIdQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type GetCustomerByIdQuery = { __typename?: 'Query', customers?: Array<{ __typename?: 'Customer', id: number, firstName?: string | null, lastName?: string | null, contactNumber?: string | null, email?: string | null, address?: { __typename?: 'Address', addressLine1?: string | null, addressLine2?: string | null, city?: string | null, state?: string | null, country?: string | null } | null, orders?: Array<{ __typename?: 'Order', id: number, orderDate: any, description?: string | null, totalAmount: any, depositAmount: any, isDelivery: boolean, status: Status, otherNotes?: string | null, customer?: { __typename?: 'Customer', id: number, firstName?: string | null, lastName?: string | null } | null } | null> | null } | null> | null };

export type GetCustomersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCustomersQuery = { __typename?: 'Query', customers?: Array<{ __typename?: 'Customer', id: number, firstName?: string | null, lastName?: string | null, contactNumber?: string | null, email?: string | null, address?: { __typename?: 'Address', addressLine1?: string | null, addressLine2?: string | null, city?: string | null, state?: string | null, country?: string | null } | null, orders?: Array<{ __typename?: 'Order', id: number, orderDate: any, description?: string | null, totalAmount: any, depositAmount: any, isDelivery: boolean, status: Status, otherNotes?: string | null } | null> | null } | null> | null };

export type GetOrderByIdQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type GetOrderByIdQuery = { __typename?: 'Query', orders?: Array<{ __typename?: 'Order', id: number, customerId: number, orderDate: any, description?: string | null, totalAmount: any, depositAmount: any, isDelivery: boolean, status: Status, otherNotes?: string | null, customer?: { __typename?: 'Customer', id: number, firstName?: string | null, lastName?: string | null, contactNumber?: string | null, email?: string | null } | null } | null> | null };

export type GetOrdersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetOrdersQuery = { __typename?: 'Query', orders?: Array<{ __typename?: 'Order', id: number, orderDate: any, description?: string | null, totalAmount: any, depositAmount: any, isDelivery: boolean, status: Status, otherNotes?: string | null, customer?: { __typename?: 'Customer', id: number, firstName?: string | null, lastName?: string | null, contactNumber?: string | null, email?: string | null } | null } | null> | null };


export const AddOrUpdateCustomerDocument = gql`
    mutation AddOrUpdateCustomer($customer: CustomerModelInput!) {
  addOrUpdateCustomer(customer: $customer) {
    id
    firstName
    lastName
    email
    contactNumber
    address {
      addressLine1
      addressLine2
      city
      state
      country
    }
  }
}
    `;
export type AddOrUpdateCustomerMutationFn = Apollo.MutationFunction<AddOrUpdateCustomerMutation, AddOrUpdateCustomerMutationVariables>;

/**
 * __useAddOrUpdateCustomerMutation__
 *
 * To run a mutation, you first call `useAddOrUpdateCustomerMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddOrUpdateCustomerMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addOrUpdateCustomerMutation, { data, loading, error }] = useAddOrUpdateCustomerMutation({
 *   variables: {
 *      customer: // value for 'customer'
 *   },
 * });
 */
export function useAddOrUpdateCustomerMutation(baseOptions?: Apollo.MutationHookOptions<AddOrUpdateCustomerMutation, AddOrUpdateCustomerMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddOrUpdateCustomerMutation, AddOrUpdateCustomerMutationVariables>(AddOrUpdateCustomerDocument, options);
      }
export type AddOrUpdateCustomerMutationHookResult = ReturnType<typeof useAddOrUpdateCustomerMutation>;
export type AddOrUpdateCustomerMutationResult = Apollo.MutationResult<AddOrUpdateCustomerMutation>;
export type AddOrUpdateCustomerMutationOptions = Apollo.BaseMutationOptions<AddOrUpdateCustomerMutation, AddOrUpdateCustomerMutationVariables>;
export const AddOrUpdateOrderDocument = gql`
    mutation AddOrUpdateOrder($order: OrderModelInput!) {
  addOrUpdateOrder(order: $order) {
    id
    orderDate
    description
    totalAmount
    depositAmount
    isDelivery
    status
    otherNotes
    customer {
      id
      firstName
      lastName
      contactNumber
      email
    }
  }
}
    `;
export type AddOrUpdateOrderMutationFn = Apollo.MutationFunction<AddOrUpdateOrderMutation, AddOrUpdateOrderMutationVariables>;

/**
 * __useAddOrUpdateOrderMutation__
 *
 * To run a mutation, you first call `useAddOrUpdateOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddOrUpdateOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addOrUpdateOrderMutation, { data, loading, error }] = useAddOrUpdateOrderMutation({
 *   variables: {
 *      order: // value for 'order'
 *   },
 * });
 */
export function useAddOrUpdateOrderMutation(baseOptions?: Apollo.MutationHookOptions<AddOrUpdateOrderMutation, AddOrUpdateOrderMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddOrUpdateOrderMutation, AddOrUpdateOrderMutationVariables>(AddOrUpdateOrderDocument, options);
      }
export type AddOrUpdateOrderMutationHookResult = ReturnType<typeof useAddOrUpdateOrderMutation>;
export type AddOrUpdateOrderMutationResult = Apollo.MutationResult<AddOrUpdateOrderMutation>;
export type AddOrUpdateOrderMutationOptions = Apollo.BaseMutationOptions<AddOrUpdateOrderMutation, AddOrUpdateOrderMutationVariables>;
export const DeleteCustomerDocument = gql`
    mutation DeleteCustomer($id: Int!) {
  deleteCustomer(customerId: $id)
}
    `;
export type DeleteCustomerMutationFn = Apollo.MutationFunction<DeleteCustomerMutation, DeleteCustomerMutationVariables>;

/**
 * __useDeleteCustomerMutation__
 *
 * To run a mutation, you first call `useDeleteCustomerMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteCustomerMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteCustomerMutation, { data, loading, error }] = useDeleteCustomerMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteCustomerMutation(baseOptions?: Apollo.MutationHookOptions<DeleteCustomerMutation, DeleteCustomerMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteCustomerMutation, DeleteCustomerMutationVariables>(DeleteCustomerDocument, options);
      }
export type DeleteCustomerMutationHookResult = ReturnType<typeof useDeleteCustomerMutation>;
export type DeleteCustomerMutationResult = Apollo.MutationResult<DeleteCustomerMutation>;
export type DeleteCustomerMutationOptions = Apollo.BaseMutationOptions<DeleteCustomerMutation, DeleteCustomerMutationVariables>;
export const DeleteOrderDocument = gql`
    mutation DeleteOrder($id: Int!) {
  deleteOrder(orderId: $id)
}
    `;
export type DeleteOrderMutationFn = Apollo.MutationFunction<DeleteOrderMutation, DeleteOrderMutationVariables>;

/**
 * __useDeleteOrderMutation__
 *
 * To run a mutation, you first call `useDeleteOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteOrderMutation, { data, loading, error }] = useDeleteOrderMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteOrderMutation(baseOptions?: Apollo.MutationHookOptions<DeleteOrderMutation, DeleteOrderMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteOrderMutation, DeleteOrderMutationVariables>(DeleteOrderDocument, options);
      }
export type DeleteOrderMutationHookResult = ReturnType<typeof useDeleteOrderMutation>;
export type DeleteOrderMutationResult = Apollo.MutationResult<DeleteOrderMutation>;
export type DeleteOrderMutationOptions = Apollo.BaseMutationOptions<DeleteOrderMutation, DeleteOrderMutationVariables>;
export const GetCustomerByIdDocument = gql`
    query GetCustomerById($id: Int!) {
  customers(where: {id: {eq: $id}}) {
    id
    firstName
    lastName
    contactNumber
    email
    address {
      addressLine1
      addressLine2
      city
      state
      country
    }
    orders {
      id
      orderDate
      description
      totalAmount
      depositAmount
      isDelivery
      status
      otherNotes
      customer {
        id
        firstName
        lastName
      }
    }
  }
}
    `;

/**
 * __useGetCustomerByIdQuery__
 *
 * To run a query within a React component, call `useGetCustomerByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCustomerByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCustomerByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetCustomerByIdQuery(baseOptions: Apollo.QueryHookOptions<GetCustomerByIdQuery, GetCustomerByIdQueryVariables> & ({ variables: GetCustomerByIdQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCustomerByIdQuery, GetCustomerByIdQueryVariables>(GetCustomerByIdDocument, options);
      }
export function useGetCustomerByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCustomerByIdQuery, GetCustomerByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCustomerByIdQuery, GetCustomerByIdQueryVariables>(GetCustomerByIdDocument, options);
        }
export function useGetCustomerByIdSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetCustomerByIdQuery, GetCustomerByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetCustomerByIdQuery, GetCustomerByIdQueryVariables>(GetCustomerByIdDocument, options);
        }
export type GetCustomerByIdQueryHookResult = ReturnType<typeof useGetCustomerByIdQuery>;
export type GetCustomerByIdLazyQueryHookResult = ReturnType<typeof useGetCustomerByIdLazyQuery>;
export type GetCustomerByIdSuspenseQueryHookResult = ReturnType<typeof useGetCustomerByIdSuspenseQuery>;
export type GetCustomerByIdQueryResult = Apollo.QueryResult<GetCustomerByIdQuery, GetCustomerByIdQueryVariables>;
export const GetCustomersDocument = gql`
    query GetCustomers {
  customers {
    id
    firstName
    lastName
    contactNumber
    email
    address {
      addressLine1
      addressLine2
      city
      state
      country
    }
    orders {
      id
      orderDate
      description
      totalAmount
      depositAmount
      isDelivery
      status
      otherNotes
    }
  }
}
    `;

/**
 * __useGetCustomersQuery__
 *
 * To run a query within a React component, call `useGetCustomersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCustomersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCustomersQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetCustomersQuery(baseOptions?: Apollo.QueryHookOptions<GetCustomersQuery, GetCustomersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCustomersQuery, GetCustomersQueryVariables>(GetCustomersDocument, options);
      }
export function useGetCustomersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCustomersQuery, GetCustomersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCustomersQuery, GetCustomersQueryVariables>(GetCustomersDocument, options);
        }
export function useGetCustomersSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetCustomersQuery, GetCustomersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetCustomersQuery, GetCustomersQueryVariables>(GetCustomersDocument, options);
        }
export type GetCustomersQueryHookResult = ReturnType<typeof useGetCustomersQuery>;
export type GetCustomersLazyQueryHookResult = ReturnType<typeof useGetCustomersLazyQuery>;
export type GetCustomersSuspenseQueryHookResult = ReturnType<typeof useGetCustomersSuspenseQuery>;
export type GetCustomersQueryResult = Apollo.QueryResult<GetCustomersQuery, GetCustomersQueryVariables>;
export const GetOrderByIdDocument = gql`
    query GetOrderById($id: Int!) {
  orders(where: {id: {eq: $id}}) {
    id
    customerId
    orderDate
    description
    totalAmount
    depositAmount
    isDelivery
    status
    otherNotes
    customer {
      id
      firstName
      lastName
      contactNumber
      email
    }
  }
}
    `;

/**
 * __useGetOrderByIdQuery__
 *
 * To run a query within a React component, call `useGetOrderByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetOrderByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetOrderByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetOrderByIdQuery(baseOptions: Apollo.QueryHookOptions<GetOrderByIdQuery, GetOrderByIdQueryVariables> & ({ variables: GetOrderByIdQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetOrderByIdQuery, GetOrderByIdQueryVariables>(GetOrderByIdDocument, options);
      }
export function useGetOrderByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetOrderByIdQuery, GetOrderByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetOrderByIdQuery, GetOrderByIdQueryVariables>(GetOrderByIdDocument, options);
        }
export function useGetOrderByIdSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetOrderByIdQuery, GetOrderByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetOrderByIdQuery, GetOrderByIdQueryVariables>(GetOrderByIdDocument, options);
        }
export type GetOrderByIdQueryHookResult = ReturnType<typeof useGetOrderByIdQuery>;
export type GetOrderByIdLazyQueryHookResult = ReturnType<typeof useGetOrderByIdLazyQuery>;
export type GetOrderByIdSuspenseQueryHookResult = ReturnType<typeof useGetOrderByIdSuspenseQuery>;
export type GetOrderByIdQueryResult = Apollo.QueryResult<GetOrderByIdQuery, GetOrderByIdQueryVariables>;
export const GetOrdersDocument = gql`
    query GetOrders {
  orders {
    id
    orderDate
    description
    totalAmount
    depositAmount
    isDelivery
    status
    otherNotes
    customer {
      id
      firstName
      lastName
      contactNumber
      email
    }
  }
}
    `;

/**
 * __useGetOrdersQuery__
 *
 * To run a query within a React component, call `useGetOrdersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetOrdersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetOrdersQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetOrdersQuery(baseOptions?: Apollo.QueryHookOptions<GetOrdersQuery, GetOrdersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetOrdersQuery, GetOrdersQueryVariables>(GetOrdersDocument, options);
      }
export function useGetOrdersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetOrdersQuery, GetOrdersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetOrdersQuery, GetOrdersQueryVariables>(GetOrdersDocument, options);
        }
export function useGetOrdersSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetOrdersQuery, GetOrdersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetOrdersQuery, GetOrdersQueryVariables>(GetOrdersDocument, options);
        }
export type GetOrdersQueryHookResult = ReturnType<typeof useGetOrdersQuery>;
export type GetOrdersLazyQueryHookResult = ReturnType<typeof useGetOrdersLazyQuery>;
export type GetOrdersSuspenseQueryHookResult = ReturnType<typeof useGetOrdersSuspenseQuery>;
export type GetOrdersQueryResult = Apollo.QueryResult<GetOrdersQuery, GetOrdersQueryVariables>;