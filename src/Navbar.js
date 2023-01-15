function Navbar() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a className="navbar-brand" href='/'>Electric Nobody</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <ul className="navbar-nav collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
            <li className="nav-item">
              <a className="nav-link" href='/#/preface'>Preface</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href='/#/acknowledgement'>Acknowledgement</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href='https://troubledepartment.com/?product=bodyelectronic-poems-by-aerik-francis-paperback-preorder' target="_blank" rel="noreferrer">Buy the E-Book</a>
            </li>
          </ul>
          </div>
      </nav>
    </header>
  )
}

export default Navbar;
