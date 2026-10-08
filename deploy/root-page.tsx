// Copied to app/page.tsx by .github/workflows/deploy.yml. The published site is
// only the partner page, so the site root forwards visitors there.
// (Locally, app/page.tsx is the older Nenkin Kantan home page, kept out of git.)
const target = `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/partner/`;

export const metadata = {
  title: "Nenkin Kantan Partner Program",
};

export default function RootRedirect() {
  return (
    <main style={{ padding: 24, fontFamily: "system-ui, sans-serif" }}>
      <meta httpEquiv="refresh" content={`0; url=${target}`} />
      <a href={target}>Nenkin Kantan Partner Program</a>
    </main>
  );
}
