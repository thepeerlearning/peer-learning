module.exports = {
  reactStrictMode: true,
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  env: {
    STRIPE_PUBLIC_KEY: process.env.STRIPE_PUBLIC_KEY,
    NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME:
      process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
    CLOUDINARY_URL: process.env.CLOUDINARY_URL,
    NEXT_PUBLIC_CLOUDINARY_PRESET_NAME:
      process.env.NEXT_PUBLIC_CLOUDINARY_PRESET_NAME,
  },
  images: {
    domains: ["res.cloudinary.com"],
  },
}
