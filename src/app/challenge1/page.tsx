export default async function IdQueryChallenge({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const id = (await searchParams).id;
  const shouldShowCode = id == "42";
  return (
    <div className="">
      This is page {id}.
      {shouldShowCode && <span> The flag is CTF-B67-MHMT. </span>}
    </div>
  );
}
