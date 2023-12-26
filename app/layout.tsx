import '../styles/globals.css';

export default function RootLayout({ children }: any) {
  return (
    <html lang="pt-BR">
      <head>
        <title>Next.js 13 Template - @gelzinn</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link rel="shortcut icon" href="..." type="image/x-icon" />
      </head>

      <body>
        <main className="relative flex flex-col items-center justify-center gap-4 h-screen w-screen bg-zinc-50 text-black dark:bg-black dark:text-zinc-50">
          {children}

          <div className="flex items-center justify-center absolute bottom-8">
            <p>
              Created by{' '}
              <a
                href="https://gelzin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800"
              >
                gelzin
              </a>
              .
            </p>
          </div>
        </main>
      </body>
    </html>
  );
}
