import React from "react";
import bag from "./Assets/sepet.svg";
import Apple from "./components/Apple";
import Tree from "./components/Tree";

const apples = [{id: 0, coordinate : "item1"},{id: 1, coordinate : "item2"},{id: 2, coordinate : "item3"},{id: 3, coordinate : "item4"},{id: 4, coordinate : "item5"},
  {id: 5, coordinate : "item6"},{id: 6, coordinate : "item7"},{id: 7, coordinate : "item8"}]

class App extends React.Component{
  state = {
    animation_tree : "",
    animation_apple: "apple",
    animation_point: "",
    animation_box: "",
    boxes: true,
  }

  appleFallen = () => {
     //ağaca tıkladığımda ağacın ve elmaların alacağı animasyonu tetikliyor..
    this.setState({animation_tree : "point"});
    this.setState({animation_point : "point"});

    //belli bir süre sonra sallanan elmaların düşmesini söylüyor. Ve ağacın animasyonunu durdurmamızı sağlıyor.
    setTimeout(() => {
      this.setState({animation_point : ""});
      this.setState({animation_tree : "fallen"});
    }, 1000);
  }

  render(){
     //Apple componentinin içerisinde bir if kontrolü sağlayarak classları kontrol ediyoruz. Default değerinde alacaklarını ve işleme göre hangi animasyonu
     //çağıracağımızı söylüyoruz.
     // this.appleFallen() methodumuz animasyonları çalıştırıyor.
    const { animation_tree, animation_apple, animation_point, animation_box } = this.state;
    return(
      <div className="box"> 
        <div className="container">
       
          {
            apples.map(i => {
              return(
                <Apple key={i.id} item={animation_tree === "point" ? animation_apple + " point" + " " + i.coordinate : 
                animation_tree === "fallen" ? animation_apple + " fallen" + " " + i.coordinate :
                animation_apple + " " + i.coordinate}/>
              )
            })
          }
          <Tree item={animation_point} onClick={() => this.appleFallen()}/>
          <img src={bag} alt="" className={["bag" + " " + animation_box]}/>
        </div>
      </div>
    )
  }
}
export default App;