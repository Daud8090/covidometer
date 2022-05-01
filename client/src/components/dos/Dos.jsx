import './Dos.css'
import dosdontsimg2 from '../../utility/pics/dos&dontsimg2.png'
import dosdontsimg1 from '../../utility/pics/dos&dontimg1.png'
import dosdontsimg3 from '../../utility/pics/dos&dontsimg3.png'
import dosdontsimg4 from '../../utility/pics/dos&dontsimg4.png'

function Dos() {
    return (<>
        <h1 className='head'><strong> Dos&Don'ts</strong></h1>

        <div className='div1 dofixbg3'>
            <table>
                <tr>
                    <td>
                        <img src={dosdontsimg2} alt="can't load image" className='img1' />
                    </td>
                    <td>
                        <h1>How to wash your hands – </h1>
                        <p>infographic
                            Washing your hands thoroughly for at <br />least 20 seconds will help stop the <br />spread of COVID-19.
                            Here's how to do it properly.</p>
                    </td>
                </tr>
            </table>
        </div>


        <div className='div1 dofixbg1'>
            <table>
                <tr>
                    <td>
                        <h1> How to avoid infection – </h1>
                        <p>infographic
                            The best way to avoid infection <br />and the spreading of COVID-19 is to avoid<br /> contact with the
                            virus. This image shows you what to do.</p>
                    </td>
                    <td>
                        <img src={dosdontsimg1} alt="can't load image" className='img1' />
                    </td>
                </tr>
            </table>
        </div>



        <div className='div1 dofixbg2'>
            <table>
                <tr>
                    <td>
                        <img src={dosdontsimg4} alt="can't load image" className='img1' />
                    </td>
                    <td>
                        <h1>Taking care of your mental health during COVID-19 – </h1>
                        <p>infographic
                            It's important you look after your<br /> mental health and wellbeing during the COVID-19 <br />outbreak.
                            Here's where you can go for help and support.
                        </p>
                    </td>
                </tr>
            </table>
        </div>



        <div className='div1 dofixbg'>
            <table>
                <tr>
                    <td>
                        <h1>Hand sanitiser safety tips -</h1>
                        <p> infographic
                            Calls to the Poisons Information Centre about<br /> children ingesting alcohol-based hand sanitiser have
                            <br />increased during the pandemic. Here's how<br /> to use it safely.
                        </p>
                    </td>

                    <td>
                        <img src={dosdontsimg3} alt="can't load image" className='img1' />
                    </td>
                </tr>
            </table>
        </div>


    </>
    )
}
export default Dos;