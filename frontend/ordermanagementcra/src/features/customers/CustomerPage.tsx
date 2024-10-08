import { Container, Grid } from '@mui/material';
import {
  Customer,
  Order,
  useGetCustomerByIdQuery,
} from '../../graphql/generated/schema';
import { useNavigate, useParams } from 'react-router-dom';

import CustomerForm from './CustomerForms/CustomerForm';
import OmAlert from '../../components/elements/OmAlert';
import OmHeader from '../../components/elements/OmHeader';
import OmLoading from '../../components/elements/OmLoading';
import OrderList from '../orders/ordersDashboard/OrderList';
import { useState } from 'react';

export default function CustomerPage() {
  const params = useParams();
  const customerId = parseInt(params.customerId || '0');
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const {
    data: customerData,
    loading: customerLoading,
    error: customerError,
  } = useGetCustomerByIdQuery({
    variables: {
      id: customerId,
    },
  });

  if (customerLoading) return <OmLoading />;

  if (customerError || !customerData || !customerData.customers) {
    return <OmAlert message='Error retreiving customer data' />;
  }

  const customer = customerData.customers[0] as Customer;
  const customerOrders = (customer.orders as Order[]) || ([] as Order[]);

  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={2}></Grid>
        <Grid item xs={8}>
          <OmHeader header='Customer Details' />
        </Grid>
        <Grid item xs={2}></Grid>
        <Grid item xs={12}>
          <CustomerForm customer={customer} />
        </Grid>
        <Grid item xs={12}>
          <OmHeader header='Customer Orders' />
        </Grid>
        <Grid item xs={12}>
          <OrderList orders={customerOrders} />
        </Grid>
      </Grid>
    </Container>
  );
}
