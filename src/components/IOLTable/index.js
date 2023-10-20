import React from 'react';
import PropTypes from 'prop-types';
import { FormattedNumber } from 'react-intl';

export const IOLTable = ({homeLoanData}) => {
  return (
    <table className="shadow-sm rounded-lg border-collapse table-auto w-full text-sm mt-8 border border-slate-100">
        <tbody>
            <tr>
                <td className='border-b border-slate-100 p-4 pl-8 text-slate-500'>Monthly Home Loan EMI</td>
                <td className='border-b border-slate-100 p-4 pl-8 text-slate-500'><strong><FormattedNumber value={homeLoanData.monthlyEMI} style="currency" currency="INR" /></strong></td>
            </tr>
            <tr>
                <td className='border-b border-slate-100 p-4 pl-8 text-slate-500'>Principal Amount</td>
                <td className='border-b border-slate-100 p-4 pl-8 text-slate-500'><strong><FormattedNumber value={homeLoanData.principalAmount} style="currency" currency="INR" /></strong></td>
            </tr>
            <tr>
                <td className='border-b border-slate-100 p-4 pl-8 text-slate-500'>Interest Amount</td>
                <td className='border-b border-slate-100 p-4 pl-8 text-slate-500'><strong><FormattedNumber value={homeLoanData.intrestAmount} style="currency" currency="INR" /></strong></td>
            </tr>
            <tr>
                <td className='border-b border-slate-100 p-4 pl-8 text-slate-500'>Total Amount Payable</td>
                <td className='border-b border-slate-100 p-4 pl-8 text-slate-500'><strong><FormattedNumber value={homeLoanData.totalAmountPayable} style="currency" currency="INR" /></strong></td>
            </tr>
        </tbody>
    </table>
  )
}

IOLTable.protoTypes = {
    homeLoanData: PropTypes.object.isRequired
}
