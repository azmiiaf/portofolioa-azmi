import "./App.css";
import Card from "./components/Fragments/Card.jsx";
import BlurText from "./components/Fragments/BlurText.jsx";
import CardSertif from "./components/Fragments/CardSertif/CardSertif.jsx";

function App() {
  const eventNav = () => {
    const navbarul = document.querySelector(".navbar-ul");
    navbarul.classList.toggle("active");
  };

  return (
    <>
      <header>
        <nav className="navbar">
          <h1>
            M. AZMI <b>AL FADILLAH</b>
          </h1>
          <ul className="navbar-ul">
            <li>
              <a href="#about">
                TENTANG
                <span />
              </a>
            </li>
            <li>
              <a href="#experience">
                PENGALAMAN
                <span />
              </a>
            </li>
            <li>
              <a href="#skill">
                KEMAMPUAN
                <span />
              </a>
            </li>
            <li>
              <a href="#project">
                PROJECT
                <span />
              </a>
            </li>
            <li>
              <a href="#sertification">
                SERTIFIKAT
                <span />
              </a>
            </li>
          </ul>
          <div className="humburger-nav">
            <input type="checkbox" onClick={eventNav} />
            <span></span>
            <span></span>
            <span></span>
          </div>
        </nav>
      </header>
      <main className="main">
        <section id="about">
          <section className="intro">
            <BlurText
              text="Halo, Saya M. Azmi Al Fadillah"
              delay={150}
              animateBy="words"
              direction="top"
              className="sub-intro text-2xl mb-8"
            />
            <p>
              Saya mahasiswa semester 6 progam studi Informatika di Universitas
              Bhayangkara Jakarta Raya. Memiliki minat karier di bidang
              Front-end Development. Selama berkuliah memiliki pengalaman dalam
              membuat projek pribadi di bagian Front-end serta mampu membuat
              perencanaan aplikasi atau web agar terstruktur dan mampu bekerja
              sama dengan tim. Serta siap untuk berkontribusi secara positif
              dalam lingkungan akademik maupun profesional
            </p>
            <section className="contact">
              <a href="https://www.instagram.com/azmiiiaf" target="_blank">
                <svg className="icon" fill="#d0d0d0" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Instagram</title><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.933 3.35.626 4.134C.33 4.898.131 5.77.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.863.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.757 6.162 6.162 6.162 3.405 0 6.162-2.757 6.162-6.162 0-3.402-2.757-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a
                href="https://www.linkedin.com/in/m-azmi-al-fadillah"
                target="_blank"
              >
                <svg className="icon" fill="#d0d0d0" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>LinkedIn</title><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
            </section>
          </section>
          <span className="kotak">
            <img className="profile" src="img/profile.png" alt="" />
          </span>
        </section>

        <section id="experience">
          <h3>PENGALAMAN</h3>
          <section className="cards">
            <section className="card">
              <section className="img">
                <img src="img/experience_mentor.png" alt="Lead Frontend Dev" />
              </section>
              <section className="desc">
                <h3>DSC Ubhara (Development Student Club)</h3>
                <h4>Lead Frontend Dev</h4>
                <h4>Agustus 2025 - Sekarang · 11bln</h4>
                <ul>
                  <li>
                    Memimpin dan mengoordinasi tim dalam penyusunan materi
                    pembelajaran Frontend Dev
                  </li>
                  <li>
                    Membantu anggota memahami konsep dasar dan kompleks dalam
                    pengembangan projek website.
                  </li>
                  <li>
                    Berkolaborasi dengan tim lain untuk meningkatkan kualitas
                    keterampilan teknis.
                  </li>
                </ul>
              </section>
            </section>
            <section className="card">
              <section className="img">
                <img src="img/experience1.jpg" alt="" />
              </section>
              <section className="desc">
                <h3>Workshop & Jobfair Universitas Bhayangkara</h3>
                <h4>13 Mei 2024</h4>
                <ul>
                  <li>Menjaga arus masuknya peserta agar tetap kondusif</li>
                  <li>
                    Bekerja sama dengan anggota lain untuk menjaga lingkungan
                    tetap aman.
                  </li>
                </ul>
              </section>
            </section>
            <section className="card">
              <section className="img">
                <img src="img/experience2.jpg" alt="" />
              </section>
              <section className="desc">
                <h3>Vokara Cup</h3>
                <h4>2 Feb 2024 - 4 Feb 2024</h4>
                <ul>
                  <li>
                    Menjadi Koordinator K3. berhasil menjalankan prosedur pada
                    kesehatan, keamanan, keselamatan peserta lomba dan panitia.
                  </li>
                  <li>Mengontrol lingkungan agar tetap kondusif.</li>
                  <li>
                    Berhasil memimpin para anggota dengan baik ke beberapa
                    bagian dari K3.
                  </li>
                </ul>
              </section>
            </section>
          </section>
        </section>

        <section id="skill">
          <h3>KEMAMPUAN</h3>
          <section className="col-skills">
            <section className="skill-card">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" alt="html" />
              <h4>HTML</h4>
            </section>
            <section className="skill-card">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" alt="CSS" />
              <h4>CSS</h4>
            </section>
            <section className="skill-card">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" alt="Javascript" />
              <h4>Javascript</h4>
            </section>
            <section className="skill-card">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" alt="Tailwind" />
              <h4>Tailwind</h4>
            </section>
            <section className="skill-card">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" alt="React Js" />
              <h4>React Js</h4>
            </section>
            <section className="skill-card">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" alt="Git/GitHub" />
              <h4>Git/GitHub</h4>
            </section>
          </section>
        </section>

        <section id="project">
          <h3>PROJECT</h3>
          <section className="col-project">
            <a
              href="https://azmi190104.github.io/ShoeStore/"
              target="_blank"
              className="card-project"
            >
              <Card
                firstContent={
                  <img
                    src="img/project1.png"
                    alt=""
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      borderRadius: "10px",
                    }}
                  />
                }
                secondContent={
                  <div
                    style={{
                      width: "100%",
                      height: "100%",
                      display: "grid",
                      placeItems: "center",
                      backgroundColor: "#111",
                    }}
                  >
                    <p
                      style={{
                        fontWeight: 900,
                        fontSize: ".8rem",
                        color: "#ffffff",
                      }}
                    >
                      <h2>ShoeStore</h2>
                      <ul className="desc-project">
                        <li>
                          Mengimplementasikan desain yang dibuat menjadi sebuah
                          tampilan website toko sepatu online yang dibuat
                          menggunakan HTML, CSS, dan Javascript.
                        </li>
                      </ul>
                    </p>
                  </div>
                }
                gridSize={20}
                pixelColor="#ffffff"
                animationStepDuration={0.4}
                className="custom-pixel-card"
              />
            </a>
            <a
              href="https://r-movie-id.vercel.app/"
              target="_blank"
              className="card-project"
            >
              <Card
                firstContent={
                  <img
                    src="img/project2.png"
                    alt=""
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      borderRadius: "10px",
                    }}
                  />
                }
                secondContent={
                  <div
                    style={{
                      width: "100%",
                      height: "100%",
                      display: "grid",
                      placeItems: "center",
                      backgroundColor: "#111",
                    }}
                  >
                    <p
                      style={{
                        fontWeight: 900,
                        fontSize: ".8rem",
                        color: "#ffffff",
                      }}
                    >
                      <h2>R-Movies</h2>
                      <ul className="desc-project">
                        <li>
                          Mengembangkan projek pada mata kuliah kecerdasan
                          buatan, membuat website infromasi film yang responsif
                          untuk tampilan mobile dan desktop.
                        </li>
                        <li>
                          Mengimplementasikan algoritma Content-Based Filtering
                          pada sistem rekomendasi, untuk menemukan film yang
                          sesuai dengan preferensi pengguna.
                        </li>
                        <li></li>
                      </ul>
                    </p>
                  </div>
                }
                gridSize={20}
                pixelColor="#ffffff"
                animationStepDuration={0.4}
                className="custom-pixel-card"
              />
            </a>
            <a
              href="https://github.com/azmiiaf/myStore"
              target="_blank"
              className="card-project"
            >
              <Card
                firstContent={
                  <img
                    src="img/project_mystore.png"
                    alt="MyStore"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      borderRadius: "10px",
                    }}
                  />
                }
                secondContent={
                  <div
                    style={{
                      width: "100%",
                      height: "100%",
                      display: "grid",
                      placeItems: "center",
                      backgroundColor: "#111",
                    }}
                  >
                    <p
                      style={{
                        fontWeight: 900,
                        fontSize: ".8rem",
                        color: "#ffffff",
                      }}
                    >
                      <h2>MyStore</h2>
                      <ul className="desc-project">
                        <li>
                          Projek pertama menggunakan React untuk membuat
                          e-commerce sederhana.
                        </li>
                        <li>
                          Menerapkan konsep dasar React hingga penggunaan hooks
                          seperti useEffect.
                        </li>
                      </ul>
                    </p>
                  </div>
                }
                gridSize={20}
                pixelColor="#ffffff"
                animationStepDuration={0.4}
                className="custom-pixel-card"
              />
            </a>
            <a href="#" target="_blank" className="card-project">
              <Card
                firstContent={
                  <img
                    src="img/project_banksampah.png"
                    alt="Bank Sampah"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      borderRadius: "10px",
                    }}
                  />
                }
                secondContent={
                  <div
                    style={{
                      width: "100%",
                      height: "100%",
                      display: "grid",
                      placeItems: "center",
                      backgroundColor: "#111",
                    }}
                  >
                    <p
                      style={{
                        fontWeight: 900,
                        fontSize: ".8rem",
                        color: "#ffffff",
                      }}
                    >
                      <h2>Bank Sampah-Bakti Alam</h2>
                      <ul className="desc-project">
                        <li>Pengembangan platform pengelolaan bank sampah.</li>
                        <li>membantu pengelola dalam mengelola data nasabah</li>
                        <li>
                          menerapkan algoritma VIKOR pada peringkat nasabah
                          terbaik
                        </li>
                        <li>
                          penerapan responsive untuk tampilan mobile dan desktop
                        </li>
                      </ul>
                    </p>
                  </div>
                }
                gridSize={20}
                pixelColor="#ffffff"
                animationStepDuration={0.4}
                className="custom-pixel-card"
              />
            </a>
          </section>
        </section>
        <div id="sertification">
          <h3
            className="title"
            style={{
              textAlign: "center",
              marginTop: "120px",
              paddingTop: "30px",
            }}
          >
            SERTIFIKAT
          </h3>
          <div className="col-sertif">
            <CardSertif
              title="Belajar Dasar Pemrograman Web"
              issuer="Dicoding"
              date="Oktober 2024 - Oktober 2027"
              credential="https://www.dicoding.com/certificates/EYX4J2KVJZDL"
              src="img/cert_dasar_web.png"
            />
            <CardSertif
              title="Belajar Membuat Aplikasi Web dengan React"
              issuer="Dicoding"
              date="November 2024 - November 2027"
              credential="https://www.dicoding.com/certificates/0LZ04YV4NP65"
              src="img/cert_react.png"
            />
            <CardSertif
              title="RevoU Mini Course Software Engineering"
              issuer="RevoU"
              date="Februari 2024 - Sekarang"
              credential="https://certificates.revou.co/azmi-alfadillah-certificate-attendance-sefc.pdf"
              src="img/cert_revou.png"
            />
            <CardSertif
              title="Belajar Dasar Pemrograman Javascript"
              issuer="Dicoding"
              date="Oktober 2024 - Oktober 2027"
              credential="https://www.dicoding.com/certificates/JLX1473DJX72"
              src="img/cert_dasar_js.png"
            />
            <CardSertif
              title="Sertifikasi Kompetensi - Junior Web Developer"
              issuer="Lembaga Sertifikasi BPPTIK"
              date="November 2025 - November 2025"
              credential="#"
              src="img/cert_bpptik.png"
            />
          </div>
        </div>
      </main>
      <script src="script.js"></script>
    </>
  );
}

export default App;
