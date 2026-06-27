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
                <img className="icon" src="img/instagram.png" alt="instagram" />
              </a>
              <a
                href="https://www.linkedin.com/in/m-azmi-al-fadillah"
                target="_blank"
              >
                <img className="icon" src="img/linkedin.png" alt="linkedin" />
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
              <img src="img/html-5.png" alt="html" />
              <h4>HTML</h4>
            </section>
            <section className="skill-card">
              <img src="img/css-3.png" alt="CSS" />
              <h4>CSS</h4>
            </section>
            <section className="skill-card">
              <img src="img/js.png" alt="Javascript" />
              <h4>Javascript</h4>
            </section>
            <section className="skill-card">
              <img src="img/tailwind.png" alt="Tailwind" />
              <h4>Tailwind</h4>
            </section>
            <section className="skill-card">
              <img src="img/react.png" alt="React Js" />
              <h4>React Js</h4>
            </section>
            <section className="skill-card">
              <img src="img/git.png" alt="React Js" />
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
