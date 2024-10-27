import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ConfigProvider } from "antd";
import type { ThemeConfig } from "antd";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import MainLayout from "../_layout";
import { StyledComponentsRegistry } from "@/lib/registry";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "High Line Car Care",
  description: "High Line Car Care",
};

const config: ThemeConfig = {
  token: {
    colorPrimary: "#cf0a0a",
    colorTextBase: "#fff",
    colorBgBase: "#000",
  },
};

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const messages = await getMessages();
  const direction = locale === "ar" ? "rtl" : "ltr";
  console.log("local =>", locale);
  return (
    <NextIntlClientProvider messages={messages}>
      <html lang={locale}>
        <body className={inter.className} suppressHydrationWarning={true}>
          <StyledComponentsRegistry>
            <AntdRegistry>
              <ConfigProvider theme={config} direction={direction}>
                <MainLayout>{children}</MainLayout>
              </ConfigProvider>
            </AntdRegistry>
          </StyledComponentsRegistry>
        </body>
      </html>
    </NextIntlClientProvider>
  );
}
