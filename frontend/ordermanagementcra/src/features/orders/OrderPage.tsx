import { Container, Grid } from '@mui/material';
import {
  Customer,
  Order,
  useGetOrderByIdQuery,
} from '../../graphql/generated/schema';
import { useNavigate, useParams } from 'react-router-dom';

import OmAlert from '../../components/elements/OmAlert';
import OmHeader from '../../components/elements/OmHeader';
import OmLoading from '../../components/elements/OmLoading';
import OrderForm from './orderForm/OrderForm';
import { useState } from 'react';

export default function OrderPage() {
  const params = useParams();
  const orderId = parseInt(params.orderId ?? '0');
  const navigation = useNavigate();
  const [open, setOpen] = useState(false);

  const {
    data: orderData,
    loading: orderLoading,
    error: orderError,
  } = useGetOrderByIdQuery({
    variables: {
      id: orderId,
    },
  });

  if (orderLoading) return <OmLoading />;

  if (orderError || !orderData || !orderData.orders) {
    return <OmAlert message='Error retreiving order data' />;
  }

  const order = orderData.orders[0] as Order;
  const customer = order.customer as Customer;

  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={2}></Grid>
        <Grid item xs={8}>
          <OmHeader
            header={`Order Details - ${customer.firstName} ${customer.lastName}`}
          />
        </Grid>
        <Grid item xs={12}>
          <OrderForm order={order} />
        </Grid>
      </Grid>
    </Container>
  );
}
