import './styleSheet.css'
const StyleSheet = (probs) => {
  // const isSecenek = probs.secenek? "once": "sonra";
  //p classname ye isSecenek diyebiliriz

  
  return (
    <div>
      <img className="logo"
     src="https://secure.meetupstatic.com/photos/event/3/1/b/9/600_488352729.jpeg"
        alt="clarusway-logo"
      />
      <h1 className="header">Regular-style --- STYLESHEET </h1>     
 
      <p className={probs.secenek? "once": "sonra"}>Welcome to Clarusway</p>
      </div>
  );
};

export default StyleSheet;
// class nameler verdik, 
//yukarıda css e bağlamnak için miport ettik