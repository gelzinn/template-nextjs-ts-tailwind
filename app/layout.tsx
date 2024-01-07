import '../styles/globals.css';

export default function RootLayout({ children }: any) {
  return (
    <html lang="pt-BR">
      <head>
        <title>Next.js 13 Template - @gelzinn</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link
          rel="icon"
          href="https://github.com/gelzinn.png"
          type="image/png"
        />
      </head>

      <body>
        <main className="relative flex min-h-screen w-screen flex-col items-center justify-center gap-4 bg-zinc-50 text-zinc-950 dark:bg-black dark:text-zinc-50">
          {children}
        </main>
      </body>
    </html>
  );
}
