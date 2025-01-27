import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../components/Accordion';

const NotesPage = () => {
  return (
    <div>
      <div className="w-full flex justify-center items-center">
        <h2 className="font-bold text-xl">Notes</h2>
      </div>
      <div className="bg-blue-50 p-4 gap-5 flex flex-col">
        <div className="bg-white p-4">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Physics</AccordionTrigger>
              <AccordionContent>
                <div>
                  <a className="text-blue-500 text-base">Rotation</a>
                  <br />
                  {/* <hr/> */}
                  <a className="text-blue-500 text-base">Motion</a>
                  <br />
                  {/* <hr/> */}
                  <a className="text-blue-500 text-base">Energy</a>
                  <br />
                  {/* <hr/> */}
                  <a className="text-blue-500 text-base">Light</a>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default NotesPage;
