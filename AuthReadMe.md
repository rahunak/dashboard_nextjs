Здесь я опишу как работает аунтификация с помощью NextAuth.js
1. установка pnpm i next-auth@beta
2. Next, generate a secret key for your application. This key is used to encrypt cookies, ensuring the security of user sessions. You can do this by running the following command in your terminal: 

```
# macOS
openssl rand -base64 32
# Windows can use https://generate-secret.vercel.app/32 
```
Then, in your .env file, add your generated key to the AUTH_SECRET variable:
```
AUTH_SECRET=your-secret-key
```
3. Create an auth.config.ts file at the root.  
It will contain the configuration options for NextAuth.js
 ```
import type { NextAuthConfig } from 'next-auth';
export const authConfig = {
  pages: {
    signIn: '/login',
  },
} satisfies NextAuthConfig;
```
Это позволит перенаправлять юзера на нашу кастомную страницу логинизации.

4. Защита путей с Next.js Middleware
This will prevent users from accessing the dashboard pages unless they are logged in.
```
callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnDashboard = nextUrl.pathname.startsWith('/dashboard');
      if (isOnDashboard) {
        if (isLoggedIn) return true;
        return false; // Redirect unauthenticated users to login page
      } else if (isLoggedIn) {
        return Response.redirect(new URL('/dashboard', nextUrl));
      }
      return true;
    },
  },
```
Обьяснение:
The authorized callback is used to verify if the request is authorized to access a page with Next.js Middleware. 
The providers option is an array where you list different login options. 

5. Next, you will need to import the authConfig object into a Middleware file.
In the root of your project, create a file called middleware.ts and paste the following code:

```
import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
 
export default NextAuth(authConfig).auth;
 
export const config = {
  // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};
```
Здесь инициализируется NextAuth.js с authConfig обьектом.
matcher определяет по каким путям должен запускаться Middleware





