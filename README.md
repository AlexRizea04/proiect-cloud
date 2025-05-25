This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/pages/api-reference/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/pages/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn-pages-router) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/pages/building-your-application/deploying) for more details.

Rizea Alexandru Gabriel, grupa 1134, SIMPRE
https://www.youtube.com/watch?v=v8b-nP4F3YI
https://proiect-cloud-alex-rizeas-projects.vercel.app/
https://github.com/AlexRizea04/proiect-cloud

CAR SERVICE WEB APPLICATION
INTRODUCERE
Proiectul „Service Auto” reprezintă o aplicație web modernă dedicată gestionării eficiente a programărilor într-un service auto. Într-un domeniu în continuă dezvoltare, digitalizarea proceselor administrative devine esențială pentru optimizarea timpului și îmbunătățirea comunicării între clienți și service. Această platformă oferă utilizatorilor posibilitatea de a administra toate aspectele legate de programările auto, de la înregistrarea problemelor și estimarea costurilor, până la monitorizarea statusului intervențiilor.
Pentru dezvoltarea aplicației s-au utilizat tehnologii moderne precum Next.js pentru partea de frontend și backend, MongoDB Atlas ca serviciu cloud pentru stocarea datelor și Clerk pentru autentificarea și autorizarea utilizatorilor. Integrarea acestor servicii cloud asigură scalabilitate, securitate și performanță, elemente esențiale pentru o aplicație web robustă și ușor de utilizat. Astfel, aplicația este capabilă să gestioneze volume mari de date și să ofere o experiență intuitivă și sigură utilizatorilor.
Funcționalitățile principale ale aplicației includ vizualizarea și gestionarea programărilor, adăugarea de noi solicitări de service, actualizarea informațiilor și filtrarea programărilor finalizate. Accesul este restricționat prin autentificare, garantând că doar persoanele autorizate pot efectua modificări. Prin acest proiect, se evidențiază avantajele utilizării tehnologiilor cloud în dezvoltarea soluțiilor software moderne, oferind un instrument util pentru eficientizarea activității unui service auto.
API SI FLUX DE DATE
Aplicația „Service Auto” dispune de un API REST construit cu Next.js, care permite gestionarea completă a programărilor într-un service auto. Prin intermediul acestui API, utilizatorii pot efectua operațiuni de tip CRUD (creare, citire, actualizare, ștergere) asupra programărilor. Datele sunt stocate într-o bază de date MongoDB Atlas, iar comunicarea dintre API și baza de date se realizează prin driverul oficial MongoDB pentru Node.js. Endpoint-urile API-ului includ posibilitatea de a prelua lista completă de programări, a obține detalii despre o programare specifică, a adăuga o programare nouă, a modifica o programare existentă și a șterge programări, toate prin metode HTTP standard.
Fluxul de date al aplicației respectă convențiile REST, utilizând metodele HTTP corespunzătoare fiecărei operațiuni: GET pentru preluarea datelor, POST pentru crearea de noi programări, PUT pentru actualizarea acestora și DELETE pentru ștergerea programărilor. Datele sunt transmise și primite în format JSON, cu câmpuri clare precum numele proprietarului, marca autovehiculului, problema tehnică raportată, prețul estimat și data programării, asigurând o structură coerentă și ușor de procesat.
 
Pentru securitate și controlul accesului, aplicația integrează serviciul cloud Clerk, care se ocupă de autentificarea și autorizarea utilizatorilor. Astfel, doar utilizatorii autentificați pot accesa și modifica programările din sistem. Clerk gestionează sesiunile utilizatorilor și oferă componente și middleware dedicate pentru Next.js care protejează atât interfața utilizator, cât și endpoint-urile API, asigurând blocarea accesului pentru utilizatorii neautorizați și păstrând securitatea și integritatea datelor.

CAPTURI APLICATIE
 
Pentru acest proiect am folosit documentația oficială a Next.js, care m-a ajutat să înțeleg cum să structurez aplicația și să creez rutele și API-urile necesare. Aceasta este o resursă foarte utilă pentru dezvoltarea de aplicații web moderne și rapide.
Pentru stocarea datelor am folosit MongoDB Atlas, un serviciu cloud care oferă o bază de date NoSQL. Documentația lor m-a ajutat să configurez conexiunea și să lucrez cu datele într-un mod simplu și eficient. De asemenea, pentru autentificare și securitate, am folosit Clerk, care oferă componente gata făcute pentru gestionarea conturilor de utilizator.
Pe lângă acestea, am consultat și tutoriale online și articole care m-au ajutat să găsesc soluții practice pentru problemele întâlnite.



