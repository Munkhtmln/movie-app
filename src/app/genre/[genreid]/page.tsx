import GenrePage from "../page";

export default async function Genres({
  params,
}: {
  params: Promise<{ genreid: string }>;
}) {
  const { genreid } = await params;
  return (
    <div>
      <GenrePage />
    </div>
  );
}
