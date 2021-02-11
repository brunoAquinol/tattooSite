import React, {useState} from 'react';

import PageDefault from '../../components/PageDefault';

import api from '../../../services/api';

function Config(){

    const[file, setFile] = useState([]);

    const onChange = e => {
        setFile(e.target.files[0])
    }
    console.log(file)

    const handleFormSubmit = e => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('images', file);
        const config = {
            headers:{
                'Content-Type': 'multipart/form-data'
            }
        };
        console.log("formData JSON: " + JSON.stringify(formData))
        console.log("config JSON: " + JSON.stringify(config))

        api.post('upload', formData, config)
            .then((response) =>{alert("Upload realizado com sucesso" + response.data)})
            .catch((error) => {
                alert(`Erro ao fazer o Upload: ${error}`)
            }
        )
    }

    return(
        <PageDefault>
            <h1> PAGINA DE CONFIGURAÇÃO </h1>
            <form onSubmit={handleFormSubmit}>
                <input type="file" name="images" accept="image/*" onChange={onChange} />
                <button>Upload</button>
            </form>
        </PageDefault>
    );
}

export default Config;