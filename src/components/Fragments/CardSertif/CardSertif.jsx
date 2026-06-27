import './cardSertif.css'

const CardSertif = ({ title, issuer, date, credential, src }) => {
  return (
    <a href={credential} target="_blank" rel="noopener noreferrer" className='container-card-sertif'>
      <div className="card-sertif">
        <div className="overlay">
          <h4>{title}</h4>
          <p className="issuer">{issuer}</p>
          <p className="date">{date}</p>
        </div>
        <img src={src || 'https://marketplace.canva.com/EAE7PurBiCo/1/0/1600w/canva-hitam-emas-luxury-elegant-sertifikat-penghargaan-certificate-EBsK1Jtibzg.jpg'} alt={title} />
      </div>
    </a>
  );
};

export default CardSertif;
