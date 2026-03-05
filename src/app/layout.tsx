import "../index.css";

export const metadata = {
  title: 'SHIBUBU - Portfolio',
  description: 'Projects by SHIBUBU',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-BZW86XNFEV" />
        <script dangerouslySetInnerHTML={{ __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-BZW86XNFEV');
        `}} />
      </head>
      <body>{children}</body>
    </html>
  )
}
