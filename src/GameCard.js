import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import './App.css';
import YoutubeEmbed from './YoutubeEmbed';

const GameCard = ({ img, title, text, onClickPlay, onClickVideo, embedId, showEmbed, videoBtnEnabled }) => {
  return (
    <div>
      <Card className="gamecard-card">
        <CardTitle className="gamecard-title" tag="h5">{title}</CardTitle>
        <CardImg width="100%" src={img} alt="Card image cap" />
        <CardBody>
          <CardText className="gamecard-text">{text}</CardText>
          <Button disabled={!videoBtnEnabled} onClick={onClickVideo}>Video</Button>
          {showEmbed && <YoutubeEmbed embedId={embedId} />}
          <Button onClick={onClickPlay}>Play</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default GameCard;