/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.tsx",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://ai-content-gen_owner:MHkyJcl1KSf4@ep-still-term-a52n78v0.us-east-2.aws.neon.tech/ai-content-gen?sslmode=require',
    }
  };