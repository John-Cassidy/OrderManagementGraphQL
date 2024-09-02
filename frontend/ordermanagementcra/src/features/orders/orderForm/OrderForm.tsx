import * as yup from 'yup';

import { Alert, Container, Grid, Snackbar, Typography } from '@mui/material';
import { Form, Formik } from 'formik';
import {
  Order,
  OrderModelInput,
  Status,
  useAddOrUpdateOrderMutation,
} from '../../../graphql/generated/schema';

import OmCheckBox from '../../../components/FormsUI/OmCheckBox';
import OmDatePicker from '../../../components/FormsUI/OmDatePicker';
import OmLoading from '../../../components/elements/OmLoading';
import OmSelect from '../../../components/FormsUI/OmSelect';
import OmSubmitButton from '../../../components/FormsUI/OmSubmitButton';
import OmTextField from '../../../components/FormsUI/OmTextField';
import { formatDatePicker } from '../../../util/DateFormatter';
import statuses from '../../../data/statuses.json';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

interface Props {
  order: Order;
}

const FORM_VALIDATION = yup.object().shape({
  orderDate: yup.date().required('Order Date is required'),
  description: yup.string().required('Description is required'),
  depositAmount: yup.number().required('Deposit Amount is required'),
  otherNotes: yup.string(),
  totalAmount: yup.number().required('Total Amount is required'),
  isDelivery: yup.boolean(),
  status: yup.string(),
});

export default function OrderForm({ order }: Props) {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const INITIAL_FORM_STATE = {
    id: order.id,
    customerId: order.customerId,
    orderDate: formatDatePicker(order.orderDate ?? new Date()),
    description: order.description ?? '',
    depositAmount: order.depositAmount ?? 0,
    otherNotes: order.otherNotes ?? '',
    totalAmount: order.totalAmount ?? 0,
    isDelivery: order.isDelivery ?? false,
    status: order.status ?? Status.Draft,
  };

  const [
    addOrUpdateOrder,
    { loading: addOrUpdateOrderLoading, error: addOrUpdateOrderError },
  ] = useAddOrUpdateOrderMutation();
  const handleClose = (event: any) => {
    if (event.reason && event.reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  async function addOrUpdateOrderDetails(values: OrderModelInput) {
    const response = await addOrUpdateOrder({
      variables: {
        order: values,
      },
    });

    setOpen(true);

    const order = response.data?.addOrUpdateOrder as Order;
    if (order.id) {
      navigate(`/orders/${order.id}`);
    }
  }

  if (addOrUpdateOrderLoading) {
    return <OmLoading />;
  }

  if (addOrUpdateOrderError) {
    return (
      <Snackbar open={true} autoHideDuration={6000}>
        <Alert severity='error'>Error retreiving order data</Alert>
      </Snackbar>
    );
  }

  return (
    <Container>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity='success' sx={{ width: '100%' }}>
          {!order.id
            ? 'Order details successfully added'
            : 'Order details successfully updated'}
        </Alert>
      </Snackbar>
      <div>
        <Formik
          initialValues={INITIAL_FORM_STATE}
          validationSchema={FORM_VALIDATION}
          onSubmit={addOrUpdateOrderDetails}
        >
          <Form>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <OmSelect
                  name='status'
                  otherProps={{ label: 'Order Status' }}
                  options={statuses}
                />
              </Grid>
              <Grid item xs={12}>
                <OmDatePicker
                  name='orderDate'
                  otherProps={{ label: 'Order Date' }}
                />
              </Grid>
              <Grid item xs={12}>
                <OmTextField
                  name='description'
                  otherProps={{ label: 'Description' }}
                />
              </Grid>
              <Grid item xs={12}>
                <OmTextField
                  name='otherNotes'
                  otherProps={{
                    label: 'Other Notes',
                    multiline: true,
                    rows: 4,
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <Typography>Pricing Information</Typography>
              </Grid>
              <Grid item xs={12}>
                <OmTextField
                  name='totalAmount'
                  otherProps={{ label: 'Total Amount', type: 'number' }}
                />
              </Grid>
              <Grid item xs={12}>
                <OmTextField
                  name='depositAmount'
                  otherProps={{ label: 'Deposit Amount', type: 'number' }}
                />
              </Grid>
              <Grid item xs={12}>
                <OmCheckBox
                  name='isDelivery'
                  legend='Include Delivery'
                  label='Include Delivery'
                  otherProps={{ label: 'Delivery Included' }}
                />
              </Grid>
              <Grid item xs={12}>
                <OmSubmitButton otherProps={{}}>
                  {!order.id ? 'Add New Order' : 'Update Order'}
                </OmSubmitButton>
              </Grid>
            </Grid>
          </Form>
        </Formik>
      </div>
    </Container>
  );
}
