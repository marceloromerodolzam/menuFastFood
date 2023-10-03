document.addEventListener('DOMContentLoaded', function() {
    var BtInfantil = document.getElementById('BtInfantil');
    var BtMedia = document.getElementById('BtMedia');
    var Hbrgr = document.getElementById('Hbrgr');
    var CC2L = document.getElementById('CC2L');
    
    var mensagemPopup = document.getElementById('mensagemPopup');
    var popup = document.getElementById('popup');
    
    BtInfantil.addEventListener('click', function(){
        exibirMensagem('Batata Infantil');
    });

    BtMedia.addEventListener('click', function(){
        exibirMensagem('Batata média');
    });
    
    Hbrgr.addEventListener('click', function(){
        exibirMensagem('Hamburguer completo');
    });
    
    CC2L.addEventListener('click', function(){
        exibirMensagem('Coca cola 2L');
    });
    
    function exibirMensagem(item){

        switch(item){
            case 'Batata Infantil':
                mensagemPopup.textContent = 'Você selecionou Batata Infantil - 12,90.';
                popup.style.display = 'block';
                break;

                case 'Batata média':
                mensagemPopup.textContent = 'Você selecionou Batata média - 22,90.';
                popup.style.display = 'block';
                break;
    
            case 'Hamburguer completo':
                mensagemPopup.textContent = 'Você selecionou Hamburguer completo - 37,70';
                popup.style.display = 'block';
                break;
    
            case 'Coca cola 2L':
                mensagemPopup.textContent = 'Você selecionou Coca cola 2L - 11,55';
                popup.style.display = 'block';
                break;
    
            default:
                mensagemPopup.textContent = 'Item não existente';
        }
    }
    
    const fecharPopup = document.getElementById('fechar-popup');
    fecharPopup.addEventListener('click', function() {
        popup.style.display = 'none';
    });
});
