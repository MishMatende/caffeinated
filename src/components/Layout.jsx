export default function Layout(props) {
  const { children } = props;

  const header = (
    <header>
      <div>
        <h1 className="text-gradient">CAFFEINATED</h1>
        <p>For Coffee Insatiates</p>
      </div>
      <button>
        <p>Sign up free</p>
        <i className="fa-solid fa-mug-hot"></i>
      </button>
    </header>
  );

  const footer = (
    <footer>
      <p>
        <span className="text-gradient">Caffeinated</span> was made by{" "}
        <a target="_blank" href="https://github.com/MishMatende">
          Mishael Matende
        </a>
        <br /> using the{" "}
        <a target="_blank" href="https://www.fantacss.smoljames.com/">
          FantaCSS
        </a>{" "}
        design library.
      </p>
    </footer>
  );

  return (
    <>
      {header}
      <main>{children}</main>
      {footer}
    </>
  );
}
