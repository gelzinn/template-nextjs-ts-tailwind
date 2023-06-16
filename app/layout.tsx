import '../styles/globals.css';

export default function RootLayout({ children }: any) {
  return (
    <html lang="pt-BR">
      <head>
        <title>Loopscape — A Software House</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link rel="shortcut icon" href="/loopscape-logo.svg" type="image/x-icon" />
      </head>

      <body>
        {children}
      </body>
    </html>
  );
}
