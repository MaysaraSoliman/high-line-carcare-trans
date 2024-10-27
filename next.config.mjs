// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     compiler: {
//         styledComponents: true,
//     },
// };

// export default nextConfig;


// module.exports = {
//     compiler: {
//         styledComponents: true,
//     },
// }


// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     reactStrictMode: true,
//     compiler: {
//         styledComponents: true,
//     },
// };

// module.exports = nextConfig
//************************************************ */

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     reactStrictMode: true,
//     compiler: {
//         styledComponents: true,
//     },
// };

// export default nextConfig;

//****************************************** */

/** @type {import('next').NextConfig} */
import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig = {
    reactStrictMode: true,
    compiler: {
        styledComponents: true,
    },
};

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
export default withNextIntl(nextConfig);

