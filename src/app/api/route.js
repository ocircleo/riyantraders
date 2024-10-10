export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  return Response.json({ hi: id });
}
