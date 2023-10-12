import { useState } from 'react'
import './App.css'
import Modal from 'react-modal';

Modal.setAppElement('#root');

function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function openModal() {
    setModalIsOpen(true);
  }

  function closeModal() {
    setModalIsOpen(false);
  }

  return (
    <>
      <div className="bp">
        <div className="menu">
          <a href="https://www.zillow.com/homes/" className="url">Buy</a>
          <a href="https://www.zillow.com/homes/for_rent/" className="url">Rent</a>
          <a href="https://www.zillow.com/sell/" className="url">Sell</a>
          <a href="https://www.zillow.com/home-loans/?utm_source=zillow&utm_medium=referral&utm_campaign=Z_Mortgagestopnav#source=Z_Mortgagestopnav" className="url">Home Loans</a>
          <a href="https://www.zillow.com/professionals/real-estate-agent-reviews/" className="url">Agent finder</a>
        </div>
        <div className="logo">
          <img src="./src/assets/zillow.png" alt="logo" className="tamlogo"/>
        </div>
        <div className="menu">
          <a href="https://www.zillow.com/rental-manager/?source=topnav&itc=postbutton_sitenav" className="url">Manage Rentals</a>
          <a href="https://www.zillow.com/z/partners/advertise/" className="url">Advertise</a>
          <a href="https://zillow.zendesk.com/hc/en-us/" className="url">Help</a>
          <a href="#" className='url-sign' onClick={openModal}>Sign in</a>
          <div className="closemodal">
            <Modal isOpen={modalIsOpen} onRequestClose={closeModal}contentLabel="Ejemplo de Popup" className="modalst" >
              <div className="pop1">
              <h2>Welcome to Zillow</h2>
              <a href="#" className="cerrar" onClick={closeModal}>✖</a>
          </div>
          <div className="logreg">
            <p></p>
            <p></p>
          </div>
          <div className="form">
            <div className="formla">
              <h3 className="title">Email</h3>
              <input onChange={()=> serEmailRegister(e.target.value)} className="inputf" type="email" placeholder="Enter email"/>
            </div>
            <div className="formla">
              <h3 className="title">Password</h3>
              <input onChange={()=> setPasswordRegister(e.target.value)} className="inputf" type="password" placeholder="Enter password"/>
            </div>
            <button onClick={(e)=> handleRegister(e)}className="button"><b>Sign In</b></button>
          </div>
            
            </Modal>
          </div>
        </div>
      </div>
      <div className="log">
        <h1 className='tit'>Agents. Tours. Loans. Homes.</h1>
        <input type="text" className="imput" placeholder="Enter an address, neighborhood, city, or Zip code"/>
      </div>
      <div className="segundo">
        <div className="segun-1">
          <div className="tex">
            <b>Get home recommendations</b>
            <p className="textogris">Sign in for a more personalized experience.</p>
            <span class="boton3" onClick={openModal}><b>Sign In</b></span>
          </div>
        </div>
        <div className='segun-2'>
        <img src="./src/assets/casasuni.png" alt="logo" className="casassegundo"/>
        </div>
      </div>
      <div className="ter">
        <div className="card">
          <img src="./src/assets/unoo.png" alt="logo" className="numeros"/>
          <div className="cont">
            <h2>Buy a home</h2>
            <p className="textogris">Find your place with an immersive photo experience and the most listings, including things you won’t find anywhere else.</p>
          </div>
            <span class="botoncard" ><a href="https://www.zillow.com/homes/"className='deco'><b>Browse Homes</b></a></span>
        </div>
        <div className="card">
          <img src="./src/assets/dos.png" alt="logo" className="numeros"/>
          <div className="cont">
            <h2>Sell a home</h2>
            <p className="textogris">No matter what path you take to sell your home, we can help you navigate a successful sale.</p>
          </div>
            <span class="botoncard" ><a href="https://www.zillow.com/sell/" className='deco'><b>Se your options</b></a></span>
        </div>
        <div className="card">
          <img src="./src/assets/tres.png" alt="logo" className="numeros"/>
          <div className="cont">
            <h2>Rent a home</h2>
            <p className="textogris">We’re creating a seamless online experience – from shopping on the largest rental network, to applying, to paying rent.</p>
          </div>
          <span class="botoncard" ><a href="https://www.zillow.com/homes/for_rent/" className='deco'><b>Find Rentals</b></a></span>
        </div>
      </div>
      <div className="cuarto">
        <div className="link4">
          <div className="divi">
          <a href="#" className="url4"><b>Real Estate</b></a>
          <a href="#" className="url4"><b>Rentals</b></a>
          </div>
          <div className="divi">
          <a href="#" className="url4"><b>Mortgage Rates</b></a>
          <a href="#" className="url4"><b>Browse Homes</b></a>
          </div>
          
        </div>
      </div>
      <div className="quinto">
        <div className="link5">
          <div className="url5">
            <a href="#" className="url">About</a>
            <a href="#" className="url">Zestimates</a>
            <a href="#" className="url">Research</a>
            <a href="#" className="url">Careers</a>
            <a href="#" className="url">Help</a>
            <a href="#" className="url">Advertise</a>
            <a href="#" className="url">Fair Housing Guide</a>
            <a href="#" className="url">Terms of use</a>
            <a href="#" className="url">Privacy Portal</a>
            <a href="#" className="url">Cookie Preference</a>
            <a href="#" className="url">Blog</a>
            <a href="#" className="url">AI</a>
            <a href="#" className="url">Mobile Apps</a>
          </div>
          <div className="url5">
            <a href="#" className="url">Trulia</a>
            <a href="#" className="url">StreetEasy</a>
            <a href="#" className="url">HotPads</a>
            <a href="#" className="url">Out East</a>
            <a href="#" className="url">ShowingTime+</a>
          </div>
          <div className="url5-a">
            <a href="#" className="url5a">Do Not Sell or Share My Personal Information→</a>
          </div>
        </div>
      </div>
      <div className="sexto">
        <div className="texto6">
        <p className='t6'>Zillow Group is committed to ensuring digital accessibility for individuals with disabilities. We are continuously working to improve the accessibility of our <br /> web experience for everyone, and we welcome feedback and accommodation requests. If you wish to report an issue or seek an accommodation, please <br />let us know.</p>
        <p className='t6'>Zillow, Inc. holds real estate brokerage licenses in multiple states. Zillow (Canada), Inc. holds real estate brokerage licenses in multiple provinces. <br />§ 442-H New York Standard Operating Procedures <br />
        § New York Fair Housing Notice <br />
        TREC: Information about brokerage services, Consumer protection notice <br />
        California DRE #1522444</p>
        <a href="#" className="url6">Contact Zillow, Inc. Brokerage</a>
        <p className='t6'>For listings in Canada, the trademarks REALTOR®, REALTORS®, and the REALTOR® logo are controlled by The Canadian Real Estate Association (CREA) and <br />identify real estate professionals who are members of CREA. The trademarks MLS®, Multiple Listing Service® and the associated logos are owned by CREA <br /> and identify the quality of services provided by real estate professionals who are members of CREA. Used under license.</p>
        </div>
      </div>
      <div className="septimo">
      <a href="https://www.zillow.com/z/buying/app-download/"><img src="./src/assets/play.png" alt="logo" className="tamlogof"/></a>
      <div className="septimo1">
        <div className="logg">
        <a href="https://www.zillow.com/"><img src="./src/assets/zillow.png" alt="logo" className="tamlogozillow"/></a>
        </div>
        <p className="textogrisf-ul">Follow us:</p>
        <a href="https://www.facebook.com/Zillow"><img src="./src/assets/facebook.png" alt="logo" className="tamlogosf"/></a>
        <a href="https://www.instagram.com/zillow/"><img src="./src/assets/logotipo-de-instagram.png" alt="logo" className="tamlogosf"/></a>
        <a href="https://www.tiktok.com/@zillow"><img src="./src/assets/tik-tok.png" alt="logo" className="tamlogosf"/></a>
        <a href="https://twitter.com/zillow"><img src="./src/assets/gorjeo.png" alt="logo" className="tamlogosf"/></a>
        <p className="textogrisf-ul">© 2006-2023 Zillow</p>
        <a href="https://www.zillow.com/"><img src="./src/assets/casita.png" alt="logo" className="tamlocasa"/></a>
      </div>
      </div>
      <div className="octavo">
      <img src="./src/assets/finalimg.png" alt="logo" className="imgfinal"/>
      </div>
    </>
  )
}

export default App
