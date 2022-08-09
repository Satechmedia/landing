import React from 'react';
import Fade from 'react-reveal/Fade';
import NextImage from 'common/components/NextImage';
import Text from 'common/components/Text';
import Heading from 'common/components/Heading';
import Button from 'common/components/Button';
import JoinTrailArea, { ContentWrapper, ButtonGroup } from './joinTrial.style';

import { joinSlack } from 'common/data/AppClassic';

const JoinTrail = () => {
  const { logo, title, description } = joinSlack;

  return (
    <JoinTrailArea id="trail">
      <ContentWrapper>
        {/* <Fade up>
          <div className="trial-apps">
            <NextImage src={logo} alt="Slack" />
          </div>
        </Fade> */}
        <Fade up delay={100}>
          <Heading content={title} />
        </Fade>
        <Fade up delay={200}>
          <Text content={description} />
        </Fade>
        <Fade up delay={300}>
          <ButtonGroup>
          <a href='https://discord.gg/b8JcWTCd2p' target='_blank'> <Button title="Join the Whitelist Now!!!" /> </a>
          <a href='https://drive.google.com/file/d/1G-KITpXOSUyiM93U_LNFuJWMlhNPZEOP/view?usp=sharing' target='_blank'>  <Button title="Litepaper" variant="textButton" /> </a>
          </ButtonGroup>
        </Fade>
      </ContentWrapper>
    </JoinTrailArea>
  );
};

export default JoinTrail;
