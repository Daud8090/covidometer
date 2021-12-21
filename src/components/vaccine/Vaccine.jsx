import './Vaccine.css'
import  {vaccineArray}  from '../../vaccineapi';
import VaccineCard from '../vaccineCard/VaccineCard';


function Vaccine() {
    return (<>
        <div className='vaccinebg'>
        <h1 id='vac'>7 Vaccines Approved for Use in India</h1>
        {vaccineArray.map(row => (
            
            <VaccineCard
                founder={row.founder}
                name={row.name}
                approvedBy={row.approvedBy}
                trials={row.trials}
                sources={row.sources}
                approvalSource={row.approvalSource}
            />
        ))}
        </div>

    </>
    )
}
export default Vaccine;