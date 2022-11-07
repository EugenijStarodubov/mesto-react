import React from 'react';

import logo from '../images/header/logo.svg';


function Header() {
	return (
		<header className="header page__header">
			<img src={logo} alt="Логотип - Место (Россия)" className="logo header__logo" />
		</header>
	);
}

export default Header;