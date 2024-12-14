# OCF QR code generator
OCF is a Christmas event hosted by the Romanian Scouting Organization where we wrap people's gifts for them. As I'm in charge of the even this year, I built this app where each volunteer gets their own personal code which we scan in order to take attendance. The QR codes send a request to my server to update the Google Sheets file we use in order to keep track of the date of their check-in and check-out.
# Demo
I cannot provide the deployment link since it might interfere with our event but I prepared this video to try and show how it works.

https://github.com/user-attachments/assets/7d776175-554a-4558-afce-d047b4b0c8d7

# Technologies
- Sveltekit
- Tailwindcss
- [QR code API](https://goqr.me/api/)
# Building yourself
Here are the instructions for setting up a svelte project:
## Setting up Svelte

Everything you need to build a Svelte project, powered by [`sv`](https://github.com/sveltejs/cli).

### Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npx sv create

# create a new project in my-app
npx sv create my-app
```

### Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

### Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.

## Tailwindcss
The instructions for setting up Tailwindcss with Sveltekit can be found here https://tailwindcss.com/docs/guides/sveltekit
