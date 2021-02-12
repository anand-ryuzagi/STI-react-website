import React, {useEffect} from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import { MdFingerprint } from 'react-icons/md';

function Footer() {

  useEffect(()=>{
    window.scrollTo(0,0);
  },[])
  return (
    <div className='footer-container'>
      <section className='footer-contact'>
        <p className='footer-heading'>
          Address : Nandini raod, PowerHouse, Bhilai, Chhattisgarh- 490011
        </p>
        <p className='footer-heading'>
          Lanmark : Near Jain Medical Store
        </p>
        <p className='footer-text'>
          Contact : +91-9424008721, +91-9752005578
        </p>
        <p className='footer-text'>
          Email : singhtypinginstitute@gmail.com
        </p>
      </section>
      <section className='logo-media'>
        <div className='logo-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              <MdFingerprint />
              S.T.Insitute
            </Link>
          </div>
          <small className='website-rights'>ANAND © 2021</small>
          </div>
      </section>
    </div>
  );
}

export default Footer;