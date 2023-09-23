import React from 'react';
import PropTypes from 'prop-types';
import { toInr } from 'lib';

export const IOLTable = ({homeLoanData}) => {
  return (
    <table className="shadow-sm rounded-lg border-collapse table-auto w-full text-sm mt-8 border border-slate-100">
        <tbody>
            <tr>
                <td className='border-b border-slate-100 p-4 pl-8 text-slate-500'>Monthly Home Loan EMI</td>
                <td className='border-b border-slate-100 p-4 pl-8 text-slate-500'><strong>{toInr(homeLoanData.monthlyEMI)}</strong></td>
            </tr>
            <tr>
                <td className='border-b border-slate-100 p-4 pl-8 text-slate-500'>Principal Amount</td>
                <td className='border-b border-slate-100 p-4 pl-8 text-slate-500'><strong>{toInr(homeLoanData.principalAmount)}</strong></td>
            </tr>
            <tr>
                <td className='border-b border-slate-100 p-4 pl-8 text-slate-500'>Interest Amount</td>
                <td className='border-b border-slate-100 p-4 pl-8 text-slate-500'><strong>{toInr(homeLoanData.intrestAmount)}</strong></td>
            </tr>
            <tr>
                <td className='border-b border-slate-100 p-4 pl-8 text-slate-500'>Total Amount Payable</td>
                <td className='border-b border-slate-100 p-4 pl-8 text-slate-500'><strong>{toInr(homeLoanData.totalAmountPayable)}</strong></td>
            </tr>
        </tbody>
    </table>
  )
}

IOLTable.protoTypes = {
    homeLoanData: PropTypes.object.isRequired,
}
