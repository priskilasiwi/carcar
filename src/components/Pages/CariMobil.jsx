import React, { Component, useState, useEffect } from 'react';
import Navbars from "../Navbars";
import Footer from "../Footer";
import { Container, Form, Button, Card, Row, Col } from "react-bootstrap";
import "./CariMobil.css";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { carAction } from '../../redux/carAction';

const CariMobil = () => {
    const navigation = useNavigate()
    const dispatch = useDispatch();
    
    const reqdetail = (car) => {
        dispatch(carAction())
        navigation(`/detailcar/${car.id}`);
    }

    const { dataCar } = useSelector((globalStore) => globalStore.carReducer);
    
    
    
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
                            <Button className="btn-edit text-primary" >Edit</Button>
                        </div>
                    </div>
                </Form>
            </Container>

            
            <Container>
                <Container fluid>
                    <Row className="content-card">
                        {dataCar?.map((car) => {
                            return (
                                <Col className="g-col-4">
                                    <Card className="card">
                                        <img src={car.image} alt="mobil" />
                                        <Card.Body>
                                            <h5>{car.name}</h5>
                                            <h6><b>Rp {car.price}/hari</b></h6>
                                            <p className="text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis quaerat adipisci natus animi vel delectus saepe at harum accusamus quam provident quae, deserunt, ratione nobis placeat autem laborum quisquam quo.</p>
                                            <div className='d-flex align-items-center'>
                                                <img src='./images/fi_users.svg' />
                                                <p className="px-2 my-2">4 Orang</p>
                                            </div>
                                            <div className='d-flex align-items-center'>
                                                <img src='./images/fi_settings.svg' />
                                                <p className="px-2 my-2">Manual</p>
                                            </div>
                                            <div className='d-flex align-items-center'>
                                                <img src='./images/fi_calendar.svg' />
                                                <p className="px-2 my-2">Tahun 2022</p>
                                            </div>
                                        </Card.Body>
                                        <Button className="bg-green" onClick={() => reqdetail(car)}>Pilih Mobil</Button>
                                    </Card>
                                </Col>
                            )
                        })}
                    </Row>
                </Container>
            </Container>
            <Footer />
        </>
    )
}

export default CariMobil;