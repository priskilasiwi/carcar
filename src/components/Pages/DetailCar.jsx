import Navbars from "../Navbars";
import { Container, Form, Button, Card } from 'react-bootstrap';
import "./DetailCar.css";
import axios from 'axios';
import { useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from "react-redux";


const DetailCar = () => {
    const {id}  = useParams();

    const { dataCar }  = useSelector((globalStore) => globalStore.carReducer);
    const car = dataCar.find((el)=>el.id==id);

    return (
        <>
        <Navbars />
        <Container fluid className="box">
                <Form className="kotak-2 p-3">
                    <div className="row">
                        <h5>Pencarianmu</h5>
                        <div className="col">
                            <p className="subheading-1">Tipe Driver</p>
                            <select className="btn-drop subheading-1">
                                <option >Pilih Tipe Driver</option>
                                <option value="dengan supir">Dengan Supir</option>
                                <option value="tanpa supir">Tanpa Supir (Lepas Kunci)</option>
                            </select>
                        </div>
                        <div className="col">
                            <p className="subheading-1">Tanggal</p>
                            <input className="tanggal subheading-1" type="date"></input>
                        </div>
                        <div className="col">
                            <p className="subheading-1">Waktu Jemput/Ambil</p>
                            <input className="tanggal subheading-1" type="time" />
                        </div>
                        <div className="col">
                            <p className="subheading-1">Jumlah Penumpang(optional)</p>
                            <input className="btn-drop subheading-1" placeholder="Jumlah Penumpang"></input>
                        </div>
                        <div className="col">
                            <Button className="btn-edit text-primary">Edit</Button>
                        </div>
                    </div>
                </Form>
            </Container>
            <Container>
                <Container fluid>
                    <div className="row">
                        <Card className="card-detail">
                            <div>
                                <h6 className="py-2">Tentang Paket</h6>
                                <p className="py-2">Include</p>
                                <ul className="text-paket">
                                <li>Apa saja yang termasuk dalam paket misal durasi max 12 jam</li>
                                <li>Sudah termasuk bensin selama 12 jam</li>
                                <li>Sudah termasuk Tiket Wisata</li>
                                <li>Sudah termasuk pajak</li>
                                </ul>
                                <p className="py-2>">Exclude</p>
                                <ul className="text-paket">
                                <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                                <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                                <li>Tidak termasuk akomodasi penginapan</li>
                                </ul>
                                <h6 className="py-2"> Refund, Reschedule, Overtime</h6>
                                <ul className="text-paket">
                                <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                                <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                                <li>Tidak termasuk akomodasi penginapan Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                                <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                                <li>Tidak termasuk akomodasi penginapan</li>
                                <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                                <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                                <li>Tidak termasuk akomodasi penginapan</li>
                                </ul>
                            </div>
                        </Card>
                        <Card key={car.id} className="detail-mobil">
                            <img src={car.image} alt="car" />
                            <h5>{car.name}</h5>
                            <div className='d-flex align-items-center'>
                                <img src='/images/fi_users.svg' />
                                <p className="px-2 my-2">4 Orang</p>
                                <img src='/images/fi_settings.svg' />
                                <p className="px-2 my-2">Manual</p>
                                <img src='/images/fi_calendar.svg' />
                                <p className="px-2 my-2">Tahun 2020</p>
                            </div>
                            <div className="d-flex justify-content-between">
                                <p>Total</p>
                                <p><b>Rp. {car.price}</b></p>
                            </div>
                            <Button className="button-bayar"> Lanjutkan Pembayaran </Button>


                        </Card>
                    </div>
                </Container>
            </Container>
        </>
    )
}

export default DetailCar;