import {Switch, Route, Link} from 'react-router-dom'
import logo from '../images/header/logo.svg';

function Header({userEmail}) {
  return (
    <header className="header page__header">
      <img src={logo} alt="Логотип - Место (Россия)" className="logo header__logo" />
      <Switch>

        <Route path="/sign-up">
          <Link to="/sign-in" className="header__link">
            Войти
          </Link>
        </Route>

        <Route path="/sign-in">
          <Link to="/sign-up" className="header__link">
            Регистрация
          </Link>
        </Route>

        <Route path="/">
          <Link to="/sign-in" className="header__link">
            {userEmail} Выйти
          </Link>
        </Route>

      </Switch>
    </header>
  );
};

export default Header;
