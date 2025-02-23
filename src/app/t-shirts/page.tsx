const shirtUrls: Record<string, string[]> = {
  2023: ["images/2023_tshirt_front.jpg", "images/2023_tshirt_back.png"],
  2022: ["images/2022_front.JPG", "images/2022_back.png"],
  2021: ["images/shirt2021front.png", "images/shirt2021back.png"],
  2020: ["images/shirt2020.png"],
  2019: ["images/shirt2019.jpg"],
  2018: ["images/shirt2018.png"],
  2017: ["images/shirt2017.jpg"],
  2016: ["images/shirt2016.jpg"],
  2015: ["images/shirt2015.jpg"],
  2014: ["images/shirt2014front.jpg", "images/shirt2014back.jpg"],
  2013: ["images/shirt2013.jpg"],
  2012: ["images/shirt2012.png"],
};

export default async function IdQueryChallenge({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
  const year = (await searchParams).year;
  const yearShirtUrls = shirtUrls[year || ""];
  if (!year || !yearShirtUrls) {
    return <div className="px-10 py-4 text-lg w-full"> <p>T-shirt for year not found.</p> </div>
  }
      const shouldShowCode = year == "2021";
  return (
    <div className="px-10 py-4 text-lg w-full">
      <p>
        In the spring of each year since time untold, the students of the OCCS
        community annually vote on a design for a departmental T-shirt. The
        design accepted and printed for the year {year} is available below for
        the world to see the creative genius featured therein.
      </p>
      {shouldShowCode && <p>By the way, the flag is CTF-B67-MHMT.</p>}
      <div className="flex flex-wrap gap-10 text-center items-center justify-center w-full pt-8">
        {yearShirtUrls.map((url: string) => (
          <img
            key={url}
            src={`https://obiesource.github.io/csmc-website/${url}`}
            className="max-h-96 max-w-96"
          />
        ))}
      </div>
    </div>
  );
}
