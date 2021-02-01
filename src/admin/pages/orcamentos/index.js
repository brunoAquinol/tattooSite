import React, {useState, useEffect} from 'react';
import PageDefault from '../../components/PageDefault';
import {useHistory} from 'react-router-dom';



import Modal from '../../components/Modal/Modal';
import Aba from '../../components/Aba/Aba';
import api from '../../../services/api';



import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

import './style.css';


function Orcamento(){

    const [orcamentos, setOrcamentos] = useState([]);
    const [finalizados, setFinalizados] = useState([]);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [idToDelete, setIdToDelete] = useState('');

    const history = useHistory();

    useEffect(() =>{

        reloadOrcamento();
        reloadFinalizados();

    },[]);


    function primeiroNome(nome){
        var allName = nome.split(' ');
        return allName[0];
    }


    const reloadOrcamento = () =>{
        api.get('orcamentos').then(response =>{
            setOrcamentos(response.data)
        }, (error) =>{
            console.log(error)
        });
    }

    const reloadFinalizados = () => {
        api.get('resolvidos').then(response =>{
            setFinalizados(response.data);
        }, (error) =>{
            console.log(error)
        })
    }

    const changeRespondido = (orcamento, tipo) => {
        const data =[orcamento, tipo]
        api.post('orcamentos', data).then(response =>{
            console.log(response.status)}, (error) =>{
                console.log(error)
            })
        
            if(tipo === 1){
                reloadOrcamento();
                reloadFinalizados();
            }else{
                reloadFinalizados();
                reloadOrcamento();
            }
    }

    const changePriceInput = (e, index) =>{
        let newOrcamentos = [...orcamentos];
        newOrcamentos[index].preco = e.target.value;
        setOrcamentos(newOrcamentos);          
    }

    const deleteData = id => {
        const data = [id]
        api.post('delete-orcamento', data).then(response =>
            console.log(response))
        
        reloadOrcamento();
        reloadFinalizados();
        setIsModalVisible(false);
    }


    return(
        <PageDefault>
            <div className="corpo">
                <h1>DEPOIS TESTAR EM PRODUÇÃO A RESPOSTA DO FINALIZAR SE CARREGA AUTOMATICO AO CLICAR COMO EM AJAX</h1>
                <h1>Orçamentos</h1>
                {isModalVisible ? (
                        <Modal 
                        onClose={() => setIsModalVisible(false)} 
                        >
                            <h1 className="h2Modal"><strong>Atenção!</strong></h1>
                            <p className="pModalTxt">Esse orçamento será deletado permanentemente e não poderá ser recuperado.</p>
                            <p className="pModalSure" >Tem certeza que deseja continuar?</p>
                            <div className="btnModal" >
                                <button className="btn btn-lg btn-success" onClick={() => deleteData(idToDelete)} > Sim </button>
                                <button className="btn  btn-lg btn-danger" onClick={() => setIsModalVisible(false)} > Não </button>
                            </div>
                        </Modal>
                    ) : null}
                <Aba
                label1 = 'Solicitados'
                label2 = 'Finalizados'
                content={
                    <div>
                    {!orcamentos || orcamentos.length === 0 ? <h2 className="emptyOrcamento">Não há solicitações no momento!</h2> : orcamentos.map((orcamento, index) =>(
                        <main key={orcamento.id} className="caixaOrcamento">
                            <article>
                                <header>
                                    <div className="headerClose">
                                        <p className="dataOrcamento">Solicitado em {orcamento.regData}, às {orcamento.hora}</p>
                                       <div className="btnDelete" onClick={() => {
                                           setIsModalVisible(true)
                                           setIdToDelete(orcamento.id)}}>
                                            <DeleteForeverIcon />
                                        </div>
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
                                    <input type="money" id="price" value={orcamento.preco} onChange={e =>  changePriceInput(e, index)}/>
                                </div>

                                <button className='btn btn-success btn-lg btnFinalizar' id={orcamento} onClick={() => changeRespondido(orcamento, 1)}>Finalizar</button>
                            
                            </article>
                        </main>
                        
                    ))}
                    </div>

                }
                
                content2={
                    
                    <div>
                    {!finalizados || finalizados.length === 0 ? <h2 className="emptyOrcamento">Não há orçamentos finalizados no momento!</h2> : finalizados.map(finalizado =>(
                        <main key={finalizado.id} className="caixaOrcamento">
                            <article>
                                <header>
                                    <div className="headerClose">
                                        <p className="dataOrcamento">Solicitado em {finalizado.regData}, às {finalizado.hora}</p>
                                        <div className="btnDelete" onClick={() => {}}>
                                            <DeleteForeverIcon />
                                        </div>
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

                                <div className="priceFinalizado" >
                                    <lable>Valor:</lable>
                                    <p>R$ {finalizado.preco}</p>
                                </div>

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
