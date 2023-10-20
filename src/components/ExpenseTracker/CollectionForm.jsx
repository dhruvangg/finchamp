import { Field, Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { addTransaction } from '@/redux/slices/transactionSlice';
import * as Yup from "yup"
import Expense from './Expense';
import Income from './Income';

const FormSchema = Yup.object().shape({
    type: Yup.string().required('Please select a type'),
    category: Yup.string().required('Please select an option'),
    amount: Yup.number().required('Amount is required')
})

const initialValues = { type: 'expense', category: '', amount: 0 }

export default function CollectionForm() {
    const dispatch = useDispatch()
    const handleCollection = (values, { resetForm }) => {
        dispatch(addTransaction(values))
        alert("Success")
        resetForm()
    }
    return (
        <Formik initialValues={initialValues} validationSchema={FormSchema} onSubmit={handleCollection}>
            {({ errors, touched, values }) => (
                <Form>
                    <div className="my-4">
                        <label htmlFor="type" className="flex mb-2">Type</label>
                        <Field as="select" name="type" id="type" className='px-4 py-2 rounded-lg border w-full outline-none hover:shadow-lg cursor-pointer'>
                            <option value="income">Income</option>
                            <option value="expense">Expense</option>
                        </Field>
                        {errors.type && touched.type ? (
                            <div>{errors.type}</div>
                        ) : null}
                    </div>
                    <div className="my-4">
                        <label htmlFor="category" className="flex mb-2">Category</label>
                        <div className="grid sm:grid-cols-4 grid-cols-2 gap-4">
                            {values.type === 'income' ? <Income /> : <Expense />}
                        </div>
                        {errors.category && touched.category ? (
                            <div>{errors.category}</div>
                        ) : null}
                    </div>
                    <div className='my-4'>
                        <label htmlFor="amount" className="flex mb-2">Amount</label>
                        <Field name="amount" type="number" id="amount" className="px-4 py-2 rounded-lg border w-full outline-none hover:shadow-lg cursor-pointer" placeholder="Amount" />
                        {errors.amount && touched.amount ? (
                            <div>{errors.amount}</div>
                        ) : null}
                    </div>
                    <button type="submit" className="outline-none font-semibold bg-primary rounded-lg text-white w-48 py-2 px-4">Add</button>
                </Form>
            )}
        </Formik >
    )
}
