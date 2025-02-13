"use client"; 
import React from 'react';
import { Children, ReactNode } from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';

export type SimpleAccordionProps = Omit<React.HTMLProps<HTMLDivElement>, "onChange"|"headers"> & {
    preExpanded?: string[]
    allowMultipleExpanded?: boolean
    allowZeroExpanded?: boolean
    headers: string[]
    onChange?(opened: string[]): any
}

export function SimpleAccordion({
    headers, children, ...props
}: SimpleAccordionProps) {
    console.assert(Children.count(children) === headers.length, `Length of headers does not match length of children in SimpleAccordian. Found ${headers.length} headers but ${Children.count(children)} children for ${headers}`);
    if (Children.count(children) !== headers.length) {
        return <></>;
    }

    const childs = React.Children.toArray(children);

    return (
        <Accordion {...props}>
            {headers.map((id, i) => (
                <AccordionItem uuid={id} key={id} className="accordion__item !border-t-2 pt-2 !border-b-0 mt-3 !border-l-0 !border-r-0 !border-t-[#A64D79]">
                    <AccordionItemHeading className="accordion__heading!border-none">
                    <AccordionItemButton className="accordion__button !bg-[#1A1A1D] font-serif uppercase !border-none !text-[#A64D79]"
                    >{id}
                    </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>{childs[i]}</AccordionItemPanel>
                    
                </AccordionItem>
            ))}
        </Accordion>
    )
}