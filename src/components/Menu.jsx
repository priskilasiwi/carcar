import React from 'react';
import { Container } from 'react-bootstrap';
import "./Menu.css"

const Menu = () => {
    return (
        <>
        <Container fluid className= "menu">
            <Container className="d-flex justify-content-between">
                <div className="p-2">
                <h1 className="heading">Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h1>
                <p className="paragraf">Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
                </div>
                <Container>
                    <img className= "img-1" src="./images/bg.png" />
                    <img  className= "img-2" src="./images/Mercedes Car EQC 300kW Edition - 900x598 1.png" />
                </Container>
            </Container>
            

        </Container>
        </>
    )
   

}
export default Menu;