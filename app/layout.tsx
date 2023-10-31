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
        {children}
      </body>
    </html>
  );
}
