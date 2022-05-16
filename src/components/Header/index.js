import { useState } from 'react';
import Nav from "../Nav";
import Main from "../Main";

function Header() {
    const [categories] = useState([
        { name: 'about', description: 'All about my', path: '/about' },
        { name: 'portfolio', description: 'My portfolio of projects', path: '/portfolio'},
        { name: 'contact', description: 'Contact me', path: '/contact' },
        { name: 'resume', description: 'My resume', path: '/resume' },
      ]);
      const [currentCategory, setCurrentCategory] = useState(categories[0]);
      const [contactSelected, setContactSelected] = useState(false);

    return (
        <>
        <header className="flex-row px-1">
            <h2>
                <a data-testid="link" href="/">
                    Nate Granzow's Portfolio
                </a>
            </h2>
            <Nav
                categories={categories}
                setCurrentCategory={setCurrentCategory}
                currentCategory={currentCategory}
                contactSelected={contactSelected}
                setContactSelected={setContactSelected}
            ></Nav>
        </header>
        <main>
        <div>
            <Main currentCategory={currentCategory}></Main>
        </div>
      </main>
      </>
    )
}

export default Header;