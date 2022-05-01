import Card from '../cards/Card';
import Images from '../images/Images';
import './Body.css';
import {getWorldData,getIndianData} from '../../api';
import Table from '../table/Table';
import Footer from '../footer/Footer';

function Body() {
    const worldData=getWorldData();
    const IndianData=getIndianData();

    return (<>
        <div className='fixedbg1'>
        <Card 
        name={worldData.name}
        total_cases={worldData['total cases']}
        total_deaths={worldData['total deaths']}
        total_recovered={worldData['total recovered']}
        active_cases={worldData['active cases']}
         />
        </div>
        <div className='fixedbg4'>
        <Card 
        name={IndianData.name}
        total_cases={IndianData['total cases']}
        total_deaths={IndianData['total deaths']}
        total_recovered={IndianData['total recovered']}
        active_cases={IndianData['active cases']}
         />
        </div>
        <div className='fixedbg3'>
        <Images />
        </div>
        {/* <div className='fixed-bg4'> */}
        <Table />
        {/* </div> */}
        
    </>
    )
}
export default Body;