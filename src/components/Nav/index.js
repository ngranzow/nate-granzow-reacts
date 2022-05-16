import { useEffect } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Nav(props) {
    const {
        categories = [],
        setCurrentCategory,
        currentCategory,
        contactSelected,
        setContactSelected
    } = props;

    useEffect(() => {
        document.title = capitalizeFirstLetter(currentCategory.name);
    }, [currentCategory]);

    return (
        <nav>
            <ul className="nav justify-content-end">
                {categories.map((category) => (
                    <li
                        className={`nav-item ${currentCategory.name === category.name && !contactSelected && 'navActive'
                            }`}
                        key={category.name}
                    >
                        <a className='nav-link'
                            onClick={() => {
                                setCurrentCategory(category);
                                setContactSelected(false);
                            }}
                        >
                            {capitalizeFirstLetter(category.name)}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Nav;