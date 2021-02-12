import React from 'react';
import './ProspectSection.css';
import { FaFire } from 'react-icons/fa';
import { BsXDiamondFill } from 'react-icons/bs';
import { GiCrystalize } from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';

function Prospect() {
  return (
    <IconContext.Provider value={{ color: '#fff', size: 64 }}>
      <div className='prospect__section'>
        <div className='prospect__wrapper'>
          <h1 className='prospect__heading'>Career Prospect of Typing</h1>
          <div className='prospect__container'>
            <div className='prospect__container-card'>
              <div className='prospect__container-cardInfo'>
                <div className='icon'>
                  <FaFire />
                </div>
                <h3>A very useful for programmers where they have to type fast in order to write the logic running in their mind before it skips. ​</h3>
              </div>
            </div>
            <div className='prospect__container-card'>
              <div className='prospect__container-cardInfo'>
                <div className='icon'>
                  <BsXDiamondFill />
                </div>
                <h3>It saves valuable time and improves accuracy which will help you in getting job. ​</h3>
              </div>
            </div>
            <div className='prospect__container-card'>
              <div className='prospect__container-cardInfo'>
                <div className='icon'>
                  <GiCrystalize />
                </div>
                <h3>By learning typing you become a faster typist,improve your career prospects for goverment jobs and also in BPO and MT Industry. ​</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </IconContext.Provider>
  );
}
export default Prospect;