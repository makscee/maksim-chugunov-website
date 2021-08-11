import React, { Component } from 'react';
import {
  Container,
  Row,
  Col,
} from 'reactstrap';
import GameCard from './GameCard';
import GreetingsHeader from './GreetingsHeader';

import duamoCard from './assets/duamo_card.png'
import sfCard from './assets/squarefast_card.png'
import { ContactBlock } from './ContactBlock';


const openInNewTab = (url) => {
  const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
  if (newWindow) newWindow.opener = null
}

class App extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      showDuamoEmbed: false,
      showSfEmbed: false,
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div>
        <Container className="main-container">
          <Row>
            <Col>
              <GreetingsHeader />
            </Col>
          </Row>
          <Row>
            <div className="white-div">
              <div className="dark-div">
                <GameCard
                  img={duamoCard}
                  text={`duamo is a minimalistic puzzle game\nwhere you have to fit shapes into a square`}
                  title="duamo"
                  onClickPlay={() => openInNewTab('https://store.steampowered.com/app/1690290/duamo/')}
                  onClickVideo={() => this.setState({ showDuamoEmbed: !this.state.showDuamoEmbed })}
                  embedId="Tj1qnIcIOw0"
                  showEmbed={this.state.showDuamoEmbed}
                  videoBtnEnabled={true}
                />
                <GameCard
                  img={sfCard}
                  text={`Square Fast is a fast-paced hardcore arcade\nwith rhythm elements`}
                  title="Square Fast"
                  onClickPlay={() => openInNewTab('https://store.steampowered.com/app/1269560/Square_Fast/')}
                  onClickVideo={() => this.setState({ showSfEmbed: !this.state.showSfEmbed })}
                  embedId="K-c2ZGTSARs"
                  showEmbed={this.state.showSfEmbed}
                  videoBtnEnabled={true}
                />
              </div>
            </div>
          </Row>
          <Row>
            <div className="white-div">
              <div className="dark-div">
                <ContactBlock
                  onClick={() => openInNewTab('https://mailchi.mp/20fe1b8c9b54/maksim-chugunov-website')}
                />
              </div>
            </div>

          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
