import React, { useState } from "react";

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";
import { MdOutlineArrowDropDown } from "react-icons/md";
import "./values.css";
import data from "../../utils/Accordian";

const Values = () => {
  return (
    <section className="v-wrapper">
      <div className="paddings inner-width flex-center v-container">
        {/* Left side */}
        <div className="v-left">
          <div className="img-container">
            <img src="./value.png" alt="" />
          </div>
        </div>
        {/* Right side */}
        <div className="flex-col-start v-right">
          <span className="orange-text">Our Value</span>
          <span className="primary-text">Value We Give To You</span>
          <span className="secondary-text">
            We are always ready to help by providing the best services for you
            <br />
            We believe a good place to live can make your life better
          </span>

          <Accordion
            className="accordion"
            allowMultipleExpanded={false}
            preExpanded={[0]}
          >
            {data.map((item, i) => {
              const [className, setClassName] = useState(null);
              return (
                <AccordionItem
                  className={`accordion-item ${className}`}
                  key={i}
                  uuid={i}
                >
                  <AccordionItemHeading>
                    <AccordionItemButton className="flex-center accordion-btn">
                      <AccordionItemState>
                        {({ expanded }) =>
                          expanded
                            ? setClassName("expanded")
                            : setClassName("collapsed")
                        }
                      </AccordionItemState>

                      <div className="flex-center icon">{item.icon}</div>

                      <span className="primary-text">{item.heading}</span>

                      <div className="flex-center icon">
                        <MdOutlineArrowDropDown size={20} />
                      </div>
                    </AccordionItemButton>
                  </AccordionItemHeading>

                  <AccordionItemPanel className="text">
                    <p className="secondary-text">{item.detail}</p>
                  </AccordionItemPanel>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Values;
