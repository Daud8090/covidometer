import './Myths.css'
import mythsimg3 from '../../utility/pics/mythsimg3.webp'
import mythimg4 from '../../utility/pics/mythimg4.webp'
import mythimg5 from '../../utility/pics/mythimg5.webp'
function Myths() {
    return (<div className='mythsfixbg'>
        <h1 className='heading'><strong> Myths about Covid-19</strong></h1>
        <table>
            <tr>
                <td>
                    <img src={mythimg5}  alt="can't load image" className='img1' />
                </td>
                <td>
                    <img src={mythimg4} alt="can't load image" className='img1' />
                </td>
                <td>
                    <img src={mythsimg3} alt="can't load image" className='img1' />
                </td>
            </tr>
        </table>

        <div className="myth">
            <ul>
                <li><h4> Can Covid-19 be transmitted through goods produced in countries where there is ongoing transmission?</h4>
                    <p><h6>Although it can last on surfaces for many hours, but the environment,<br />
                        transportation and varying temperatures during shipment make it difficult<br />
                        for the virus to remain active. If you feel the surface may be contaminated,<br />
                        clean it with a disinfectant and wash your hands after touching it.</h6>
                    </p>
                </li>
                <li><h4> Can Covid-19 be transmitted through mosquitoes?</h4>
                    <p><h6> There is no evidence that
                        the novel coronavirus can be
                        transmitted through mosquitoes.<br />
                        The virus can be spread through
                        droplets from coughing, sneezing
                        or a patient’s saliva.
                    </h6></p>
                </li>
                <li><h4> Can drinking alcohol help prevent Covid-19?</h4>
                    <p><h6>
                        Drinking alcohol, such as beer, liquor, wine doesn’t help prevent coronavirus.<br />
                        You should wash your hands often, wear masks, and avoid being close to<br />
                        those with a fever and cough
                    </h6></p>
                </li>
                <li><h4>Is it true that Covid-19 is transmitted in cold climate and not in hot and humid climate? </h4>
                    <p><h6> Coronavirus 2019 can be transmitted in any kind of climate.
                        Wherever you are, no matter what kind of climate,<br /> you have to practice
                        personal hygiene, i.e. wash your hands often, cover your mouth
                        when you sneeze or cough, and wear masks.</h6></p>
                </li>


                <li><h4> Can digital thermometers be 100% effective in detecting Covid-19 patients?</h4>
                    <p><h6> It may take the virus 1-14 days to incubate and cause symptoms
                        like a fever, <br />so it cannot be used
                        to identify asymptomatic patients.</h6></p>
                </li>

                <li><h4>Can Pneumonia vaccine prevent Covid-19? </h4>
                    <p><h6> This virus is new and
                        different from other strains.
                        We need a vaccine that is
                        developed specifically.<br /> The
                        research team is working
                        on this through the
                        support of the WHO.</h6></p>
                </li>
            </ul>
        </div>
    </div>
    )
}
export default Myths;