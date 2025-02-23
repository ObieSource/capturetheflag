import { HtmlComment } from "../../components/html-comment";

function H1(props: any) {
  return <h1 className="text-4xl pt-4" {...props}>{props.children}</h1>;
}
function H2(props: any) {
  return <h2 className="text-3xl pt-4" {...props}>{props.children}</h2>;
}
function H3(props: any) {
  return <h3 className="text-2xl pt-4" {...props}>{props.children}</h3>;
}
function P(props: any) {
  return <h3 className="pt-2" {...props}>{props.children}</h3>;
}

/* eslint-disable react/no-unescaped-entities */
export default function Charter() {
  return (
    <div className="p-12">
      <H1>Oberlin CS Majors' Committee Charter</H1>

      <HtmlComment text={"The flag is CTF-CZ3-WRJT"} />

      <H2>Purpose & Responsibilities</H2>
      <p>
        The Computer Science Majors' Committee (CSMC) exists to serve as a
        representative body for Computer Science (CS) students. The Committee
        shall, as necessary, set and enforce policy for the CS labs (games,
        noise food, et cetera), and will work to bolster the Oberlin Computer
        Science Community through activities, T-shirts, and special events
        (UNIX/Emacs night, Games Night, Hat Day, CS tea, etc.).
      </p>

      <H2>Membership</H2>
      <p>
        Members of the Committee are elected for a full or partial school year.
        All members' terms end at the close of the Spring Semester. Members must
        be declared CS majors. Members must attend all CSMC meetings except in
        special circumstances. A member who is absent from three meetings
        becomes "inactive" and may be removed from the CSMC by unanimous
        agreement among all active members. In addition, members are expected to
        participate in the activities of the CSMC.
      </p>

      <H2>Committee Anatomy</H2>
      <p>
        The Committee shall be made up of six CS majors, at least three of which
        should not be graduating at the end of their term. The Committee is
        responsible for selecting its own officers after elections, either at
        the end of the outgoing term or at the beginning of the new term. The
        Committee must elect at least Chair and Co-chair positions; the
        Committee may create and elect additional secondary positions for the
        duration of its term as necessary.
      </p>

      <H2>Meetings</H2>
      <p>
        The Committee shall hold meetings weekly that will generally be open to
        all students who wish to attend. For the Fall 2015 semester we will be
        meeting from 12:15-1:15pm in the conference room! The Committee shall
        publish important notes from meetings as necessary.
      </p>

      <H2>Elections</H2>
      <p>
        The Committee shall hold an election on the second week of April of its
        term to elect the Committee for the following year; the election may be
        held another week if special circumstances would depress attendance or
        turnout of CS students. The Committee shall publicize the election to CS
        majors in the weeks prior to the election. The date, time, and location
        of the election meeting shall be sent in advance to all majors and
        posted on msgs. The Committee chair or co-chair shall preside over the
        election; should neither the chair nor the co-chair be present, the most
        senior Committee member present shall preside over the election. The
        election shall be divided into three parts: nominations, candidate
        statements, and voting.
      </p>

      <H3>(1) Nominations</H3>
      <p>
        Majors may nominate themselves or be nominated by others as candidates
        for election. Majors who are nominated must be present to accept or
        decline except in special circumstances. If only six candidates accept
        nominations, candidates may be accepted as a single slate so long as
        there are no objections.
      </p>

      <H3>(2) Candidate Statements</H3>
      <p>
        Subsequent to nominations, all candidates shall have time to make a
        brief personal statement regarding themselves and their candidacy to
        those present. Once all candidates have made statements, students
        present may engage in a brief question and answer session with the
        candidates as directed by the Committee member running the election.
      </p>

      <H3>(3) Voting</H3>
      <p>
        Once candidate statements and questions have been completed, voting will
        proceed in two rounds. In the first round, up to three positions for
        members who will not be graduating at the end of the new Committee term
        will be elected first; if there are fewer than three such candidates,
        that number of such positions will be voted on first. Once these
        positions are filled, all unelected candidates run for the remaining
        positions. In either round, if there are fewer candidates than
        positions, those candidates may be accepted as a single slate so long as
        there are no objections. Each person voting may vote for as many
        candidates as there are positions in a given round, but may not vote for
        a candidate more than once. Voting shall be done by secret ballot.
        Candidates in each round shall vote first, and then shall step out from
        the meeting so the remaining majors can enter closed discussion. During
        closed discussion, majors shall have the opportunity to discuss the
        candidates in that round privately and at length and then vote by secret
        ballot. Candidates in a round may not count the ballots from their
        round. Once the incoming Committee has been elected, the new Committee
        membership shall be posted to msgs.
      </p>

      <H2> Resignations and Special Elections</H2>
      <p>
        If a member chooses to resign, he or she will provide one week's
        previous notice at a Committee meeting. He or she will be required to
        continue to perform any requisite duties until the next Committee
        meeting. The Committee shall then call a special election in a prompt
        manner to fill the position according with the previously detailed
        election standards.
      </p>
      <H2>Amendments to this document</H2>
      <p>
        Any proposed amendment to this charter must be announced six days before
        it is to be voted upon. An amendment will be accepted if it is approved
        by two-thirds of the CS students voting on it.
      </p>
      <p>
        <em>Charter last revised 09.19.2007 by nferrara.</em>
      </p>
    </div>
  );
}
