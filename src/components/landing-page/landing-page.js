import './style.css';
import { useMediaQuery } from 'react-responsive';
import logo from './images/DOCi-logo.svg'
import pattern from './images/vector-pattern.svg';
import { CustomButton, RedButton } from '../button/button';
import CustomizedSwitches from '../switches/switch';

export default function LandingPage() {

    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 540px)' });
    const isBigScreen = useMediaQuery({ query: '(min-width: 541px)' });

    return (
        <div>
            {isBigScreen &&
                <div className='landing-page-home' >
                    <div className='bgimage' style={{ backgroundSize: 'auto', minWidth: '210px', height: '100%', width: '100%', padding: '62px 72px', boxSizing: 'border-box' }} >
                        <img src={logo} style={{ left: '72px', top: '62px', width: '150px' }}></img>
                    </div>
                    <div style={{ backgroundImage: `url(${pattern})`, height: '100%', width: '100%', padding: '62px 72px', boxSizing: 'border-box' }} >
                        <p className='red small' >COMING SOON</p>
                        <h1>Get notified <br /> when we <span className='launch'>launch</span></h1>
                        <div className='medium grey bottom-margin text-padding text-div regular-font' >
                            DOCi helps users to keep track of their health and allows them book health care providers on the go. Join our waitlist to be the first to know when we launch.
                        </div>
                        <form>
                            <label for='fname' >Your first name</label><br />
                            <input className='bottom-margin' type='text' placeholder='Enter your first name' name='fname' required></input><br />
                            <label for='fname' >Your email</label><br />
                            <input className='bottom-margin' type='email' placeholder='Enter your email' name='email' required ></input>
                        </form>
                        <p className='lightgrey margin-zero bottom-margin' >I want to be a <span className='green' >Healthcare provider.</span>
                            <span style={{ marginLeft: '108px' }} ><CustomizedSwitches /></span></p>
                        <RedButton label='Notify me' />
                    </div>
                </div>}
            {isTabletOrMobile &&
                <div>
                    <div className='bgimage' style={{ height: '100%', width: '100%', padding: '62px 24px', boxSizing: 'border-box' }} >
                        <img src={logo} style={{ width: '100px' }}></img>
                        <p className='red small' >COMING SOON</p>
                        <h1 style={{ fontSize: '38px', color: 'white', lineHeight: '59px' }} >Get notified <br /> when we <span className='launch' style={{ boxShadow: '0 -13px #ed32375c inset', lineHeight: '36px' }} >launch</span></h1>
                        <div className='medium grey bottom-margin text-div ' style={{ color: '#E0E0E0' }}>
                            DOCi helps users to keep track of their health and allows them book health care providers on the go. Join our waitlist to be the first to know when we launch.
                        </div>
                    </div>
                    <div style={{ padding: '24px 24px', backgroundImage: `url(${pattern})`, }} >
                        <form>
                            <label for='fname' >Your first name</label><br />
                            <input className='bottom-margin' type='text' placeholder='Enter your first name' name='fname' required></input><br />
                            <label for='fname' >Your email</label><br />
                            <input className='bottom-margin' type='email' placeholder='Enter your email' name='email' required ></input>
                        </form>
                        <div className='bottom-margin' style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <p className='lightgrey margin-zero' >I want to be a <span className='green' >Healthcare provider.</span></p>
                            <span><CustomizedSwitches /></span>
                        </div>
                        <div className='bottom-margin' ><CustomButton label='Notify me' width='100%' /></div>
                    </div>
                </div>
            }
        </div>
    )

}