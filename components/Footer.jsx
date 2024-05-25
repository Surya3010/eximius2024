import { AiFillCopyrightCircle } from 'react-icons/ai'
import { MdMail } from 'react-icons/md'
import { IoLocationOutline } from "react-icons/io5";
import { IoMdContact } from "react-icons/io";
import { IoCalendarOutline } from "react-icons/io5";
import { AiOutlineWhatsApp } from 'react-icons/ai'
import { AiOutlineInstagram } from "react-icons/ai";

const Footer = () => {
    return (
        <>
            <div id='footer' style={{
                fontSize: "16px",
                backgroundColor: 'rgba(60,60,60, 0.3)',
                padding: '50px 0',
                color: '#eee'
            }}>
                <div id='container' style={{ width: '100%', maxWidth: '1320px', marginLeft: 'auto', marginRight: 'auto' }}>
                    <div id='footer-row' style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly' }}>
                        <div id='footer-col' style={{ display: 'flex', marginBottom: '30px', flex: '0 0 auto' }}>
                            <div style={{ marginRight: '15px' }}><IoLocationOutline size='32px' /></div>
                            <div>
                                <h4 style={{ fontSize: '16px', fontWeight: '700', marginBottom: '20px' }}>Address</h4>
                                <p>
                                    Indian Institute of Management Bangalore <br />
                                    Bannerghatta Road, Bengaluru, India <br />
                                    Pin Code: 560 076
                                </p>
                            </div>
                        </div>
                        <div id='footer-col' style={{ display: 'flex', marginBottom: '30px', flex: '0 0 auto' }}>
                            <div style={{ marginRight: '15px' }}><IoMdContact size='32px' /></div>
                            <div>
                                <h4 style={{ fontSize: '16px', fontWeight: '700', marginBottom: '20px' }}>Contact</h4>
                                <p>
                                    <strong>Phone:</strong> +91 9022822617<br />
                                    <strong>Email:</strong> iimb.eximius@iimb.ac.in<br />
                                </p>
                            </div>
                        </div>
                        <div id='footer-col' style={{ display: 'flex', marginBottom: '30px', flex: '0 0 auto' }}>
                            <div style={{ marginRight: '15px' }}><IoCalendarOutline size='32px' /></div>
                            <div>
                                <h4 style={{ fontSize: '16px', fontWeight: '700', marginBottom: '20px' }}>Timing</h4>
                                <p>
                                    6th July & 7th July
                                </p>
                            </div>
                        </div>
                        <div id='footer-col' style={{ display: 'flex', marginBottom: '30px', flex: '0 0 auto' }}>
                            <div>
                                <h4 style={{ fontSize: '16px', fontWeight: '700', marginBottom: '20px' }}>Join Us</h4>
                                <div style={{ display: 'flex' }}>
                                    <a href='https://www.instagram.com/iimbeximius'><AiOutlineInstagram size='32px' /></a>
                                    <a><AiOutlineWhatsApp size='32px' /></a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Footer