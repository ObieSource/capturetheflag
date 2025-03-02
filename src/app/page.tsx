"use client";
import Link from 'next/link'
import { SimpleAccordion } from "@/components/accordion";
import { Flagger, SimpleLink } from '@/components/flagger';
import { useEffect } from 'react';
import { useParams } from 'next/navigation';


export default function Home() {
  const params = useParams();
  useEffect(() => {
    document.getElementById(window.location.hash)?.scrollTo();
  }, [params]);
  return (
    <div className="mx-auto w-full lg:w-3/4">
      <h1 className="w-full text-center text-xl lg:text-4xl mt-10 font-bold">Welcome to ObieSource's Capture the Flag!</h1>
      <p className="pt-10 pb-20 px-2 mr-auto w-full lg:w-3/4">Below are all of the challenges. Each beginner challenge is worth 1 point, each intermediate challenge is worth 3 points, and each advanced challenge is worth 5 points. Your team's goal is to get as many points as you can! You should be working on as many challenges as you can before time runs out! Divy up the problems among skill level, and get breaking! After the allotted time, one person from each group will share the score that you got!</p>

      <h1 className="font-bold text-xl" id="beginner">Beginner</h1>
      <SimpleAccordion headers={["LOGIN-REQUIRED", "TREES", "A-RIVER-IN-EGYPT"]} allowMultipleExpanded allowZeroExpanded>
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
        <div>
          <p className="pt-5">
            Below is some interesting information on the Nile River! Please note: the server has to send a large file, so please don't send too many requests at once!
          </p>
          <p className="pt-5">
            Click <SimpleLink href="/egypt">here</SimpleLink>!
          </p>

          <Flagger challenge="A-RIVER-IN-EGPYT" />
        </div>
      </SimpleAccordion>

      <h1 className="font-bold text-xl pt-10" id="intermediate">Intermediate</h1>
      <SimpleAccordion headers={["IP-T-SHIRT", "FLAG-STORAGE-LOCATION", "RESET-PASSWORD"]} allowMultipleExpanded allowZeroExpanded>
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

        <div>
          <p className="pt-5">
            In this challenge, you'll reset someone's password.
          </p>
          <p className="pt-5">
            Click <SimpleLink href="/resetpassword">here</SimpleLink>!
          </p>

          <Flagger challenge="RESET-PASSWORD" />
        </div>
      </SimpleAccordion>

      <h1 className="font-bold text-xl pt-10" id="advanced">Advanced</h1>
      <SimpleAccordion headers={["AP-CHARTER", "COOKIES", "AND-MILK"]} allowMultipleExpanded allowZeroExpanded>
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
        <div>
          <p className="pt-5">
            In this challenge, you'll learn all about the cookie command line utility!
          </p>
          <p className="pt-5">
            Click <SimpleLink href="/cookies" >here</SimpleLink>!
          </p>

          <Flagger challenge="COOKIES" />
        </div>
        <div>
          <p className="pt-5">
            There is no page for this one! Your challenge is to break one of the other challenges! One of the challenges relies on using an insecure method to keep track of the challenge. Your job is to find out what it is and break it!
          </p>

          <Flagger challenge="AND-MILK" />
        </div>
      </SimpleAccordion>
    </div>
  );
}
