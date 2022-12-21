import { Field } from "formik";
import { useGetPlannerQuery } from "redux/slices/plannerAPI";

export default function Expense() {
    const { data, isLoading, error } = useGetPlannerQuery()
    if (error) return error
    return (
        <>
            {!isLoading && data.expense.map((expense, i) => {
                return <label key={i} className="">
                    <Field type="radio" name="category" value={expense} className="peer sr-only" />
                    <div className="peer-checked:bg-primary peer-checked:text-white peer-checked:font-semibold px-4 py-2 rounded-lg border w-full text-center hover:shadow-lg cursor-pointer">{expense}</div>
                </label>
            })}
        </>
    )
}
