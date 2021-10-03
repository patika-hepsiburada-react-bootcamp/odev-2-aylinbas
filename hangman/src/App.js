import React from 'react'

import {  useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import  { Col,Button}  from 'react-bootstrap';
import Header from './components/header/Header.js';
import { render } from 'react-dom';

const min = 0;
const max = 15;
const rand = min + Math.random() * (max - min); //isimler listesinden rastgele isim seçmek için random sayı üretilmesi.

function App() {
  const [right ,setRight]= useState(5);
  const [correctLetters,setCorrect]=useState([]);
  const [wrongLetters,setWrong]=useState([]);
  const [disable, setDisable] = useState(false);
  const [answer,setAnswer]=useState('');


  const decreaseRight = () =>{
    setRight(right-1);
    if(right==1){                         //her harf seçiminde hak sayısının 1 azaltılması, kullancının hakkı kalmadığında
      setDisable(true);                   //keyboardın desable edilip doğru cevabın gösterilmesi.
      document.getElementById('answer').classList.remove("hide"); 
    }
  }
    const names=['BASAK','AYCA','CAN','EMRAH','MERVE','SERAP','OGUZ','AYLIN','ESIN','OZLEM','OZAN','HANDE','SAVAS','CINAR','NAZLI'];
    const name=names[parseInt(rand)];
    function clickKeyboard(key,id){
      //klavyeden her tuşa tıklandığında tıklanan tuş klavyeden silinir,
      //seçilen her harfin ismin içinde bulunup bulunmadığı kontrol edilir ve buna göre seçilen harf
      //doğru harfler listesine
      //ya da yanlış harfler listesine eklenilir
      //eğer doğru harf sayısı isim uzunluğuna eşitse cevap bulunmuştur.
      
     var button= document.getElementById(id);
     button.classList.add("hide");
      decreaseRight();
        if(name.includes(key)){
          setCorrect([...correctLetters,key])
          if(correctLetters.length+1==name.length){
            checkAnswer(true);  
          }
        }else{
          setWrong([...wrongLetters,key])
        }
      }
  
      function checkAnswer(isTrue){
        //tahminin kontrol edilmesi.
        if(isTrue){
          document.getElementById("remaining").classList.add("hide");
          document.getElementById("congrats").classList.remove("hide");
        }else{
          var myAnswer=answer.toUpperCase();
       
          if(myAnswer==name){
              document.getElementById("remaining").classList.add("hide");
              document.getElementById("congrats").classList.remove("hide");
          }
        
        }
      
         }
         function restart(){
          window.location.reload();
           }
       
   
  return (
    <div>
      <Header   />

    <br/>
    <div id="remaining" className="center circle ">
                <p className="right">{
                    right<=0
                   ? "Game Ower":   right.toString()
                }
                </p>
          </div>
          <div id="congrats" className="center hide">
               <h1>Congratulations! You did it!</h1>
          </div>

    <div className={"center"}>
    {
   name.split("").map((letter,i)=>{
      return  <Col key={i} className="letter"><div> {correctLetters.map((cLetter)=>{
        if(cLetter==letter){
          return cLetter
        }else{
          return ""
        }
       
         })}
         </div>  <div className="lines"> </div>  </Col> ;
   
    })
 
    }
 
    </div>
    <br/>
 
<div className="center">
  <Col>
    <h4>Your Prediction:</h4> <input value={answer} onChange={(e)=>setAnswer(e.target.value)}/> 

    <Col>
      <Button className='key' onClick={(event)=>checkAnswer(false) }>Check</Button> 
      <Button className='key' onClick={(event)=>restart() }>Restart</Button> 
      </Col>
  </Col>
 
</div>
<br/>

<div className="center">
<Col className='keyboardCol'>
   <Button className='key' disabled={disable} id='button1' onClick={(event)=>clickKeyboard('Q',"button1") }>Q</Button>
   <Button className='key' disabled={disable} id='button2' onClick={(event)=>clickKeyboard('W',"button2")}>W</Button>
   <Button className='key' disabled={disable} id='button3' onClick={(event)=>clickKeyboard('E',"button3")}>E</Button>
   <Button className='key' disabled={disable} id='button4' onClick={(event)=>clickKeyboard('R',"button4")}>R</Button>
   <Button className='key' disabled={disable} id='button5' onClick={(event)=>clickKeyboard('T',"button5")}>T</Button>
   <Button className='key' disabled={disable} id='button6' onClick={(event)=>clickKeyboard('Y',"button6")}>Y</Button>
   <Button className='key' disabled={disable} id='button7' onClick={(event)=>clickKeyboard('U',"button7")}>U</Button>
   <Button className='key' disabled={disable} id='button8' onClick={(event)=>clickKeyboard('I',"button8")}>I</Button>
   <Button className='key' disabled={disable} id='button9' onClick={(event)=>clickKeyboard('O',"button9")}>O</Button>
   <Button className='key' disabled={disable} id='button10' onClick={(event)=>clickKeyboard('P',"button10")}>P</Button>
   <Button className='key' disabled={disable} id='button11' onClick={(event)=>clickKeyboard('Ğ',"button11")}>Ğ</Button>
   <Button className='key' disabled={disable} id='button12' onClick={(event)=>clickKeyboard('Ü',"button12")}>Ü</Button>
</Col>
<Col className='keyboardCol2'>
   <Button className='key' disabled={disable} id='button13'  onClick={(event)=>clickKeyboard('A',"button13")}>A</Button>
   <Button className='key' disabled={disable} id='button14'  onClick={(event)=>clickKeyboard('S',"button14")}>S</Button>
   <Button className='key' disabled={disable} id='button15'  onClick={(event)=>clickKeyboard('D',"button15")}>D</Button>
   <Button className='key' disabled={disable} id='button16'  onClick={(event)=>clickKeyboard('F',"button16")}>F</Button>
   <Button className='key' disabled={disable} id='button17'  onClick={(event)=>clickKeyboard('G',"button17")}>G</Button>
   <Button className='key' disabled={disable} id='button18'  onClick={(event)=>clickKeyboard('H',"button18")}>H</Button>
   <Button className='key' disabled={disable} id='button19'  onClick={(event)=>clickKeyboard('J',"button19")}>J</Button>
   <Button className='key' disabled={disable} id='button20'  onClick={(event)=>clickKeyboard('K',"button20")}>K</Button>
   <Button className='key' disabled={disable} id='button21'  onClick={(event)=>clickKeyboard('L',"button21")}>L</Button>
   <Button className='key' disabled={disable} id='button22'  onClick={(event)=>clickKeyboard('Ş',"button22")}>Ş</Button>
   <Button className='key' disabled={disable} id='button23'  onClick={(event)=>clickKeyboard('İ',"button23")}>İ</Button>
</Col>
<Col className='keyboardCol3'>
   <Button className='key' disabled={disable} id='button24' onClick={(event)=>clickKeyboard('Z',"button24")}>Z</Button>
   <Button className='key' disabled={disable} id='button25' onClick={(event)=>clickKeyboard('X',"button25")}>X</Button>
   <Button className='key' disabled={disable} id='button26' onClick={(event)=>clickKeyboard('C',"button26")}>C</Button>
   <Button className='key' disabled={disable} id='button27' onClick={(event)=>clickKeyboard('V',"button27")}>V</Button>
   <Button className='key' disabled={disable} id='button28' onClick={(event)=>clickKeyboard('B',"button28")}>B</Button>
   <Button className='key' disabled={disable} id='button29' onClick={(event)=>clickKeyboard('N',"button29")}>N</Button>
   <Button className='key' disabled={disable} id='button30' onClick={(event)=>clickKeyboard('M',"button30")}>M</Button>
   <Button className='key' disabled={disable} id='button31' onClick={(event)=>clickKeyboard('Ö',"button31")}>Ö</Button>
   <Button className='key' disabled={disable} id='button32' onClick={(event)=>clickKeyboard('Ç',"button32")}>Ç</Button>
</Col>
</div>
<br/>
<br/>
<Col>
<div className="center">
  <h2>Wrong Letters:</h2>

     <Col className="letter"><div> {wrongLetters.map((cLetter)=>{
          return cLetter
         })}
         </div> </Col> 
   
  
 
</div>

</Col>

         <div className="center">
         <h2 id="answer" className="hide">
          Answer was  <span className="red">{name}</span>.
          </h2>
         </div>

    </div>
  )
}


export default App

