import Link from 'next/link'
import { SimpleAccordion } from "@/components/accordion";

export default function Home() {
  return (
    <div className="mx-auto w-full lg:w-3/4">
      <h1 className="w-full text-center text-xl lg:text-4xl mt-10 font-bold">Welcome to ObieSource's Capture the Flag!</h1>
      <p className="pt-10 pb-20 px-2 mr-auto w-full lg:w-3/4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque ipsa cumque iusto aspernatur necessitatibus distinctio vel, cum cupiditate fugit sequi, aut iste praesentium. Eius quisquam ratione animi porro nulla quo!</p>

      <h1 className="font-bold text-xl">Beginner</h1>

      <h1 className="font-bold text-xl">Intermediate</h1>
      <SimpleAccordion headers={["IP-T-SHIRT"]} allowMultipleExpanded allowZeroExpanded>
        <div>
          <p className="pt-5">
            In this challenge, you'll get to view the magnificent CS department T-shirt
            from a previous year. There's also a flag hiding somewhere.
          </p>
          <p className="pt-5">
            Click <Link className="text-[#DD88CF] font-bold leading-snug hover:underline hover:decoration-[#6A1E55] underline-offset-4 decoration-[2px]" href="/t-shirts?year=2022" >here</Link>!
          </p>
        </div>
      </SimpleAccordion>

      <h1 className="font-bold text-xl">Advanced</h1>
      <SimpleAccordion headers={["AP-COMMENT"]} allowMultipleExpanded allowZeroExpanded>
        <div>
          <p className="pt-5">
            Here will be a description on this CTF
          </p>
          <p className="pt-5">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut optio, ratione nulla tenetur doloribus obcaecati magni quibusdam, maxime nam fugiat reprehenderit facere cum blanditiis quod eum adipisci. Ex, eius delectus.
          </p>
          <p className="pt-5">
            Click <Link className="text-[#DD88CF] font-bold leading-snug hover:underline hover:decoration-[#6A1E55] underline-offset-4 decoration-[2px]" href="/challenge3" >here</Link>!
          </p>
        </div>
      </SimpleAccordion>
    </div>
  );
}
