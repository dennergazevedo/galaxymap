/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';

/* ASSETS */
import background from '../../assets/bg01.png';

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
import api from '../../services/api';

function Viagem() {

  const params = window.location.search;

  const [planets, setPlanets] = useState();
  const [startPlanet, setStartPlanet] = useState();
  const [destinationPlanet, setDestinationPlanet] = useState();
  const [rocketList, setRocketList] = useState();
  const [rocket, setRocket] = useState();
  const [startDate, setStartDate] = useState('');
  const [dataChegada, setDataChegada] = useState('-');
  const [value, setValue] = useState(0);

  function handleDateStartChange(date){
    setStartDate(date);
  }

  function handleBuy(){
    window.event.preventDefault();
    window.alert("Indisponível!");
  }

  async function loadData(){
    const planetResponse = await api.get('/search-all-planets');
    setPlanets(planetResponse.data);
    setStartPlanet(planetResponse.data[0].name);

    const year = new Date().getFullYear();
    let month = Number(new Date().getMonth()) + 1;
    month = ("00" + month).slice(-2);
    const day = new Date().getDate();

    setStartDate(`${year}-${month}-${day}`);
    
    let name = params.split("name=");
    name = name[1];
    if(name){
      setDestinationPlanet(name);
    }else{
      setDestinationPlanet(planetResponse.data[1].name);
    }

    handleSelectRocket(planetResponse.data[0].name, params? name : planetResponse.data[1].name);
  }

  async function handleSelectRocket(plnts, plntd){
    const rocketResponse = await api.get('/search-all-rockets');

    const start = await api.get(`search-planets/${plnts}`);
    const destination = await api.get(`search-planets/${plntd}`);

    const startSS = await api.get(`search-sollar-system/${start.data.sollar_systems}`);
    const destinationSS = await api.get(`search-sollar-system/${destination.data.sollar_systems}`);

    const validRockets = [];
    rocketResponse.data.forEach(function(item){
      let startSSLocation = startSS.data.location;
      startSSLocation = String(startSSLocation).replace("AL", "");
      startSSLocation = String(startSSLocation).replace(",", ".");
      startSSLocation = Number(startSSLocation);


      let destinationSSLocation = destinationSS.data.location;
      destinationSSLocation = String(destinationSSLocation).replace("AL", "");
      destinationSSLocation = String(destinationSSLocation).replace(",", ".");
      destinationSSLocation = Number(destinationSSLocation);

      if(Number(item.capacity) > startSSLocation && Number(item.capacity > destinationSSLocation)){
        validRockets.push(item);
      }
    });

    setRocket(validRockets[0]?.name);
    setRocketList(validRockets);
  }

  async function handleCalculaPrecoPrazo(){
    const rkt = await api.get(`search-rocket/${rocket}`);
    const start = await api.get(`search-planets/${startPlanet}`);
    const startSS = await api.get(`search-sollar-system/${start.data.sollar_systems}`);
    const destination = await api.get(`search-planets/${destinationPlanet}`);
    const destinationSS = await api.get(`search-sollar-system/${destination.data.sollar_systems}`);

    let startLocation = startSS.data.location;
    startLocation = String(startLocation).replace('AL', '');
    startLocation = String(startLocation).replace(',', '.');
    startLocation = Number(startLocation);

    let destinationLocation = destinationSS.data.location;
    destinationLocation = String(destinationLocation).replace('AL', '');
    destinationLocation = String(destinationLocation).replace(',', '.');
    destinationLocation = Number(destinationLocation);

    const valorDestination = Number(rkt.data.cost) * Number(destinationLocation);
    const valorStart = Number(rkt.data.cost) * Number(startLocation);
    const valorTotal = valorDestination + valorStart;

    setValue(Number(valorTotal));

    const totalAL = Number(destinationLocation) + Number(startLocation);
    let totalDias = Number(totalAL) / Number(rkt.data.speed);
    totalDias = parseInt(totalDias);

    let DateF = new Date(startDate);
    DateF.setDate(DateF.getDate() + totalDias);

    const StringDate = `${DateF.getDate()}/${Number(DateF.getMonth()) + 1}/${DateF.getFullYear()}`;

    setDataChegada(StringDate);
  }

  useEffect(()=>{
    if(rocket){
      setValue(0);
      setDataChegada('-');
      handleCalculaPrecoPrazo();
    }
  }, [rocket, startPlanet, destinationPlanet])

  useEffect(()=>{
    handleSelectRocket(startPlanet, destinationPlanet)
  }, [startPlanet, destinationPlanet])

  useEffect(()=>{
    loadData();
  }, [])

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
            <select value={startPlanet} onChange={e => setStartPlanet(e.target.value)}>
              {
                planets && planets.map(item => (
                  <option key={item.name} value={item.name}>{item.name}</option>
                ))
              }
            </select>
          </div>
          <div className="row">
            <span>Planeta de Destino</span>
            <select value={destinationPlanet} onChange={e => setDestinationPlanet(e.target.value)}>
              {
                planets && planets.map(item => (
                  <option key={item.name} value={item.name}>{item.name}</option>
                ))
              }
            </select>
          </div>
          <div className="row">
            <span>Foguete</span>
            <select value={rocket} onChange={e => setRocket(e.target.value)}>
              {
                rocketList && rocketList.map(item => (
                  <option key={item.name} value={item.name}>{item.name}</option>
                ))
              }
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
              onChange={e => handleDateStartChange(e.target.value)}
            />
          </div>
          <div className="row">
            <span>Data estimada da chegada</span>
            <input value={dataChegada !== '-'? dataChegada : `Calculando...`} disabled/>
          </div>
          <div className="row">
            <span>Valor (BTC)</span>
            <input value={value > 0 ? `${Number(value).toFixed(5)} BTC` : `Calculando...`} disabled/>
          </div>
          <button className="buyButton" type="submit">COMPRAR TICKET</button>
        </Form>
      </Body>
    </Container>
  );
}

export default Viagem;