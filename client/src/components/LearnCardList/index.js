import React from 'react';

const LearnCardList = () =>  {
  return(
    <div className="learn-container">
      <div className="learn-container-row">
        <div className="mx-3 learn-card-container">
          <div className="learn-card">
            <iframe title="Shutter Speed vs Frame Rate" src="https://player.vimeo.com/video/460244184?h=d6141bdaba&color=F4CE10&byline=0" className="learn-iframe" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen>
            </iframe>
          </div>
          <script src="https://player.vimeo.com/api/player.js"></script>
          <div>
            <h3 className="learn-title">
            Shutter Speed vs Frame rate
            </h3>
            <p>
            Learn the relationship between shutter speed, shutter angle, and frame rate, to get the most natural looking video for your productions.
            </p>
          </div>
        </div>

        <div className="mx-3 learn-card-container">
          <div className="learn-card">
            <iframe title="Simple Streaming with the ATEM Mini" src="https://player.vimeo.com/video/458293654?h=3c586bf52c&color=F4CE10&byline=0" className="learn-iframe" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen>
            </iframe>
          </div>
          <script src="https://player.vimeo.com/api/player.js"></script>
          <div>
            <h3 className="learn-title">
            Simple Streaming with the ATEM Mini
            </h3>
            <p>
            We walk you through the steps of setting up basic streaming with the four channel BlackMagic ATEM Mini.
            </p>
          </div>
        </div>
      </div>

      <div className="learn-container-row">
        <div className="mx-3 learn-card-container">
          <div className="learn-card">
            <iframe title="Introduction to the DMG Lumiere RGB Lights" src="https://www.youtube.com/embed/_EE9-9-C4Yk" className="learn-iframe" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen>
            </iframe>
          </div>
          <div>
            <h3 className="learn-title">
            Introduction to the DMG Lumiere RGB Lights
            </h3>
            <p>
            We show you our favorite new RGB lights. Great effects, App control, and not  just color, but better whites as well!
            </p>
          </div>
        </div>

        <div className="mx-3 learn-card-container">
          <div className="learn-card">
            <iframe title="Shooting Raw with the Panasonic Eva1" src="https://www.youtube.com/embed/I3CdKN55DXM" className="learn-iframe" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen>
            </iframe>
          </div>
          <script src="https://player.vimeo.com/api/player.js"></script>
          <div>
            <h3 className="learn-title">
            Shooting Raw with the Panasonic Eva1
            </h3>
            <p>
            Keith and Christian talk the Panasonic Eva1+ Atomos Inferno!
            </p>
          </div>
        </div>
      </div>
      {/* End container */}
    </div> 
  );
}

export default LearnCardList;