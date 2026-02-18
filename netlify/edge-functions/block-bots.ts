import type { Config, Context } from "@netlify/edge-functions";

export default async (request: Request, context: Context) => {
  const url = new URL(request.url);
  const forbiddenPaths = ["/api", "/admin", "/index.php", "/"];
  const isPost = request.method === "POST";

  if (isPost && forbiddenPaths.includes(url.pathname)) {
    console.log(`Blocked bot access to: ${url.pathname}`);

    // 204 No Content 또는 403을 반환하여 즉시 종료
    return new Response(null, { status: 204 });
  }

  return context.next();
};

export const config: Config = {
  path: ["/api", "/admin", "/index.php", "/"],
};
