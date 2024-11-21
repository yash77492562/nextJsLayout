# Next.js Layout with TurboRepo

This project demonstrates a **Next.js** layout setup using **TurboRepo**. The layout includes the following features:

- **Global environment variables**
- **Encrypt and decrypt utility methods**
- **Prisma integration for database operations**
- **User authentication logic**: Redirects users to the sign-in page if no `userId` is found
- **Tailwind CSS integration** for styling

---

## Project Structure

├── apps/ 
   │ ├── web/ # Next.js application 
   │ └── ... # Other apps (if any) 
├── packages/ 
   │ ├── ui/ # Shared UI components (e.g., buttons, inputs) 
   │ ├── utils/ # Shared utility functions (encryption, etc.) 
   │ └── ... # Other shared packages 
   ├── prisma/ # Prisma schema and migrations 
├── .env # Environment variables ├
── turbo.json # TurboRepo configuration
## Features

### 1. **Global Environment Variables**
Environment variables are configured using a `.env.local` file and accessed throughout the project using `process.env`.

#### Example:
```env
DATABASE_URL=your_database_url
JWT_SECRET=your_secret_key