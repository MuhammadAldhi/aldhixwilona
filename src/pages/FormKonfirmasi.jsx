import ScrollFloat from "../components/ui/ScrollFloat"
import React from 'react';
import styled from 'styled-components';

const Form = () => {
    return (
        <StyledWrapper>
            <div className="container">
                <div className="heading">Message</div>
                <form className="form">
                    <input required className="input" type="text" name="Nama" id="Nama" placeholder="Nama" />
                    <textarea
                        required
                        className="input textarea"
                        name="message"
                        id="message"
                        placeholder="Alasan"
                    ></textarea>

                    <input className="login-button" type="submit" defaultValue="Kirim" />
                </form>
                <div className="social-account-container">
                    <span className="title">Or Message With</span>
                    <div className="social-accounts">
                        <button className="social-button apple">
                            <svg className="svg" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path fill="currentColor" fillRule="evenodd" d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z" clipRule="evenodd" />
                            </svg>
                        </button>

                        <button className="social-button whatsapp">
                            <svg className="svg" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path fill="currentColor" fillRule="evenodd" d="M12 4a8 8 0 0 0-6.895 12.06l.569.718-.697 2.359 2.32-.648.379.243A8 8 0 1 0 12 4ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.96 9.96 0 0 1-5.016-1.347l-4.948 1.382 1.426-4.829-.006-.007-.033-.055A9.958 9.958 0 0 1 2 12Z" clipRule="evenodd" />
                                <path fill="currentColor" d="M16.735 13.492c-.038-.018-1.497-.736-1.756-.83a1.008 1.008 0 0 0-.34-.075c-.196 0-.362.098-.49.291-.146.217-.587.732-.723.886-.018.02-.042.045-.057.045-.013 0-.239-.093-.307-.123-1.564-.68-2.751-2.313-2.914-2.589-.023-.04-.024-.057-.024-.057.005-.021.058-.074.085-.101.08-.079.166-.182.249-.283l.117-.14c.121-.14.175-.25.237-.375l.033-.066a.68.68 0 0 0-.02-.64c-.034-.069-.65-1.555-.715-1.711-.158-.377-.366-.552-.655-.552-.027 0 0 0-.112.005-.137.005-.883.104-1.213.311-.35.22-.94.924-.94 2.16 0 1.112.705 2.162 1.008 2.561l.041.06c1.161 1.695 2.608 2.951 4.074 3.537 1.412.564 2.081.63 2.461.63.16 0 .288-.013.4-.024l.072-.007c.488-.043 1.56-.599 1.804-1.276.192-.534.243-1.117.115-1.329-.088-.144-.239-.216-.43-.308Z" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </StyledWrapper>
    );
}

const StyledWrapper = styled.div`
  .container {
    max-width: 350px;
    background: #1a1a1a;
    background: linear-gradient(180deg, #242424 0%, #171717 100%);
    border-radius: 40px;
    padding: 25px 35px;
    border: 3px solid #333;
    box-shadow: rgba(0, 0, 0, 0.5) 0px 30px 30px -20px;
    margin: 20px;
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
        <section id="about" className="relative w-full min-h-screen bg-[#0d0f14] overflow-hidden flex items-center justify-center py-20">

            <ScrollFloat textClassName="text-white/5 text-[clamp(4rem,15vw,15rem)] leading-none" containerClassName="absolute inset-0 z-99 font-Vector flex items-center justify-center pointer-events-none uppercase">
                Konfirmasi
            </ScrollFloat>

            <div className="relative z-10 container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20">
                    {/* Kolom Form */}
                    <div className="w-full max-w-[350px]">
                        <Form />
                    </div>

                    {/* Kolom Keterangan Konfirmasi */}
                    <div className="max-w-md text-center md:text-left space-y-6">
                        <h2 className="text-[#ffffff] font-black text-4xl md:text-5xl uppercase tracking-tighter">
                            Konfirmasi Kehadiran
                        </h2>
                        <div className="space-y-4 text-gray-400 font-medium leading-relaxed">
                            <p className="text-lg">
                                Kehadiran Anda adalah suatu kehormatan dan kebahagiaan bagi kami.
                            </p>
                            <div className="bg-[#1a1a1a] p-6 rounded-[30px] border-l-4 border-[#ffffff] shadow-xl">
                                <p className="text-white italic">
                                    "Mohon maaf, jika Anda berhalangan hadir, silakan isi form di samping dengan menyertakan alasan atau kirimkan pesan melalui WhatsApp/Instagram kami."
                                </p>
                            </div>
                            <p className="text-sm uppercase tracking-widest text-white/40">
                                — Terima Kasih Atas Pengertiannya —
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
