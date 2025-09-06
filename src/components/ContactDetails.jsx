import React from 'react'
import PhonelinkRingIcon from '@mui/icons-material/PhonelinkRing';
import PinDropIcon from '@mui/icons-material/PinDrop';
import MarkunreadIcon from '@mui/icons-material/Markunread';

export default function ContactDetails() {
    return (
        <div className='container mt-6 mb-6 fw-6'>

            <div className='container-start d-flex justify-content-left align-items-center gap-2 '>
                <PinDropIcon fontSize="medium" />
                <p className="mb-2">: Sangkhola, East Sikkim, India</p>
            </div>

            <div className='container-start d-flex justify-content-left align-items-center gap-2'>
                <PhonelinkRingIcon fontSize='medium' />
                <p className="mb-2">: +91 8167259866</p>
            </div>

            <div className='container-start d-flex justify-content-left align-items-center gap-2'>
                <MarkunreadIcon fontSize='medium' />
                <p className="mb-2">: ansariabash2004@gmail.com</p>
            </div>
        </div>
    )
}
