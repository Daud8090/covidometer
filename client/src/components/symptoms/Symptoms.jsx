import './Symptoms.css'
import sneeze from '../../utility/pics/sneaging.jpg'
import headache from '../../utility/pics/headche.jpg'
import fever from '../../utility/pics/fever.jpg'
import highbodytemp from '../../utility/pics/highbodytemp.jpg'
import ibreathing from '../../utility/pics/ibreathing.jpg'

function Symptoms() {
    return (<>
        <div className="symptomsbodyclass">
            <div className='symptonfxbg2 symptonfx' >
                <div className="symtomspagecss1">
                    <h1 id='sysheading1'> Symptoms of COVID-19 </h1>
                    {/* <h6 id='sysheading6'> Updated Feb. 22, 2021 </h6> */}
                </div>


                <div className="symptomdiv">
                    <table>
                        <tr>
                            <td>
                                <img className="image imgclass" src={sneeze} alt="can't load image" />
                            </td>
                            <td>
                                <h1>
                                    <a href=" https://www.googleadservices.com/pagead/aclk?sa=L&ai=DChcSEwjr--3r7uj0AhXUbioKHRDtBXUYABAAGgJ0bQ&ae=2&ohost=www.google.com&cid=CAESQeD2CCNFypRMS2lgyfTmhcE9u5FgYKd4DJZWf20i4mg2SuyZ1CxWSGDWGP4t6UxXMksjjmuaYY9OnrLrRrvbcAG4&sig=AOD64_30NU2iEaIomHsXq8T3KCdCpfvSPA&q&nis=1&adurl&ved=2ahUKEwjD5uLr7uj0AhXmzDgGHZEWCm8Q0Qx6BAgDEAE ">
                                        Sneezing & Coughing
                                    </a>
                                </h1>
                                <br />
                                <p>  When someone coughs or sneezes<br />
                                    they spray small liquid droplets <br />
                                    from their nose or mouth which<br />
                                    may contain virus. If you are <br />
                                    too close, you can breathe in the<br />
                                    droplets, including the COVID-19<br />
                                    virus if the person coughing<br />
                                    has the disease. </p>
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <img className="image imgclass" src={headache} alt="can't load image" />
                            </td>
                            <td>
                                <h1>
                                    <a href="https://thejournalofheadacheandpain.biomedcentral.com/articles/10.1186/s10194-020-01188-1">
                                        Headache
                                    </a>
                                </h1>
                                <br />
                                <p>
                                    COVID-19 causes a range of symptoms, <br />
                                    including headaches that can vary from <br />
                                    person to person. These headaches may feel <br />
                                    like a pulsating or stabbing <br />
                                    sensation in the head. They may<br />
                                    last a few days and go away on<br />
                                    their own or require treatment.  </p>
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <img className="image imgclass" src={fever} alt="can't load image" />
                            </td>
                            <td>
                                <h1>
                                    <a href=" https://www.medicalnewstoday.com/articles/covid-19-and-fever ">
                                        Fever
                                    </a>
                                </h1>
                                <br />
                                <p>
                                    Fever is one of the most common <br />
                                    symptoms of COVID-19. However,<br />
                                    people with COVID-19 sometimes<br />
                                    have a low-grade fever or<br />
                                    no fever at all.
                                </p>
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <img className="image imgclass" src={highbodytemp} alt="can't load image" />
                            </td>
                            <td>
                                <h1>
                                    <a href=" https://ccforum.biomedcentral.com/articles/10.1186/s13054-020-03045-8 ">
                                        Highbody temperature
                                    </a>
                                </h1>
                                <br />
                                <p>
                                    Infants: rectal temperature of 100.4°F (38°C) or higher.<br />
                                    Toddlers and children: temperature over 102.2°F (39°C).<br />
                                    Adults: temperature of 103 F (39.4 C) or higher — potentially <br />
                                    a sign of serious COVID-19 disease.
                                </p>
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <img className="image imgclass" src={ibreathing} alt="can't load image" />
                            </td>
                            <td>
                                <h1>
                                    <a href="https://www.hopkinsmedicine.org/health/conditions-and-diseases/coronavirus/what-coronavirus-does-to-the-lungs ">
                                        Breathing
                                    </a>
                                </h1>
                                <br />
                                <p>
                                    A virus called severe acute respiratory <br />
                                    syndrome coronavirus 2 (SARS-CoV-2) causes <br />
                                    coronavirus disease 19 (COVID-19). This illness<br />
                                    can cause shortness of breath, other <br />
                                    respiratory symptoms, and other types of symptoms.
                                </p>
                            </td>
                        </tr>

                    </table>
                </div>
            </div>

            <div className="symtomspagecss2 symptonfxbg1 symptonfx">
            <h1 className='watchhead'>
                <strong>
                    Watch for Symptoms
                </strong>
            </h1>
                <ul className='ulheadwatch'>
                    <li>Fever or chills</li>
                    <li>Cough</li>
                    <li>Fatigue</li>
                    <li>Shortness of breath or difficulty breathing</li>
                    <li>Headache</li>
                    <li>Muscle or body aches</li>
                    <li>New loss of taste or smell</li>
                    <li>Sore throat</li>
                    <li>Congestion or runny nose</li>
                    <li>Diarrhea</li>
                    <li>Nausea or vomiting</li>
                </ul>
                <p>
                    This list does not include all possible symptoms. CDC will continue to update this list as we learn more about COVID-19. <br />
                    Older adults and people who have severe underlying medical conditions like heart or lung disease<br />
                    or diabetes seem to be at higher risk for developing more serious complications from COVID-19 illnes.
                </p>

                <h1>
                    <strong>
                        When to Seek Emergency Medical Attention
                    </strong>
                </h1>
                <p>
                    Look for emergency warning signs* for COVID-19. If someone is showing any of these signs, seek emergency medical care immediately:
                    <ul className='ulemergen'>
                        <li>Trouble breathing</li>
                        <li>Persistent pain or pressure in the chest</li>
                        <li>New confusion</li>
                        <li>Inability to wake or stay awake</li>
                        <li>Pale, gray, or blue-colored skin, lips, or nail beds, depending on skin tone</li>
                    </ul>
                    *This list is not all possible symptoms. Please call your medical provider for any other symptoms that are severe or concerning to you.<br />
                    Call 911 or call ahead to your local emergency facility: Notify the operator that you are seeking care for someone who has or may have COVID-19.
                </p>
                <h1>
                    <strong>
                        Difference between COVID-19 & Flu
                    </strong>
                </h1>
                <p>
                    Influenza (Flu) and COVID-19 are both contagious respiratory illnesses, but they are caused by different viruses. COVID-19 is caused by <br />
                    infection with a new coronavirus (called SARS-CoV-2), and flu is caused by infection with influenza viruses.COVID-19 seems to <br />
                    spread more easily than flu and causes more serious illnesses in some people. It can also take longer before people show symptoms<br />
                    and people can be contagious for longer. More information about differences between flu and COVID-19 is available<br />
                    in the different sections below.
                    Because some of the symptoms of flu and COVID-19 are similar, it may be hard to tell the difference between them <br />
                    based on symptoms alone, and testing may be needed to help confirm a diagnosis.
                    While more is learned every day about COVID-19 <br />
                    and the virus that causes it, there is still a lot that is unknown . <br />
                    This page compares COVID-19 and flu, given the best available information to date.
                </p>
            </div>

            <div className="symptomgraphimg sysimggraph symptonfxbg3">
                <p>
                    <a href='https://www.healthdirect.gov.au/coronavirus-covid-19-in-pictures'>
                        <img src='http://media.healthdirect.org.au/images/inline/original/covid-cold-flu-symptoms-bd24a5.png' alt='COVID-19 coronavirus - understand the symptoms' width='500' border='0' />
                    </a>
                    <p>
                        Infographic courtesy of
                        <a href="https://www.healthdirect.gov.au" target="_blank">healthdirect</a>.
                    </p>
                </p>
            </div>
        </div>
    </>
    )
}
export default Symptoms;