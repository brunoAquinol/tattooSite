import React, {useState, useEffect} from 'react';
import PageDefault from '../../components/PageDefault';
import {useHistory} from 'react-router-dom'
import axios from 'axios';



import Modal from '../../components/Modal/Modal';
import Aba from '../../components/Aba/Aba';



import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import './style.css';


function Orcamento(){

    const [orcamentos, setOrcamentos] = useState([]);
    const [finalizados, setFinalizados] = useState([]);
    const [isModalVisible, setIsModalVisible] = useState(false);

    const history = useHistory();

    useEffect(() =>{
        axios.get('http://localhost:5000/admin/orcamentos').then(response =>{
            setOrcamentos(response.data);
        })
    },[]);

    useEffect(() =>{
        axios.get('http://localhost:5000/admin/resolvidos').then(response =>{
            setFinalizados(response.data);
        })
    },[]);


    function primeiroNome(nome){
        var allName = nome.split(' ');
        return allName[0];
    }

    const changeRespondido = (orcamento, tipo) => {
        const data =[orcamento, tipo]
        console.log(data)
        axios.post('http://localhost:5000/admin/orcamentos', data).then(res =>
        console.log('Enviado com sucesso'));
        history.push('./orcamentos');
    }

    return(
        <PageDefault>
            <div className="corpo">
                <h1>Orçamentos</h1>

                <Aba
                label1 = 'Solicitados'
                label2 = 'Finalizados'
                content={
                    <div>
                    {!orcamentos? <h2>Não há solicitações no momento!</h2> : orcamentos.map(orcamento =>(
                        <main key={orcamento.id} className="caixaOrcamento">
                            <article>
                                <header>
                                    <div className="headerClose">
                                        <p className="dataOrcamento">Solicitado em {orcamento.regData}, às {orcamento.hora}</p>
                                    </div>
                                    <hr></hr>
                                    <strong>{orcamento.nome}</strong>
                                </header>

                                <div className="labelP" id="email">
                                    <label className="icon"><MailOutlineIcon/></label>
                                    <p>{orcamento.email}</p>
                                </div>

                                <a target='_blank' rel="noreferrer" className="whatsappLink" href={`https://api.whatsapp.com/send?phone=55${orcamento.telefone}&text=Ol%C3%A1%2C%20${primeiroNome(orcamento.nome)}!%20Vi%20que%20solicitou%20um%20or%C3%A7amento%20para%20fazer%20uma%20tatuagem%20comigo.%20Entro%20em%20contato...`}>
                                    <div className="labelP" id="telefone">
                                        <label className="icon"><WhatsAppIcon/></label>
                                        <p>{orcamento.telefone}</p>
                                    </div>
                                </a>

                                <div className="desc">
                                    <label>Descrição:</label>
                                    <p className="descricao">{orcamento.descricao}</p>
                                </div>
                                
                                <div className="price" >
                                    <lable>Valor: R$</lable>
                                    <input type="money" id="price" value={orcamento.preco} />
                                </div>

                            <button className='btn btn-success btn-lg btnFinalizar' id={orcamento} onClick={() => changeRespondido(orcamento, 1)}>Finalizar</button>
                            </article>
                        </main>
                    ))}
                    </div>

                }
                
                content2={
                    
                    <div>
                    {!finalizados? <h2>Não há solicitações no momento!</h2> : finalizados.map(finalizado =>(
                        <main key={finalizado.id} className="caixaOrcamento">
                            <article>
                                <header>
                                    <div className="headerClose">
                                        <p className="dataOrcamento">Solicitado em {finalizado.regData}, às {finalizado.hora}</p>
                                    </div>
                                    <hr></hr>
                                    <strong>{finalizado.nome}</strong>
                                </header>

                                <div className="labelP" id="email">
                                    <label className="icon"><MailOutlineIcon/></label>
                                    <p>{finalizado.email}</p>
                                </div>

                                <a target='_blank' rel="noreferrer" className="whatsappLink" href={`https://api.whatsapp.com/send?phone=55${finalizado.telefone}&text=Ol%C3%A1%2C%20${primeiroNome(finalizado.nome)}!%20Vi%20que%20solicitou%20um%20or%C3%A7amento%20para%20fazer%20uma%20tatuagem%20comigo.%20Entro%20em%20contato...`}>
                                    <div className="labelP" id="telefone">
                                        <label className="icon"><WhatsAppIcon/></label>
                                        <p>{finalizado.telefone}</p>
                                    </div>
                                </a>
                                <div className="desc">
                                    <label>Descrição:</label>
                                    <p className="descricao">{finalizado.descricao}</p>
                                </div>
                            </article>
                            <button className='btn btn-primary btn-lg btnFinalizar'  id={finalizado} onClick={() => changeRespondido(finalizado, 0)}>Retornar este para SOLICITADOS</button>
                        </main>
                    ))}
                    </div>

                }
                />


                
            
            </div>

        </PageDefault>
    );

}

export default Orcamento;
