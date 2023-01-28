const nav= document.querySelector("header");
nav.innerHTML=
`
    <nav class="navbar navbar-dark mt-2 rounded-3 ms-auto me-auto bg-vilagosFekete orange_border">
      <div class="container-fluid">
        <a class="navbar-brand" href="index.html">
          <img src="img/kelo_logo.gif" alt="logo">
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
              <a class="nav-link" href="akcios_termekek.html">Akciós termékek</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="bukosisak.html">Bukósisak</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="ruhazat.html">Ruházat</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="vedofelszereles.html">Védőfelszerelés</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="felszereles.html">Felszerelés</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="kiegeszitok.html">Kiegészítők</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="tartozekok.html">Tartozékok</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="alkatresz.html">Alkatrész</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="kenoanyag_szuro.html">Kenőanyag</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    `;
 