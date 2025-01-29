import "./App.css";
import Card from "./components/Fragments/Card.jsx";
import BlurText from "./components/Fragments/BlurText.jsx";

function App() {
  return (
    <>
      <header>
        <nav className="navbar">
          <h1>
            M. AZMI <b>AL FADILLAH</b>
          </h1>
          <ul>
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
          </ul>
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
            className="sub-intro text-2xl mb-8"/>
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
                <img src="img/experience1.jpg" alt="" />
              </section>
              <section className="desc">
                <h3>Workshop & Jobfair Universitas Bhayangkara</h3>
                <h4>13 Mei 2024</h4>
                <ul>
                <li>Menjaga arus masuknya peserta agar tetap kondusif</li>
                <li>Bekerja sama dengan anggota lain untuk menjaga lingkungan tetap aman.</li>
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
                  <li>Menjadi Koordinator K3. berhasil menjalankan prosedur pada kesehatan, keamanan, keselamatan peserta lomba dan panitia.</li>
                  <li>Mengontrol lingkungan agar tetap kondusif.</li>
                  <li>Berhasil memimpin para anggota dengan baik ke beberapa bagian dari K3.</li>
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
              <a href="https://azmi190104.github.io/ShoeStore/" target="_blank" className="card-project">
              <Card
                firstContent={
                  <img
                    src="img/project1.png"
                    alt=""
                    style={{
                      width: "90%",
                      height: "50%",
                      objectFit: "cover",
                      margin: "15% 0",
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
                      <ul className="desc-project">
                        <li>Mengimplementasikan desain yang dibuat menjadi sebuah tampilan website toko sepatu online yang dibuat menggunakan HTML, CSS, dan Javascript.</li>
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
              <a href="https://r-movie-id.vercel.app/" target="_blank" className="card-project">
              <Card
                firstContent={
                  <img
                    src="img/project2.png"
                    alt=""
                    style={{
                      width: "90%",
                      height: "50%",
                      objectFit: "cover",
                      margin: "15% 0",
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
                      <ul className="desc-project">
                        <li>Mengembangkan projek pada mata kuliah kecerdasan buatan, membuat website infromasi film yang responsif untuk tampilan mobile dan desktop.</li>
                        <li>Mengimplementasikan algoritma Content-Based Filtering pada sistem rekomendasi, untuk menemukan film yang sesuai dengan preferensi pengguna.</li>
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
              
            
          </section>
        </section>
      </main>
      <script src="script.js"></script>
    </>
  );
}

export default App;
