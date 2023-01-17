/*const enviarImc = document.querySelector('#enviarImc');
    

enviarImc.addEventListener("click",function(e){

    e.preventDefault();

    const peso = document.querySelector('#peso');
    peso = parseInt(peso);
    const altura = document.querySelector('#altura');
    altura = parseInt(altura);    

   
    const dadopeso = peso.value;
    const dadoaltura = altura.value;
     
    
    const res = (dadopeso / (dadoaltura*dadoaltura));

    switch (res){

        case  (res <= 18.5):
            document.querySelector('#verresultado').innerHTML = ('Seu peso é: ' + dadopeso + ', sua altura: ' + dadoaltura + ', e seu IMC: ' + res);

            document.querySelector('#verresultado').innerHTML = (' Classificação: Magreza');
            break

        case (res < 24.9):
            document.querySelector('#verresultado').innerHTML = ('Seu peso é: ' + dadopeso + ', sua altura: ' + dadoaltura + ', e seu IMC: ' + res);

            document.querySelector('#verresultado').innerHTML = (' Classificação: Normal');
            break
        case (res < 29.9):
            document.querySelector('#verresultado').innerHTML = ('Seu peso é: ' + dadopeso + ', sua altura: ' + dadoaltura + ', e seu IMC: ' + res);

            document.querySelector('#verresultado').innerHTML = (' Classificação: Sobrepeso, obesidade grau I');
            break
        case (res < 39.9):
            document.querySelector('#verresultado').innerHTML = ('Seu peso é: ' + dadopeso + ', sua altura: ' + dadoaltura + ', e seu IMC: ' + res);

            document.querySelector('#verresultado').innerHTML = (' Classificação: Obesidade grau II');
            break
        case (res >= 40):
            document.querySelector('#verresultado').innerHTML = ('Seu peso é: ' + dadopeso + ', sua altura: ' + dadoaltura + ', e seu IMC: ' + res);

            document.querySelector('#verresultado').innerHTML = (' Classificação: Obesidade, grau III');
            break  
        default:
            document.querySelector('#verresultado').innerHTML = ('Verifique os valores informado!');             


};
    if (res <= 18.5){
        document.querySelector('#verresultado').innerHTML = ('Seu peso é: ' + dadopeso + ', sua altura: ' + dadoaltura + ', e seu IMC: ' + res);

        document.querySelector('#verresultado').innerHTML = (' Classificação: Magreza');
    }else if (res <= 24.9){
        document.querySelector('#verresultado').innerHTML = ('Seu peso é: ' + dadopeso + ', sua altura: ' + dadoaltura + ', e seu IMC: ' + res);

        document.querySelector('#verresultado').innerHTML = (' Classificação: Normal');
    }else if (res <= 29.9){
        document.querySelector('#verresultado').innerHTML = ('Seu peso é: ' + dadopeso + ', sua altura: ' + dadoaltura + ', e seu IMC: ' + res);

        document.querySelector('#verresultado').innerHTML = (' Classificação: Sobrepeso, obesidade grau I');
    }else if (res <= 39.9){
        document.querySelector('#verresultado').innerHTML = ('Seu peso é: ' + dadopeso + ', sua altura: ' + dadoaltura + ', e seu IMC: ' + res);

        document.querySelector('#verresultado').innerHTML = (' Classificação: Obesidade grau II');
    }else if (res > 39.9){
        document.querySelector('#verresultado').innerHTML = ('Seu peso é: ' + dadopeso + ', sua altura: ' + dadoaltura + ', e seu IMC: ' + res);

        document.querySelector('#verresultado').innerHTML = (' Classificação: Obesidade, grau III');
    }else{
        document.querySelector('#verresultado').innerHTML = ('Verifique os valores informado!'); 
    }

});*/ 



const enviar = document.querySelector('#enviar');
    

enviar.addEventListener("click",function(e){

    e.preventDefault();

    const nome = document.querySelector('#nome');
    const email = document.querySelector('#email');
    const telefone = document.querySelector('#telefone');
    const cep = document.querySelector('#cep');
    const cidade = document.querySelector('#cidade');
    const uf = document.querySelector('#uf');
    const peso = document.querySelector('#peso');
    const altura = document.querySelector('#altura');
    

    const dadonome = nome.value;
    const dadoemail = email.value;
    const dadotelefone = telefone.value;
    const dadocep = cep.value;
    const dadocidade = cidade.value;
    const dadouf = uf.value;
    const dadopeso = peso.value;
    const dadoaltura = altura.value;
  

    const vernome = document.querySelector('#vernome');
    const veremail = document.querySelector('#veremail');
    const vertelefone = document.querySelector('#vertelefone');
    const vercep = document.querySelector('#vercep');
    const vercidade = document.querySelector('#vercidade');
    const veruf = document.querySelector('#veruf');
    const verpeso = document.querySelector('#verpeso');
    const veraltura = document.querySelector('#veraltura');
    const verresultado = document.querySelector('#verresultado');
    

    //document.querySelector('#formulario').innerHTML = ('Seu nome é: ' + dadonome + '<br>' + 'Seu E-mail: ' + dadoemail + '<br>' + 'Seu telefone: ' + dadotelefone + '<br>' + 'O CEP informado é: ' + dadocep + '<br>' + 'A cidade onde mora é: ' + dadocidade + '<br>' + 'E seu estado é: ' + dadouf );

    if (((dadonome | dadoemail | dadotelefone | dadocep | dadocidade | dadouf) & (dadopeso | dadoaltura )) == (' ')){

        document.querySelector('#formulario').style='background-color: rgba(71, 71, 71,.1);width: 70%; text-align: center; padding: 1rem;margin-top: 4rem;margin-bottom: 4rem;border: 1rem groove rgba(128, 128, 128, 0.247);'
        document.querySelector('#formulario').innerHTML = ('Por favor, preencha todos os campos!');

        document.querySelector('#verresultado').style='background-color: rgba(71, 71, 71,.1);width: 70%; text-align: center; padding: 1rem;margin-top: 4rem;margin-bottom: 4rem;border: 1rem groove rgba(128, 128, 128, 0.247);'
        document.querySelector('#verresultado').innerHTML = ('Por favor, preencha todos os campos!');
    
    
    }else{

        document.querySelector('#formulario').style='background-color: rgba(71, 71, 71,.1);width: 70%; padding: 1rem;margin-top: 4rem;margin-bottom: 4rem;border: 1rem groove rgba(128, 128, 128, 0.247);'

        document.querySelector('#verresultado').style='background-color: rgba(71, 71, 71,.1);width: 70%; padding: 1rem;margin-top: 4rem;margin-bottom: 4rem;border: 1rem groove rgba(128, 128, 128, 0.247);'
        
        

        vernome.innerHTML = ('Seu nome é : ' + dadonome);
        vernome.style="margin-top: 15px;"

        veremail.innerHTML = ('Seu email é : ' + dadoemail);
        veremail.style="margin-top: 15px;"
            
        vertelefone.innerHTML = ('Seu telefone é : ' + dadotelefone);
        vertelefone.style="margin-top: 15px;"

        vercep.innerHTML = ('Seu CEP é : ' + dadocep);
        vercep.style="margin-top: 15px;"

        vercidade.innerHTML = ('Seu Cidade é : ' + dadocidade);
        vercidade.style="margin-top: 15px;"

        veruf.innerHTML = ('Seu UF é : ' + dadouf);
        veruf.style="margin-top: 15px;"
        
        verpeso.innerHTML = ('Seu peso é : ' + dadopeso + 'Kg');
        verpeso.style="margin-top: 15px;"

        veraltura.innerHTML = ('Sua altura é : ' + dadoaltura + 'm');
        veraltura.style="margin-top: 15px;"

        verresultado.innerHTML = ('Seu IMC é: ' + (parseFloat(dadopeso / (dadoaltura*dadoaltura)*10000).toFixed(2)));
        verresultado.style="margin-top: 15px;"


    }
});  





    
const apagar = document.querySelector('#apagar');
        

apagar.addEventListener("click",function(){

        const vernome = document.querySelector('#vernome');
        const veremail = document.querySelector('#veremail');
        const vertelefone = document.querySelector('#vertelefone');
        const vercep = document.querySelector('#vercep');
        const vercidade = document.querySelector('#vercidade');
        const veruf = document.querySelector('#veruf');
        const verpeso = document.querySelector('#verpeso');
        const veraltura = document.querySelector('#veraltura');   

        if ((vernome | veremail | vertelefone | vercep | vercidade | veruf | verpeso | veraltura) == (' ')){

            document.querySelector('#formulario').style='background-color: none;'
            document.querySelector('#formulario').innerHTML = (' ');

            document.querySelector('#verresultado').style='background-color: none;'
            document.querySelector('#verresultado').innerHTML = (' ');            


        }else{
        
            vernome.innerHTML = (' ');
            vernome.style='margin-top: 15px;'

            veremail.innerHTML = (' ');
            veremail.style='margin-top: 15px;'        
                
            vertelefone.innerHTML = (' ');
            vertelefone.style='margin-top: 15px;'        

            vercep.innerHTML = (' ');
            vercep.style='margin-top: 15px;'        

            vercidade.innerHTML = (' ');
            vercidade.style='margin-top: 15px;'         

            document.querySelector('#veruf').innerHTML = (' ');
            veruf.style='margin-top: 15px;'  
            
            document.querySelector('#verpeso').innerHTML = (' ');
            verpeso.style='margin-top: 15px;' 

            document.querySelector('#veraltura').innerHTML = (' ');
            veraltura.style='margin-top: 15px;' 
            
            document.querySelector('#verresultado').innerHTML = (' ');
            veraltura.style='margin-top: 15px;' 

            document.querySelector('#formulario').style='background-color: none;'
            document.querySelector('#verresultado').style='background-color: none;'

    }

    
    

});




const validaNome = document.querySelector('#nome');


validaNome.addEventListener('keydown',function(){

   
    const regNome = document.querySelector('#nome');
    const regExNome = /([a-zA-Z])+/gi;
    const regnumero = /([0-9])+/gi;
    const regCaracteres = /([!"#$%&'()*+,-./:;?@[\\\]_`{|}~])+/gi;
    const textoNome = regNome.value;

    
    if ((regExNome.test(textoNome)) && (!(regnumero.test(textoNome))) && (!(regCaracteres.test(textoNome)) && (textoNome != ' ')) === true){

        regNome.style='border: 3px solid green; background-color: rgba(29, 255, 18, 0.36);'

        document.querySelector('#mensagemName').innerHTML = ('Nome válido!');
        document.querySelector('#mensagemName').style=' margin: .5rem 20% auto;margin-bottom: .5rem; width: 60%; align-items: center; '

    

    }else {
        regNome.style='border: 3px solid red; background: rgba(248, 0, 0, 0.36);'
    
        document.querySelector('#mensagemName').innerHTML = ('Por favor, digite apenas letras!' + '<br>' + 'Não deixe o campo vazio!');
        document.querySelector('#mensagemName').style=' margin: .5rem 20% auto;margin-bottom: .5rem; width: 60%; align-items: center; '
        
    }       
        
});


const validaEmail = document.querySelector('#email');

validaEmail.addEventListener('keydown',function(){

   
    const regEmail = document.querySelector('#email');
    const regExEmail = /([a-zA-Z0-9_.+-]+)@[a-zA-Z0-9_.+-]+\.[a-zA-Z0-9+.+-]/
    
    
    const textoEmail = regEmail.value;
    
        
    if ((regExEmail.test(textoEmail) && (textoEmail != ' ')) === true){
    
        regEmail.style='border: 3px solid green; background-color: rgba(29, 255, 18, 0.36);'
    
        document.querySelector('#mensagemEmail').innerHTML = ('E-mail válido!');
        document.querySelector('#mensagemEmail').style=' margin: .5rem 20% auto;margin-bottom: .5rem; width: 60%; align-items: center; '
        
    
    }else {
        regEmail.style='border: 3px solid red; background: rgba(248, 0, 0, 0.36);'
        
        document.querySelector('#mensagemEmail').innerHTML = ('Por favor, digite uma E-mail válido!' + '<br>' + 'Não deixe o campo vazio!');
        document.querySelector('#mensagemEmail').style=' margin: .5rem 20% auto;margin-bottom: .5rem; width: 60%; align-items: center; '
            
    }       
            
});


const validatelefone = document.querySelector('#telefone');

validatelefone.addEventListener('keydown',function(){
    
       
    const regtelefone = document.querySelector('#telefone');
    const regCaracteres = /([!"#$%&'()*+,-./:;?@[\\\]_`{|}~])+/gi;
    const regExNome = /([a-zA-Z])+/gi;
    const regnumero = /([0-9])+/gi;
    
        
    const textotelefone = regtelefone.value;
        
            
    if (!(regExNome.test(textotelefone)) && ((regnumero.test(textotelefone))) && (!(regCaracteres.test(textotelefone)) && (textotelefone != ' ')) === true){
        
        regtelefone.style='border: 3px solid green; background-color: rgba(29, 255, 18, 0.36);'
        
        document.querySelector('#mensagemtelefone').innerHTML = ('Telefone válido!');
        document.querySelector('#mensagemtelefone').style=' margin: .5rem 20% auto;margin-bottom: .5rem; width: 60%; align-items: center; '
            
        
    }else {
        regtelefone.style='border: 3px solid red; background: rgba(248, 0, 0, 0.36);'
            
        document.querySelector('#mensagemtelefone').innerHTML = ('Por favor, digite um número de telefone com DDD!' + '<br>' + 'Digite apenas números!' + '<br>' + 'Não deixe o campo vazio!');
        document.querySelector('#mensagemtelefone').style=' margin: .5rem 20% auto;margin-bottom: .5rem; width: 60%; align-items: center; '
                
    }       
                
});       

    
    
const validacep = document.querySelector('#cep');

validacep.addEventListener('keydown',function(){

   
    const regcep = document.querySelector('#cep');
    const regCaracteres = /([!"#$%&'()*+,-./:;?@[\\\]_`{|}~])+/gi;
    const regExcep = /([0-9]{5})([0-9]{3})/gi;
    
    const textocep = regcep.value;
    
        
    if ((regExcep.test(textocep)) && (!(regCaracteres.test(textocep)) && (textocep != ' ')) === true){
    
        regcep.style='border: 3px solid green; background-color: rgba(29, 255, 18, 0.36);'
    
        document.querySelector('#mensagemcep').innerHTML = ('CEP válido!');
        document.querySelector('#mensagemcep').style=' margin: .5rem 20% auto;margin-bottom: .5rem; width: 60%; align-items: center; '
        
    
    }else {
        regcep.style='border: 3px solid red; background: rgba(248, 0, 0, 0.36);'
        
        document.querySelector('#mensagemcep').innerHTML = ('Por favor, digite uma CEP válido!' + '<br>' + 'Digite apenas números!' + '<br>' + 'Não deixe o campo vazio!');
        document.querySelector('#mensagemcep').style=' margin: .5rem 20% auto;margin-bottom: .5rem; width: 60%; align-items: center; '
            
    }       
            
});
    

const validacidade = document.querySelector('#cidade');

validacidade.addEventListener('keydown',function(){

   
    const regcidade = document.querySelector('#cidade');
    const regExcidade = /([a-zA-Z])+/gi;
    const regnumero = /([0-9])+/gi;
    const regCaracteres = /([!"#$%&'()*+,-./:;?@[\\\]_`{|}])+/gi;
    
    const textocidade = regcidade.value;
    
        
    if ((regExcidade.test(textocidade)) && (!(regnumero.test(textocidade))) && (!(regCaracteres.test(textocidade)) && (textocidade != ' ')) === true){
    
        regcidade.style='border: 3px solid green; background-color: rgba(29, 255, 18, 0.36);'
    
        document.querySelector('#mensagemcidade').innerHTML = ('Cidade válida!');
        document.querySelector('#mensagemcidade').style=' margin: .5rem 20% auto;margin-bottom: .5rem; width: 60%; align-items: center; '
        
    
    }else {
        regcidade.style='border: 3px solid red; background: rgba(248, 0, 0, 0.36);'
        
        document.querySelector('#mensagemcidade').innerHTML = ('Por favor, digite uma Cidade válida!' + '<br>' + 'Digite apenas letras!' + '<br>' + 'Não deixe o campo vazio!');
        document.querySelector('#mensagemcidade').style=' margin: .5rem 20% auto;margin-bottom: .5rem; width: 60%; align-items: center; '
            
    }       
            
});

const validapeso = document.querySelector('#peso');

validapeso.addEventListener('keydown',function(){

   
    const regpeso = document.querySelector('#peso');
    const regCaracteres = /([!"#$%&'()*+,-./:;?@[\\\]_`{|}~])+/gi;
    const regExpeso = /([0-9])/gi;
    
    const textopeso = regpeso.value;
    
        
    if ((regExpeso.test(textopeso)) && (!(regCaracteres.test(textopeso)) && (textopeso != ' ')) === true){
    
        regpeso.style='border: 3px solid green; background-color: rgba(29, 255, 18, 0.36);'
    
        document.querySelector('#mensagempeso').innerHTML = ('Peso válido!');
        document.querySelector('#mensagempeso').style=' margin: .5rem 20% auto;margin-bottom: .5rem; width: 60%; align-items: center; '
        
    
    }else {
        regpeso.style='border: 3px solid red; background: rgba(248, 0, 0, 0.36);'
        
        document.querySelector('#mensagempeso').innerHTML = ('Por favor, digite somente 3 números!' + '<br>' + 'Digite apenas números!' + '<br>' + 'Não deixe o campo vazio!');
        document.querySelector('#mensagempeso').style=' margin: .5rem 20% auto;margin-bottom: .5rem; width: 60%; align-items: center; '
            
    }       
            
});
    
const validaaltura = document.querySelector('#altura');

validaaltura.addEventListener('keydown',function(){

   
    const regaltura = document.querySelector('#altura');
    const regCaracteres = /([!"#$%&'()*+,-./:;?@[\\\]_`{|}~])+/gi;
    const regExaltura = /([0-9])/gi;
    
    const textoaltura = regaltura.value;
    
        
    if ((regExaltura.test(textoaltura)) && (!(regCaracteres.test(textoaltura)) && (textoaltura != ' ')) === true){
    
        regaltura.style='border: 3px solid green; background-color: rgba(29, 255, 18, 0.36);'
    
        document.querySelector('#mensagemaltura').innerHTML = ('Altura válido!');
        document.querySelector('#mensagemaltura').style=' margin: .5rem 20% auto;margin-bottom: .5rem; width: 60%; align-items: center; '
        
    
    }else {
        regaltura.style='border: 3px solid red; background: rgba(248, 0, 0, 0.36);'
        
        document.querySelector('#mensagemaltura').innerHTML = ('Por favor, digite somente 3 números!' + '<br>' + 'Digite apenas números!' + '<br>' + 'Não deixe o campo vazio!');
        document.querySelector('#mensagemaltura').style=' margin: .5rem 20% auto;margin-bottom: .5rem; width: 60%; align-items: center; '
            
    }       
            
});
    

