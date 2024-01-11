import logo from './Img/bg.jpg';
import MyComponent from './JS';
import './App.css';

function App() {
  return (
    <>
      <header class="header">
        <div class="container">
            <ul class="social-icons pt-3">
                <li class="social-item"><a class="social-link text-light" href="#"><i class="ti-facebook" aria-hidden="true"></i></a></li>
                <li class="social-item"><a class="social-link text-light" href="#"><i class="ti-twitter" aria-hidden="true"></i></a></li>
                <li class="social-item"><a class="social-link text-light" href="#"><i class="ti-google" aria-hidden="true"></i></a></li>
                <li class="social-item"><a class="social-link text-light" href="#"><i class="ti-instagram" aria-hidden="true"></i></a></li>
                <li class="social-item"><a class="social-link text-light" href="#"><i class="ti-github" aria-hidden="true"></i></a></li>
            </ul>  
            <div class="header-content">
                <h4 class="header-subtitle" >Halo, Aku</h4>
                <h1 class="header-title">Khislah Ja'far Priyanto</h1>
                <h6 class="header-mono" >Siswa SMKN 6 Jember</h6>
            </div>
        </div>
    </header>

    <nav class="navbar sticky-top navbar-expand-lg navbar-light bg-white" data-spy="affix" data-offset-top="510">
        <div class="container">
            <button class="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse mt-sm-20 navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item">
                        <a href="#home" class="nav-link">Home</a>
                    </li>
                    <li class="nav-item">
                        <a href="#about" class="nav-link">Tentangku</a>
                    </li>
                    <li class="nav-item">
                        <a href="#resume" class="nav-link">Resume</a>
                    </li>
                </ul>
                <ul class="navbar-nav brand">
                    <img src="assets/imgs/avatar.jpg" alt="" class="brand-img" />
                    <li class="brand-txt">
                        <h5 class="brand-title">Khislah Ja'far Priyanto</h5>
                        <div class="brand-subtitle">Siswa SMKN 6 Jember</div>
                    </li>
                </ul>
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <a href="#about" class="nav-link">Info Pribadi</a>
                    </li>
                    <li class="nav-item">
                        <a href="#blog" class="nav-link">Blog</a>
                    </li>
                    <li class="nav-item last-item">
                        <a href="#contact" class="nav-link">Kontak</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    <div class="container-fluid">
        <div id="about" class="row about-section">
            <div class="col-lg-6 about-card">
                <h3 class="font-weight-light">Siapa saya ?</h3>
                <span class="line mb-5"></span>
                <h5 class="mb-3">Saya adalah kubu terdepan </h5>
                <p class="mt-20">Seseorang yang menentang sistem Matrix yang telah di buat oleh elite global</p>
            </div>
            <div class="col-lg-6 about-card">
                <h3 class="font-weight-light">Info Pribadi</h3>
                <span class="line mb-5"></span>
                <ul class="mt40 info list-unstyled">
                    <li><span>Email</span> : hackprime1125@gmail.com</li>
                    <li><span>Telepon</span> : 0823-3179-2160</li>
                    <li><span>Alamat</span> :  Indonesia</li>
                </ul>
                <ul class="social-icons pt-3">
                    <li class="social-item"><a class="social-link" href="#"><i class="ti-facebook" aria-hidden="true"></i></a></li>
                    <li class="social-item"><a class="social-link" href="#"><i class="ti-twitter" aria-hidden="true"></i></a></li>
                    <li class="social-item"><a class="social-link" href="#"><i class="ti-google" aria-hidden="true"></i></a></li>
                    <li class="social-item"><a class="social-link" href="#"><i class="ti-instagram" aria-hidden="true"></i></a></li>
                    <li class="social-item"><a class="social-link" href="#"><i class="ti-github" aria-hidden="true"></i></a></li>
                </ul>  
            </div>
        </div>
    </div>

    <section class="section" id="resume">
        <div class="container">
            <h2 class="mb-5"><span class="text-danger">My</span> Resume</h2>
            <div class="row">
                <div class="col-md-12 col-lg-12">
                    <div class="card">
                       <div class="card-header">
                            <div class="mt-2">
                                <h4>Kata Kata</h4>
                                <span class="line"></span>  
                            </div>
                        </div>
                        <div class="card-body">
                            <h6 class="title text-danger">2023</h6>
                            <p class="subtitle">Tidak ada yang pria yang sempurna, hanya saja wanita yang mengidealisasikannya</p>
                            <hr />
                            <h6 class="title text-danger">2023</h6>
                            <p>Kualitas diri kita mengundang cinta yang setara
Jika seseorang bajingan keparat yang datang padamu, bisa jadi kualitas dirimulah yang mengundangnya</p>
                            <hr />
                            <h6 class="title text-danger">2023</h6>
                            <p class="subtitle">Anda hanya saya hormati bukan saya takuti</p>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <div class="section contact" id="contact">
        <div id="map" class="map"></div>
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="contact-info-card">
                        <h4 class="contact-title">Kontak</h4>
                        <div class="row mb-2">
                            <div class="col-1 pt-1 mr-1">
                                <i class="ti-mobile icon-md"></i>
                            </div>
                            <div class="col-10 ">
                                <h6 class="d-inline">Phone : <br /> <span class="text-muted">0823-3179-2160</span></h6>
                            </div>
                        </div>
                        <div class="row mb-2">
                            <div class="col-1 pt-1 mr-1">
                                <i class="ti-map-alt icon-md"></i>
                            </div>
                            <div class="col-10">
                                <h6 class="d-inline">Alamat :<br /> <span class="text-muted">Indonesia</span></h6>
                            </div>
                        </div>
                        <div class="row mb-2">
                            <div class="col-1 pt-1 mr-1">
                                <i class="ti-envelope icon-md"></i>
                            </div>
                            <div class="col-10">
                                <h6 class="d-inline">Email :<br /> <span class="text-muted">hackprime1125@gmail.com</span></h6>
                            </div>
                        </div>
                        <ul class="social-icons pt-4">
                            <li class="social-item"><a class="social-link text-dark" href="#"><i class="ti-facebook" aria-hidden="true"></i></a></li>
                            <li class="social-item"><a class="social-link text-dark" href="#"><i class="ti-twitter" aria-hidden="true"></i></a></li>
                            <li class="social-item"><a class="social-link text-dark" href="#"><i class="ti-google" aria-hidden="true"></i></a></li>
                            <li class="social-item"><a class="social-link text-dark" href="#"><i class="ti-instagram" aria-hidden="true"></i></a></li>
                            <li class="social-item"><a class="social-link text-dark" href="#"><i class="ti-github" aria-hidden="true"></i></a></li>
                        </ul> 
                    </div>
                </div>
            </div>

        </div>
    </div>
    <footer class="footer py-3">
        <div class="container">
            <p class="small mb-0 text-light">
                &copy; <script>document.write(new Date().getFullYear())</script> @ By <a href="" target="_blank"><span class="text-danger" title="Bootstrap 4 Themes and Dashboards">~Khislah</span></a> 
            </p>
        </div>
    </footer>
    </>
  );
}

export default App;
