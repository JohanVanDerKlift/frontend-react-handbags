import React from 'react';
import './App.css';
import Button from "./components/Button";
import Article from "./components/Article";
import Tile from "./components/Tile";
import bag_1 from "./assets/bag_1.png";
import bag_2 from "./assets/bag_2.png";
import bag_3 from "./assets/bag_3.png";
import bag_4 from "./assets/bag_4.png";
import brand from "./assets/brand.png";
import ourStory from "./assets/our_story.png";

function App() {

  return (
    <>
      <h1>Handbags & Purses</h1>
      <nav>
        <Button innerText="To the collection"></Button>
        <Button innerText="Shop all bags"></Button>
        <Button innerText="pre-order" disabled={true}/>
      </nav>
      <main>
        <Article redLabel="Best seller" image={bag_1} description="The handy bag" price="€400,-" />
        <Article redLabel="Best seller" image={bag_2} description="The stylish bag" price="€250,-" />
        <Article redLabel="New collection" image={bag_3} description="The simple bag" price="€300,-" />
        <Article redLabel="New collection" image={bag_4} description="The trendy bag" price="€150,-" />
      </main>
      <footer>
        <Tile image={brand} />
        <Tile header="The brand" text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti eius facere
          hic illo natus nesciunt non quaerat? Beatae doloremque eveniet ipsum laboriosam magnam minima molestias natus
          pariatur porro provident quisquam reiciendis repudiandae, suscipit. Accusamus, consectetur dolore est ex
          harum illo quidem sint. Consequuntur cupiditate explicabo ipsam porro quibusdam tempora temporibus."
        />
        <Tile header="Our story" text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti eius facere
          hic illo natus nesciunt non quaerat? Beatae doloremque eveniet ipsum laboriosam magnam minima molestias natus
          pariatur porro provident quisquam reiciendis repudiandae, suscipit. Accusamus, consectetur dolore est ex
          harum illo quidem sint. Consequuntur cupiditate explicabo ipsam porro quibusdam tempora temporibus."
        />
        <Tile image={ourStory} />
      </footer>
    </>
  );
}

export default App;



