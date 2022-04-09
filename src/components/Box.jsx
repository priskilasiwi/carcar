import React from 'react';
import "./Box.css";
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Box = () => {
    const navigation = useNavigate();

    return (
        <>
            <Form className="kotak">
                <div className="row">
                    <div className="col">
                        <p className="subheading-1">Tipe Driver</p>
                        <select className="btn-drop subheading-1">
                        <option >Pilih Tipe Driver</option>
                        <option value="08:00">Dengan Supir</option>
                        <option value="09:00">Tanpa Supir (Lepas Kunci)</option>
                        </select>
                    </div>
                    <div className="col">
                        <p className="subheading-1">Tanggal</p>
                        <input className="tanggal subheading-1" type="date"></input>
                    </div>
                    <div className="col">
                        <p className="subheading-1">Waktu Jemput/Ambil</p>
                        <input className="tanggal subheading-1" type="time"></input>
                    </div>
                    <div className="col">
                        <p className="subheading-1">Jumlah Penumpang(optional)</p>
                        <input className="btn-drop subheading-1" placeholder ="Jumlah Penumpang"></input>
                        
                    </div>
                    <div className="col">
                        <Button className="button" onClick={() => navigation ('/carimobil')}>Cari Mobil</Button>
                    </div>
                </div>
            </Form>
        </>
    )
}

export default Box;