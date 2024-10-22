import "../globals.css";

import LangSwitch from "../_components/LangSwitch";

const Layout = ({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) => {
  return (
    <>
      <html lang={locale}>
        <body>
          <header>
            <nav>
              <LangSwitch locale={locale} />
            </nav>
          </header>
          <main className="flex min-h-screen flex-col items-center justify-between p-24">
            {children}
          </main>
        </body>
      </html>
    </>
  );
};

export default Layout;
