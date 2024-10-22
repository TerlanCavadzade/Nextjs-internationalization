export async function GET(request) {
  return new Response(
    JSON.stringify({
      en: {
        title: "hello",
        lang: "language",
      },
      az: {
        title: "salam",
        lang: "dil",
      },
      ru: {
        title: "russian",
        lang: "some russian word",
      },
    }),
    {
      status: 200,
      headers: { "Content-Type": "application/json" },
    }
  );
}
