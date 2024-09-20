# MERN Project

This is a MERN project.


## Clone the Repository

First, clone the repository to your local machine:

```bash
https://github.com/Rajon-Dash/Task-Frontend.git

cd Task-Frontend
```

## Install Dependencies

Run the following command to install the project dependencies:

```bash
npm install
npm install axios
```

## Install Tailwind CSS via npm

Install Tailwind CSS and its dependencies:

```bash
npm install -D tailwindcss postcss autoprefixer
```

## Create the Tailwind Configuration Files

Generate the Tailwind configuration files:

```bash
npx tailwindcss init -p
```

## Configure Your `tailwind.config.js` File

Update your `tailwind.config.js` file as follows:

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

## Add Tailwind  to Your `global.css` File

Include the Tailwind directives in your `src/styles.css` file:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## Run the Application

Finally, run the application using the following command:

```bash
npm run dev
```

Now you can access your application at `http://localhost:3000/`.
```
