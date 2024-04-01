import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FAQsection = () => {
  return (
    <section id="faq">
      <div className="px-4 md:px-20 bg-secondary w-full flex flex-col justify-center py-10 ">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-3xl font-bold pb-2">Frequently Asked Questions</h1>
          <p>
            Here are some of our FAQs. If you have any other questions
            you&apos;d like answered please feel free to email us.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <Accordion
            type="single"
            collapsible
            className="w-8/12 pt-4 "
          >
            <AccordionItem value="item-1">
              <AccordionTrigger>Lorem ipsum dolor sit amet consectetur adipisicing elit?</AccordionTrigger>
              <AccordionContent>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia aliquid deserunt impedit eum pariatur odit sit dolorem alias! Nam laborum odit, harum perspiciatis quam eaque dignissimos iusto nesciunt unde voluptatum.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>Necessitatibus quis! In ex eaque hic nostrum iste illo ipsam?</AccordionTrigger>
              <AccordionContent>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid delectus tempora ipsum voluptates impedit, voluptatum nostrum pariatur debitis cupiditate, fugit illo dolorem necessitatibus voluptas officiis quos tenetur magnam esse sequi
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>In ex eaque hic nostrum iste illo ipsam, necessitatibus quis, adipisicing elit?</AccordionTrigger>
              <AccordionContent>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid delectus tempora ipsum voluptates impedit, voluptatum nostrum pariatur debitis cupiditate, fugit illo dolorem necessitatibus voluptas officiis quos tenetur magnam esse sequi
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger>Lorem ipsum dolor sit amet consectetur adipisicing elit?</AccordionTrigger>
              <AccordionContent>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid delectus tempora ipsum voluptates impedit, voluptatum nostrum pariatur debitis cupiditate, fugit illo dolorem necessitatibus voluptas officiis quos tenetur magnam esse sequi
              </AccordionContent>
            </AccordionItem>


          </Accordion>
        </div>
      </div>
    </section>
  );
};
