export default async function IdChallenge({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  const shouldShowCode = id == "42";
  return (
    <div className="">
      This is page {id}.
      {shouldShowCode && <span>The flag is CTF-FUR-6Q2A.</span>}
    </div>
  );
}
