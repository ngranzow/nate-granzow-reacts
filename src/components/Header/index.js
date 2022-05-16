import { useState } from 'react';
import Nav from "../Nav";

function Header() {
    const [categories] = useState([
        {
          name: 'home',
          description: 'Welcome to Nate Granzow\'s Portfolio',
        },
        { name: 'about', description: 'All about my' },
        { name: 'portfolio', description: 'My portfolio of projects'},
        { name: 'contact', description: 'Contact me' },
        { name: 'resume', description: 'My resume' },
      ]);
      const [currentCategory, setCurrentCategory] = useState(categories[0]);
      const [contactSelected, setContactSelected] = useState(false);

    return (
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
    )
}

export default Header;