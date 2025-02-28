import Link from 'next/link'
import { SimpleAccordion } from "@/components/accordion";
import { Flagger, SimpleLink } from '@/components/flagger';


export default function Home() {
  return (
    <div className="mx-auto w-full lg:w-3/4">
      <h1 className="w-full text-center text-xl lg:text-4xl mt-10 font-bold">Welcome to ObieSource's Capture the Flag!</h1>
      <p className="pt-10 pb-20 px-2 mr-auto w-full lg:w-3/4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque ipsa cumque iusto aspernatur necessitatibus distinctio vel, cum cupiditate fugit sequi, aut iste praesentium. Eius quisquam ratione animi porro nulla quo!</p>

      <h1 className="font-bold text-xl">Beginner</h1>
      <SimpleAccordion headers={["LOGIN-REQUIRED", "TREES"]} allowMultipleExpanded allowZeroExpanded>
        <div>
          <p className="pt-5">
            Welcome to Obiesource's first CTF challenge. To get started, please login!
          </p>
          
          <p className="pt-5">
            Click <SimpleLink href="/login">here</SimpleLink>!
          </p>

          <Flagger challenge="LOGIN-REQUIRED" />

        </div>
        <div>
          <p className="pt-5">
            Some information on cherry trees.
          </p>
          
          <p className="pt-5">
            Click <SimpleLink href="/tree">here</SimpleLink>!
          </p>

          <Flagger challenge="TREES" />

        </div>
      </SimpleAccordion>

      <h1 className="font-bold text-xl">Intermediate</h1>
      <SimpleAccordion headers={["IP-T-SHIRT", "FLAG-STORAGE-LOCATION"]} allowMultipleExpanded allowZeroExpanded>
        <div>
          <p className="pt-5">
            In this challenge, you'll get to view the magnificent CS department T-shirt
            from a previous year. There's also a flag hiding somewhere.
          </p>
          <p className="pt-5">
            Click <SimpleLink href="/t-shirts?year=2022">here</SimpleLink>!
          </p>

          <Flagger challenge="IP-T-SHIRT" />
        </div>
        <div>
          <p className="pt-5">
            We don't have a link for you for this challenge. But maybe you don't need it.
          </p>

          <Flagger challenge="FLAG-STORAGE-LOCATION" />
        </div>
      </SimpleAccordion>

      <h1 className="font-bold text-xl">Advanced</h1>
      <SimpleAccordion headers={["AP-CHARTER"]} allowMultipleExpanded allowZeroExpanded>
        <div>
          <p className="pt-5">
            In this challenge, you'll be looking at the charter for the Computer Science
            Majors' Committee.
          </p>
          <p className="pt-5">
            Click <SimpleLink href="/charter" >here</SimpleLink>!
          </p>

          <Flagger challenge="AP-CHARTER" />
        </div>
      </SimpleAccordion>
    </div>
  );
}
