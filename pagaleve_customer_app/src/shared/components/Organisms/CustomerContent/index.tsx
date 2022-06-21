import { ReactNode, useCallback, useEffect, useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useAppThemeContext } from 'shared/contexts';
import { 
  Divider, 
  Stack, 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead,
  TablePagination,
  TableRow,
  TextField, 
  MenuItem, 
  IconButton,
  Button,
  Paper,
  Grid,
  Typography,
} from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Tooltip from '@mui/material/Tooltip';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Customer, CustomersList, CustomersGetOne, CustomerSave, CustomerEdit, CustomerDelete } from 'shared/services/api';
import { SnackBar } from 'shared/components/Atoms/SnackBar';

interface TabeleColumn {
  id: string;
  label: string;
  minWidth?: number;
  align?: 'right';
  format?: (value: number) => string;
}

export const CustomerContent = ():JSX.Element => {
  const { themeName } = useAppThemeContext();
  const [openFormDialog, setOpenFormDialog] = useState<boolean>(false);
  const [openDeleteDialog, setOpenDeleteDialog] = useState<boolean>(false);
  const [documentToDelete, setDocumentToDelete] = useState<string>('');
  const [page, setPage] = useState<number>(0);
  const [rowsPerPage, setRowsPerPage] = useState<number>(10);
  const [customerList, setCustomerList] = useState<[]>([]);
  const [messageContent, setMessageContent] = useState<ReactNode>(undefined);
  const [customerFormPopulate, setCustomerFormPopulate] = useState<Customer>({
    id: '',
    name: '',
    document: '',
    category: '',
    wallet: 0,
  });

  const CustomerSchema = Yup.object().shape({
    name: Yup.string()
    .required('Name is required')
    .max(255,'The Name should be at least 3 and no longer than 255 characters')
    .min(3,'The Name should be at least 3 and no longer than 255 characters'),
    document: Yup.string()
    .required('Document is required')
    .max(18,'The document should be no longer than 18 characters'),
    category: Yup.string()
    .required('Customer Category is required'),
    wallet: Yup.string()
    .required('Wallet value is required')
  });

  const tableColumns: TabeleColumn[] = [
    { id: 'name', label: 'Name'},
    { id: 'document', label: 'Document'},
    { id: 'category', label: 'Category' },
    { id: 'wallet', label: 'Wallet'},
    { id: 'actions', label: 'Actions' },
  ];

  const handleClickOpenFormDialog = (action: string, document: string):void => {
    setOpenFormDialog(true);
    if(action === 'create'){
      setCustomerFormPopulate({
        id: '',
        name: '',
        document: '',
        category: '',
        wallet: 0,
      });
    }
    
    if(action === 'edit'){
      populateCustomerForm(document);
    }
  };

  const handleCloseFormDialog = ():void => {
    setOpenFormDialog(false);
  };

  const handleCloseMessage = ():void => {
    setMessageContent(null);
  }

  const handleOpenDeleteDialog = (document: string):void => {
    setOpenDeleteDialog(true);
    setDocumentToDelete(document)
  };

  const handleCloseDeleteDialog = ():void => {
    setOpenDeleteDialog(false);
  };

  const handleChangePage = (event: unknown, newPage: number):void => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>):void => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const mountCustomerList = useCallback(async () => {
    const customers = await CustomersList();
    setCustomerList(customers);
  },[setCustomerList]);

  const populateCustomerForm = async (document: string) => {
    const customer = await CustomersGetOne(document);
    setCustomerFormPopulate(customer);
  };

  const saveCustomer = async (data: Customer) => {
    const customer = await CustomerSave(data);
    customer.error 
    ? setMessageContent(
        <SnackBar 
          opened={true}
          handleClose={ () => handleCloseMessage()}
          message={customer.error}
          duration={2000}
          alertLevel="error"
        />
      )
    : setMessageContent(
        <SnackBar
          opened={true}
          handleClose={ () => handleCloseMessage()}
          message={"Customer Saved!"}
          duration={2000}
          alertLevel="success"
        />
      )
    
    mountCustomerList();
  };

  const updateCustomer = async (data: Customer) => {
    const customer = await CustomerEdit(data);
    customer.error 
    ? setMessageContent(
        <SnackBar 
          opened={true}
          handleClose={ () => handleCloseMessage()}
          message={customer.error}
          duration={2000}
          alertLevel="error"
        />
      )
    : setMessageContent(
        <SnackBar
          opened={true}
          handleClose={ () => handleCloseMessage()}
          message={"Customer Updated!"}
          duration={2000}
          alertLevel="info"
        />
      )
    
    mountCustomerList();
  };

  const deleteCustomer = async (document:string) => {
    const customer = await CustomerDelete(document);
    customer.error 
    ? setMessageContent(
        <SnackBar 
          opened={true}
          handleClose={ () => handleCloseMessage()}
          message={customer.error}
          duration={2000}
          alertLevel="error"
        />
      )
    : setMessageContent(
        <SnackBar
          opened={true}
          handleClose={ () => handleCloseMessage()}
          message={"Customer Deleted!"}
          duration={2000}
          alertLevel="info"
        />
      )
    
    mountCustomerList();
    setOpenDeleteDialog(false);
  };

  useEffect(()=>{
    mountCustomerList();
  },[mountCustomerList]);

  return (
    <Paper sx={{
      margin: 'auto', 
      overflow: 'hidden', 
      boxShadow: themeName === 'light' ? 'rgb(58 53 65 / 10%) 0px 2px 10px 0px' : 'rgba(19, 8, 34, 0.7) 0px 2px 10px 0px'} }
    >
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={2}
        p={1}
      >
        <TextField
          color='secondary'
          label={'Search'}
          size="small"
        />
        <Button onClick={()=>handleClickOpenFormDialog('create', '')} color='secondary' variant="contained" startIcon={<AddIcon />} >
          Add Customer
        </Button>
      </Stack>
      
      <Divider />
      {/** List Customers - Table Component */}
      <Paper>
        <TableContainer sx={{ maxHeight: 400 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {tableColumns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {customerList
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row: any) => {
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                      {tableColumns.map((column) => {
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.id === "actions" 
                            ? <Stack
                                direction="row"
                                alignItems="center"
                                spacing={1}
                              >
                                <Tooltip title="Delete">
                                  <IconButton color="default" aria-label="delete" size="small" onClick={() => handleOpenDeleteDialog(row['document'])}>
                                    <DeleteIcon fontSize="inherit" />
                                  </IconButton>
                                </Tooltip>
                                <Tooltip title="Edit">
                                  <IconButton color="default" aria-label="edit" size="small" onClick={() => handleClickOpenFormDialog('edit', row['document'])}>
                                    <EditIcon fontSize="inherit" />
                                  </IconButton>
                                </Tooltip>
                              </Stack>
                            : row[column.id]}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={customerList.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
      {/** Customers Form - Dialog and Form Component */}
      <Dialog
        fullWidth
        maxWidth='md'
        open={openFormDialog}
        onClose={handleCloseFormDialog}
      >
        <DialogTitle>Customer</DialogTitle>
        <DialogContent>
          <Formik
            enableReinitialize
            initialValues={{
              id: customerFormPopulate.id,
              name: customerFormPopulate.name,
              document: customerFormPopulate.document,
              category: customerFormPopulate.category,
              wallet: customerFormPopulate.wallet,
            }}
            validationSchema={CustomerSchema}
            onSubmit={values => {
              customerFormPopulate.id ? updateCustomer(values) : saveCustomer(values);
            }}
          >
          {({ values, errors, touched, handleChange }) => (
            <Form>
              <Grid 
                container 
                spacing={2}
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                p={1}
              >
                <Grid item xs={6}>
                  <Field 
                    color='secondary'
                    label={'Name'}
                    size="small"
                    name="name"
                    placeholder='Customer Name'
                    fullWidth
                    error={errors.name && touched.name ? true : false}
                    helperText={errors.name && touched.name ? errors.name : null}
                    as={TextField} 
                  />
                </Grid>
                <Grid item xs={6}>
                  <Field 
                    color='secondary'
                    label={'Document'}
                    size="small"
                    name="document"
                    placeholder='Customer Document'
                    fullWidth
                    error={errors.document && touched.document ? true : false}
                    helperText={errors.document && touched.document ? errors.document : null}
                    as={TextField} 
                  />
                </Grid>
                <Grid item xs={6}>
                  <Field 
                    color='secondary'
                    label={'Category'}
                    size="small"
                    select
                    name="category"
                    placeholder='Customer Category'
                    fullWidth
                    onChange={handleChange('category')}
                    value={values.category}
                    error={errors.category && touched.category ? true : false}
                    helperText={errors.category && touched.category ? errors.category : null}
                    as={TextField} 
                  >
                    <MenuItem value={''}>Select a customer Category</MenuItem>
                    <MenuItem value={"Pessoa Física"}>Pessoa Física</MenuItem>
                    <MenuItem value={"Pessoa Jurídica"}>Pessoa Jurídica</MenuItem>
                  </Field>
                </Grid>
                <Grid item xs={6}>
                  <Field 
                    color='secondary'
                    label={'Wallet'}
                    size="small"
                    name="wallet"
                    type="number"
                    placeholder='Customer Wallet Value'
                    fullWidth
                    error={errors.wallet && touched.wallet ? true : false}
                    helperText={errors.wallet && touched.wallet ? errors.wallet : null}
                    as={TextField}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button 
                    fullWidth 
                    variant="contained" 
                    color="success"
                    type='submit'
                  >
                    Save
                  </Button>
                </Grid>
              </Grid>
            </Form>
            )}
          </Formik>
        </DialogContent>
        <DialogActions>
          <Button variant='outlined' color="info" onClick={handleCloseFormDialog}>Close</Button>
        </DialogActions>
      </Dialog>
      <Dialog
        open={openDeleteDialog}
        onClose={handleCloseDeleteDialog}
      >
        <DialogContent>
          <Typography>Do you really want delete the customer?</Typography>
        </DialogContent>
        <DialogActions>
          <Button variant='outlined' color="error" onClick={() => deleteCustomer(documentToDelete)}>Yes</Button>
          <Button variant='outlined' color="info" onClick={handleCloseDeleteDialog}>No</Button>
        </DialogActions>
      </Dialog>
      {messageContent}
    </Paper>
  );
}
