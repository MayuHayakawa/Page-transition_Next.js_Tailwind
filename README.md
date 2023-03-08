reference(YouTube): https://www.youtube.com/watch?v=S4HYwsBRpRs&t=928s

Created with React + Next.js + Tailwind(CSS)

<hr>

create next app (https://nextjs.org/docs/api-reference/create-next-app)
```console
npx create-next-app@latest *FOLDERNAME*
```

install tailwind in Next.js (https://tailwindcss.com/docs/guides/nextjs)
```console
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```
then add the paths to all of template files in `tailwind.config.js` file
```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

library: Framer-motion (https://www.framer.com/motion/)
```console
npm i framer-motion
```