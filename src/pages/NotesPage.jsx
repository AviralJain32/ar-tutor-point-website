import React from 'react';
import Accordion from '../components/Accordion';


const NotesPage =()=>{

    return(
        <div className='font-Main-font'>
            <div className="flex justify-center">
                <h1 className="text-[32px] font-extrabold">Notes</h1>
            </div>
            <div>
                <Accordion/>
            </div>
        </div>
    )

}

export default NotesPage;