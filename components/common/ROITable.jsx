import PropTypes from 'prop-types';
import { formatNumber } from '@/components/helper';

export function ROITable({ invested, maturity, returns }) {
    return <table className="shadow-sm rounded-lg border-collapse table-auto w-full text-sm mt-8 border border-slate-100 rounded-lg">
        <tbody>
            <tr>
                <td className='border-b border-slate-100 p-4 pl-8 text-slate-500'>Invested Amount</td>
                <td className='border-b border-slate-100 p-4 pl-8 text-slate-500'><strong>{formatNumber(invested)}</strong></td>
            </tr>
            <tr>
                <td className='border-b border-slate-100 p-4 pl-8 text-slate-500'>Est. Returns</td>
                <td className='border-b border-slate-100 p-4 pl-8 text-slate-500'><strong>{formatNumber(returns)}</strong></td>
            </tr>
            <tr>
                <td className='border-b border-slate-100 p-4 pl-8 text-slate-500'>Total Value</td>
                <td className='border-b border-slate-100 p-4 pl-8 text-slate-500'><strong>{formatNumber(maturity)}</strong></td>
            </tr>
        </tbody>
    </table>
}


ROITable.propTypes = {
    invested: PropTypes.number.isRequired,
    maturity: PropTypes.number.isRequired,
    returns: PropTypes.number.isRequired,
}

