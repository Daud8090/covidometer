import { apiArray } from '../../../src/api';
import './Table.css';

function Table() {
    // console.log(apiArray[0])
    return (
        <table className='table1'>
            
            <tr className='tr1'>
                <th className='th1'>Name</th>
                <th className='th1'>total cases</th>
                <th className='th1'>total deaths</th>
                <th className='th1'>total recovered</th>
                <th className='th1'>active cases</th>
            </tr>
            <tbody>
                {apiArray.map(row => (
                    <tr key={row.name} className='tr1'>
                        <td className='td1'>{row.name}</td>
                        <td className='td1'>{row['total cases']}</td>
                        <td className='td1'>{row['total deaths']}</td>
                        <td className='td1'>{row['total recovered']}</td>
                        <td className='td1'>{row['active cases']}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
export default Table;