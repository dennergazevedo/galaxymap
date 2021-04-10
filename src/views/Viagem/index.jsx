import React, { useState } from 'react';

/* ASSETS */
import background from '../../assets/bgviagem.jpg';

/* STYLED COMPONENTS */
import {
  Container,
  Background,
  TitleBody,
  TitlePage,
  SubtitlePage,
  Body,
  Form
} from './style.js';

/* COMPONENTS */
import Header from '../../components/Header'; 
import { TextField } from '@material-ui/core';

function Homepage() {

  const [startDate, setStartDate] = useState('2021-01-01');
  const [dataChegada] = useState('2021-01-01');
  const [value] = useState(3.54687);

  function handleDateStartChange(date){
    setStartDate(date);
  }

  function handleBuy(){
    window.event.preventDefault();
    window.alert("Indisponível!");
  }

  return (
    <Container>
      <Background src={background} alt="BACKGROUND" />
      <Header />
      <Body>
        <TitleBody 
          initial={{opacity: 0}} 
          animate={{opacity: 1}} 
          transition={{ duration: 1 }}
        >
          <TitlePage>
            Ticket
          </TitlePage>
          <SubtitlePage>
            Adquira aqui o seu ticket de viagem.
          </SubtitlePage>
        </TitleBody>
        <Form 
          onSubmit={handleBuy} 
          initial={{opacity: 0}} 
          animate={{opacity: 1}} 
          transition={{ duration: 1 }}
        >
          <div className="row">
            <span>Planeta de Partida</span>
            <select>
              <option>Terra</option>
              <option>Marte</option>
              <option>Júpiter</option>
            </select>
          </div>
          <div className="row">
            <span>Planeta de Destino</span>
            <select>
              <option>Terra</option>
              <option>Marte</option>
              <option>Júpiter</option>
            </select>
          </div>
          <div className="row">
            <span>Foguete</span>
            <select>
              <option>X1A</option>
              <option>MRX</option>
              <option>DNR</option>
            </select>
          </div>
          <div className="row">
            <TextField
              id="start"
              label="Data da partida"
              type="date"
              defaultValue="2021-01-01"
              InputLabelProps={{
                shrink: true,
              }}
              value={startDate}
              onChange={handleDateStartChange}
            />
          </div>
          <div className="row">
            <span>Data estimada da chegada</span>
            <input value={dataChegada} disabled/>
          </div>
          <div className="row">
            <span>Valor (BTC)</span>
            <input value={`${Number(value).toFixed(5)} BTC`} disabled/>
          </div>
          <button className="buyButton" type="submit">COMPRAR TICKET</button>
        </Form>
      </Body>
    </Container>
  );
}

export default Homepage;