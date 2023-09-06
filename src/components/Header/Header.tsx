import s from "./styles.module.css";

import logo from "./logo.png";

export function Header() {
    return (
        <header className={s.header}>
            <div className={s.logo_box}>
                <img className={s.logo} src={logo} alt="airplane_logo" />
            </div>
        </header>
    );
}
