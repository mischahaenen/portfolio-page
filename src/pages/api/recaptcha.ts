// Source: https://docs.astro.build/en/recipes/captcha/#recipe
export const POST = async (request: { token: string }) => {
  const response = await fetch(
    "https://www.google.com/recaptcha/api/siteverify",
    {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `secret=${import.meta.env.RECAPTCHA_SECRET_KEY}&response=${
        request.token
      }`,
    },
  );
  const responseData = await response.json();
  return new Response(JSON.stringify(responseData), { status: 200 });
};
