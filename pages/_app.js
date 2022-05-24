import Navbar from '../components/Navbar';
import '../styles/globals.css';
//import '/styles/styles.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;





// 1. npx create-next-app@latest
// 2. dodamo .babelrc fajl unutar naseg projekta
// 3. pokrenemo server npm run dev
// 4. uredujemo - brisemo odredene stvari iz index.js fajla
// 4. kreiramo folder components
// 5. instaliramo tailwind css https://tailwindcss.com/docs/guides/nextjs
// 6. dodati ekstenziju za visual studio code tailwind css intellisense
// 7. uredujemo globals.css fajl 
// 8. kreiramo i uredujemo Navbar.jsx fajl
// 9. kreiramo i uredujemo Main.jsx fajl
// 10. kreiramo i uredujemo About.jsx fajl
// 11. kreiramo i uredujemo Skills.jsx fajl
// 12. kreiramo i uredujemo Projects.jsx fajl
// 13. kreiramo i uredujemo ProjectItem.jsx fajl
// 14. kreiramo i uredujemo Contact.jsx fajl
// 15. Uredujemo Navbar.jsx element
// 16. dodajemo smooth scroll u globals.css fajl
// 17. dodajemo id-eve svakoj React komponenti (div na pocetku)
// 18. uredujemo Link elemente, href atribute u Navbar komponenti
// 19. dodajemo komponente u pages folder (react-router-dom)
// 20. uredujemo property.jsx komponentu
// 21. dodajemo <> </>
// 22. dodajemo Navbar komponentu unutar return ( );
// 23. kreiramo crypto.jsx React komponentu 
// 24. kreiramo netflix.jsx React komponentu
// 25. kreiramo twitch.jsx React komponentu