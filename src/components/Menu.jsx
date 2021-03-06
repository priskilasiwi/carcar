import React from 'react';
import { Container, Button } from 'react-bootstrap';
import "./Menu.css"

const Menu = () => {
    return (
        <>
        <Container fluid className= "menu">
            <Container className="d-flex justify-content-between">
                <div className="p-2">
                <h1 className="heading">Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h1>
                <p className="paragraf">Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
                <Button className="button-mulai">Mulai Sewa Mobil</Button>
                </div>
                <Container>
                    <img className= "img-1" src="./images/img_car.png" />
                </Container>
            </Container>
        </Container>
        </>
    )
   

}
export default Menu;