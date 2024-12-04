import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
  locales: ["en", "ar"],
  defaultLocale: "en",
  matcher: ["/", "/(ar|en)/:path*"],
};
