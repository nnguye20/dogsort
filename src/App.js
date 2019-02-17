import React, { Component } from 'react';
import './App.css';
import FilteredList from './FilteredList';
import DogFrame from './DogFrame';
import img1 from './images/Australian_Shepherd.jpg';
import img2 from './images/Beagle.jpg';
import img3 from './images/Bull_Terrier.jpg';
import img4 from './images/Chihuaha.jpg';
import img5 from './images/Chow_Chow.jpg';
import img6 from './images/Daschund.jpg';
import img7 from './images/German_Shepherd.jpg';
import img8 from './images/Golden_Retriever.jpg';
import img9 from './images/Havanese.jpg';
import img10 from './images/Lhasa Apso.jpg';
import img11 from './images/Old_English_Sheepdog.jpg';
import img12 from './images/Shih_Tzu.jpg';
import img13 from './images/Siberian_Husky.jpg';


const dogsList = [
  <DogFrame name={"Australian Shepherd"} image={img1} shade={"Mixed"} size={"Medium"} loyalty={4} loyaltyClass={"Four"}/>,
  <DogFrame name={"Beagle"} image={img2} shade={"Mixed"} size={"Small"} loyalty={5} loyaltyClass={"Five"}/>,
  <DogFrame name={"Bull Terrier"} image={img3} shade={"Light"} size={"Small"} loyalty={3} loyaltyClass={"Three"}/>,
  <DogFrame name={"Chihuaha"} image={img4} shade={"Mixed"} size={"Small"} loyalty={1} loyaltyClass={"One"}/>,
  <DogFrame name={"Chow Chow"} image={img5} shade={"Orange/Yellow"} size={"Large"} loyalty={4} loyaltyClass={"Four"}/>,
  <DogFrame name={"Daschund"} image={img6} shade={"Orange/Yellow"} size={"Small"} loyalty={3} loyaltyClass={"Three"}/>,
  <DogFrame name={"German Shepherd"} image={img7} shade={"Dark"} size={"Large"} loyalty={5} loyaltyClass={"Five"}/>,
  <DogFrame name={"Golden Retriever"} image={img8} shade={"Orange/Yellow"} size={"Large"} loyalty={5} loyaltyClass={"Five"}/>,
  <DogFrame name={"Havanese"} image={img9} shade={"Mixed"} size={"Small"} loyalty={2} loyaltyClass={"Two"}/>,
  <DogFrame name={"Lhasa Apso"} image={img10} shade={"Mixed"} size={"Small"} loyalty={2} loyaltyClass={"Two"}/>,
  <DogFrame name={"Old English Sheepdog"} image={img11} shade={"Light"} size={"Large"} loyalty={4} loyaltyClass={"Four"}/>,
  <DogFrame name={"Shih Tzu"} image={img12} shade={"Light"} size={"Small"} loyalty={4} loyaltyClass={"Four"}/>,
  <DogFrame name={"Siberian Husky"} image={img13} shade={"Light"} size={"Large"} loyalty={4} loyaltyClass={"Four"}/>,
]


class App extends Component {
  render() {

    return (
      <div className="App">
        <FilteredList items ={dogsList} />

      </div>
    );

  }
}

export default App;
