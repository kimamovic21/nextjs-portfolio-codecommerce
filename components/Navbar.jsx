import React, {useState, useEffect} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import {FaLinkedinIn, FaGithub, FaFacebook, FaInstagram} from 'react-icons/fa'; 
import {useRouter} from 'next/router';

const Navbar = () => {

  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState('#ecf0f3');
  const [linkColor, setLinkColor] = useState('#1f2937');
  
  const router = useRouter();

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
        if (window.scrollY >= 90) {
            setShadow(true);
        } else {
            setShadow(false);
        }
    };
    window.addEventListener('scroll', handleShadow);
  }, []);

  useEffect(() => {
    if (
        router.asPath === '/property' ||
        router.asPath === '/crypto' ||
        router.asPath === '/netflix' ||
        router.asPath === '/twitch'
    ) {
        setNavBg('transparent')
        setLinkColor('#ecf0f3')
    } else  {
        setNavBg('#ecf0f3')
        setLinkColor('#1f2937')
    }
  }, [router]);
                        
  return (
    <div style={{backgroundColor: `${navBg}`}}
         className={shadow 
                    ? "fixed w-full h-20 shadow-xl z-[100]"
                    : "fixed w-full h-20 z-[100]"}>

        <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">

            <Image src="/../public/assets/kerim.png" 
                   alt="My image"
                   width="140"
                   height="60"
                   className='rounded-xl'
            />
        
           <div>
               <ul style={{color: `${linkColor}`}}
                   className='hidden md:flex'>
                   <Link href='/'>
                       <li className='ml-10 text-sm uppercase hover:border-b hover:border-slate-900'>
                           Home
                        </li>
                   </Link>
                   <Link href='/#about'>
                       <li className='ml-10 text-sm uppercase hover:border-b hover:border-slate-900'>
                           About
                        </li>
                   </Link>
                   <Link href='/#skills'>
                       <li className='ml-10 text-sm uppercase hover:border-b hover:border-slate-900'>
                           Skills
                        </li>
                   </Link>
                   <Link href='/#projects'>
                       <li className='ml-10 text-sm uppercase hover:border-b hover:border-slate-900'>
                           Projects
                        </li>
                   </Link>
                   <Link href='/#contact'>
                       <li className='ml-10 text-sm uppercase hover:border-b hover:border-slate-900'>
                           Contact
                        </li>
                   </Link>
               </ul>
           </div>

           <div className='md:hidden cursor-pointer'
                onClick={handleNav}>
                <AiOutlineMenu size={30} 
                               style={{color: `${linkColor}`}}
                />
           </div>

        </div>

        <div className={nav ? 'fixed left-0 top-0 w-full h-screen bg-black/60 md:hidden' : ' '}>

            <div className={nav 
                            ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[40%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500'
                            : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
                           }
            >

                <div>
                    <div className='flex w-full items-center justify-between'>
                        <Image src='/../public/assets/kerim.png' 
                               alt='My logo'
                               width={100}
                               height={50}
                               className='rounded-xl'
                        />

                        <div className='rounded-full shadow-lg shadow-gray-500 p-3 cursor-pointer'
                             onClick={handleNav}>
                            <AiOutlineClose/>
                        </div>    
                    </div>

                    <div className='border-b border-gray-300 my-4'>
                        <p className='w-[85%] md:w-[90%] py-4'>
                            Let's build something legendary together.
                        </p>
                    </div>
                </div>

                <div className='py-4 flex flex-col'>
                    <ul className='uppercase max-w-[20%]'>
                        <Link href='/'>
                            <li onClick={() => setNav(false)}
                                className='py-2 text-sm hover:border-b hover:border-slate-900'>
                                Home
                            </li>
                        </Link>
                        <Link href='/#about'>
                            <li onClick={() => setNav(false)}
                                className='py-2 text-sm hover:border-b hover:border-slate-900'>
                                About
                            </li>
                        </Link>
                        <Link href='/#skills'>
                            <li onClick={() => setNav(false)}
                                className='py-2 text-sm hover:border-b hover:border-slate-900'>
                                Skills
                            </li>
                        </Link>
                        <Link href='/#projects'>
                            <li onClick={() => setNav(false)}
                                className='py-2 text-sm hover:border-b hover:border-slate-900'>
                                Projects
                            </li>
                        </Link>
                        <Link href='/#contact'>
                            <li onClick={() => setNav(false)}
                                className='py-2 text-sm hover:border-b hover:border-slate-900'>
                                Contact
                            </li>
                        </Link>
                    </ul>

                    <div className='pt-10'>
                        <p className='uppercase tracking-widest text-[#5651e5]'>
                            Let's connect.
                        </p>

                        <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                            <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer
                                            hover:scale-105 ease-in duration-300'>
                                <FaLinkedinIn />
                            </div>
                            <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer
                                            hover:scale-105 ease-in duration-300'>
                                <FaGithub />
                            </div>
                            <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer
                                            hover:scale-105 ease-in duration-300'>
                                <FaFacebook />
                            </div>
                            <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer
                                            hover:scale-105 ease-in duration-300'>
                                <FaInstagram />
                            </div>
                        </div>

                    </div>
                </div>

            </div>

        </div>

    </div>
  )
}

export default Navbar;





// 1. dodajemo Image element
// 2. Image element mora sadrzati visinu i sirinu slike
// 3. putanja slika (src) mora sadrzati na pocetku / 
// 4. svoj logo sam uradio u wordu :D
// 5. dodajemo ul element i unutar njega Link elemente zajedno sa li elementom
// 6. instaliramo react-icons u terminalu - npm i react-icons
// 7. md:hidden znaci sve sto je iznad medium screen size bit ce sakriveno (nece se vidjeti na ekranu)
// 8. kad dodajemo ikonu iz react-icons moramo staviti /fa na kraju ako ikona pocinje npr sa FaFacebook
// 9. dodajemo useState [nav, setNav] hook 
// 10. dodajemo handleNav funkciju ispod react useState hook
// 11. dodajemo onClick dogadaj i handleNav funkciju u AiOutlineMenu i AiOutlineClose roditeljski div
// 12. u divu koji se nalazi u 102. liniji koda dodajemo klasu kao uslov {nav ? ... : ...} ako je nav istinit sta treba da se desi sa divom
// 13. u divu koji se nalazi u 105. liniji koda uredujemo na slican nacin kao i prethodni div element
// 14. dodajemo shadow useState 
// 15. dodajemo useEffetc hook
// 16. dodajemo handleShadow funkciju i uslov unutar tijela funkcije
// 17. nakon toga dodajemo addEventListener - nakon sto skrolamo ekran zelimo da pozovemo funkciju handleShadow
// 18. uredujemo div u 28. liniji koda (div ispod return)
// 19. u divu za mobile menu (li elementi) dodajemo onClick dogadaj i funkciju - nakon sto kliknemo jedan od navedenih linkova, mobile menu ce da se zatvori
// 20. dodajemo useState za promjenu boje nav elementa
// 21. dodajemo useState za promjenu boje linka
// 22. dodajemo na vrhu fajla import {useRouter} from 'next/router';
// 23. deklarisemo router varijablu
// 24. dodajemo jos jedan useEffect hook
// 25. dodajemo inline style prvom divu u React komponenti
// 26. dodajemo inline style u 63. i 86. liniju koda