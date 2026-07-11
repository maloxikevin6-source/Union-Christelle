import "./globals.css";

export const metadata = {
  title: "Union-Christelle",
  description: "Agence matrimoniale Union-Christelle",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
