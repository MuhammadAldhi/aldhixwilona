import ScrollFloat from "../components/ui/ScrollFloat"
import styled from 'styled-components';

const Form = () => {
  return (
    <StyledWrapper>
      <div className="container">

        <div className="heading">Message</div>
        <form className="form">
          <input required className="input cursor-target" type="text" name="Nama" id="Nama" placeholder="Nama" />
          <textarea
            required
            className="input textarea cursor-target"
            name="message"
            id="message"
            placeholder="Alasan"
          ></textarea>

          <input className="login-button cursor-target" type="submit" defaultValue="Kirim" />
        </form>

        <div className="social-account-container">
          <span className="title">Or Message With</span>
          <div className="social-accounts">
            <a href="https://wa.me/087818457387" target="_blank" rel="noopener noreferrer">
              <button className="social-button whatsapp cursor-target">
                <svg className="svg" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.432 5.631 1.433h.005c6.554 0 11.89-5.335 11.893-11.892a11.826 11.826 0 00-3.48-8.413Z" />
                </svg>
              </button>
            </a>
            <a href="https://www.instagram.com/_aldhi1" target="_blank" rel="noopener noreferrer">
              {/* Changed class to 'instagram' and replaced SVG with the Instagram logo */}
              <button className="social-button instagram cursor-target" aria-label="Instagram">
                <svg className="svg" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path fill="currentColor" fillRule="evenodd" d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z" clipRule="evenodd" />
                </svg>
              </button>
            </a>

          </div>
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .container {
    width: 100%;
    max-width: 350px;
    background: #1a1a1a;
    background: linear-gradient(180deg, #242424 0%, #171717 100%);
    border-radius: 40px;
    padding: 25px 35px;
    border: 3px solid #333;
    box-shadow: rgba(0, 0, 0, 0.5) 0px 30px 30px -20px;
  }

  .heading {
    text-align: center;
    font-weight: 900;
    font-size: 30px;
    color: #ffffff; /* Berubah ke Putih */
  }

  .form {
    margin-top: 20px;
  }

  .form .input {
    width: 100%;
    background: #2a2a2a;
    border: 1px solid #444;
    padding: 15px 20px;
    border-radius: 20px;
    margin-top: 15px;
    color: white;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 10px 10px -5px;
    border-inline: 2px solid transparent;
    font-family: inherit;
  }

  .textarea {
    min-height: 100px;
    resize: none;
  }

  .form .input::placeholder {
    color: #888;
  }

  .form .input:focus {
    outline: none;
    border-inline: 2px solid #ffffff; /* Border focus ke Putih */
    background: #333;
  }

  .form .login-button {
    display: block;
    width: 100%;
    font-weight: bold;
    background: linear-gradient(45deg, #444 0%, #ffffff 100%); /* Gradasi ke Putih */
    color: #000; /* Teks tombol jadi Hitam agar kontras dengan latar putih */
    padding-block: 15px;
    margin: 20px auto;
    border-radius: 20px;
    box-shadow: rgba(255, 255, 255, 0.1) 0px 20px 10px -15px;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
  }

  .form .login-button:hover {
    transform: scale(1.03);
    box-shadow: rgba(255, 255, 255, 0.2) 0px 23px 10px -20px;
    background: #ffffff;
  }

  .social-account-container {
    margin-top: 25px;
  }

  .social-account-container .title {
    display: block;
    text-align: center;
    font-size: 10px;
    color: #888;
  }

  .social-account-container .social-accounts {
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 15px;
    margin-top: 10px;
  }

  .social-account-container .social-accounts .social-button {
    background: #2a2a2a;
    border: 2px solid #444;
    padding: 5px;
    border-radius: 50%;
    width: 40px;
    aspect-ratio: 1;
    display: grid;
    place-content: center;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
  }

  .social-account-container .social-accounts .social-button .svg {
    fill: #ddd;
  }

  .social-account-container .social-accounts .social-button:hover {
    transform: scale(1.2);
    border-color: #ffffff; /* Border hover ke Putih */
  }

  .social-account-container .social-accounts .social-button:hover .svg {
    fill: #ffffff;
  }
  
  .social-account-container .social-accounts .social-button.whatsapp:hover {
    background: #25D366; /* Tetap hijau untuk WhatsApp agar user mengenali iconnya */
    border-color: #25D366;
  }
`;
export default function FormKonfirmasi() {
  return (
    /* 
       Gunakan min-h-screen dan min-h-[100dvh] agar di Android 
       konten benar-benar memenuhi layar yang terlihat saja (mengabaikan address bar)
    */
    <section
      id="about"
      className="relative w-full min-h-screen md:min-h-[100dvh] bg-[#0d0f14] overflow-hidden flex items-center justify-center py-10"
    >

      {/* Latar Belakang ScrollFloat */}
      <div className="absolute inset-0 z-99 flex items-center justify-center pointer-events-none overflow-hidden w-full">
        <ScrollFloat
          textClassName="text-white/5 text-[clamp(3rem,12vw,10rem)] leading-none text-center whitespace-nowrap"
          containerClassName="font-Vector uppercase"
        >
          Konfirmasi
        </ScrollFloat>
      </div>

      {/* 
         Kontainer utama: 
         - items-center & justify-center memastikan konten di tengah secara vertikal & horizontal
         - h-full memastikan ia mengambil seluruh ruang yang tersedia
      */}
      <div className="relative z-10 w-full flex items-center justify-center px-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-20 w-full max-w-6xl">

          {/* Kolom Form */}
          <Form />


          {/* Kolom Keterangan Konfirmasi */}
          <div className="max-w-md text-center md:text-left space-y-6 order-1 md:order-2">
            <h2 className="text-[#ffffff] font-black text-3xl md:text-5xl uppercase tracking-tighter leading-tight">
              Konfirmasi Kehadiran
            </h2>

            <div className="space-y-4 text-gray-400 font-medium leading-relaxed">
              <p className="text-sm md:text-lg">
                Kehadiran Anda adalah suatu kehormatan dan kebahagiaan bagi kami.
              </p>

              <div className="bg-[#1a1a1a] p-5 md:p-6 rounded-[25px] md:rounded-[30px] border-l-4 border-[#ffffff] shadow-xl">
                <p className="text-white italic text-xs md:text-base">
                  "Mohon maaf, jika Anda berhalangan hadir, silakan isi form di samping dengan menyertakan alasan atau kirimkan pesan melalui WhatsApp/Instagram kami."
                </p>
              </div>

              <p className="text-[10px] md:text-sm uppercase tracking-widest text-white/40">
                — Terima Kasih Atas Pengertiannya —
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}