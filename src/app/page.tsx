import Link from 'next/link'
import { SimpleAccordion } from "@/components/accordion";
import { Flagger, SimpleLink } from '@/components/flagger';


export default function Home() {
  return (
    <div className="mx-auto w-full lg:w-3/4">
      <h1 className="w-full text-center text-xl lg:text-4xl mt-10 font-bold">Welcome to ObieSource's Capture the Flag!</h1>
      <p className="pt-10 pb-20 px-2 mr-auto w-full lg:w-3/4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque ipsa cumque iusto aspernatur necessitatibus distinctio vel, cum cupiditate fugit sequi, aut iste praesentium. Eius quisquam ratione animi porro nulla quo!</p>

      <h1 className="font-bold text-xl">Beginner</h1>
      <SimpleAccordion headers={["LOGIN-REQUIRED"]} allowMultipleExpanded allowZeroExpanded>
        <div>
          <p className="pt-5">
            Welcome to Obiesource's first CTF challenge. To get started, please login!
          </p>
          
          <p className="pt-5">
            Click <SimpleLink href="/login">here</SimpleLink>!
          </p>

          <Flagger challenge="LOGIN-REQUIRED" />

        </div>
      </SimpleAccordion>

      <h1 className="font-bold text-xl">Intermediate</h1>
      <SimpleAccordion headers={["IP-T-SHIRT", "IP-NOWHERE", "EMPTY-PAGE"]} allowMultipleExpanded allowZeroExpanded>
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
            This challenge is a weird one; we don't have a link for you.
            In fact, you're not even supposed to see this flag, but you might accidentally run into it while you're lost in the weeds of other challenges.
          </p>

          <Flagger challenge="IP-NOWHERE" />
        </div>
        <div>
          <p className="pt-5">
            Not much here. Where might it be? This might take a few tries.
          </p>
          
          <p className="pt-5">
            Click <SimpleLink href="/empty">here</SimpleLink>!
          </p>

          <Flagger challenge="EMPTY-PAGE" />

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
