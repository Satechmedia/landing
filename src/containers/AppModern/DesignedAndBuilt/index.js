import React from 'react';
import Text from 'common/components/Text';
import Heading from 'common/components/Heading';
import NextImage from 'common/components/NextImage';
import Container from 'common/components/UI/Container';
import SectionWrapper, { ContentWrapper } from './designedAndBuilt.style';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import { designAndBuilt } from 'common/data/AppModern';

const DesignedAndBuilt = () => {
  const { image, title, slogan, description } = designAndBuilt;

  return (
    <SectionWrapper id='content'>
      <Container>
        <ContentWrapper>
        <AnchorLink href='#content' offset={81}>
          <div className="content">
            <Heading as="h5" content={slogan} />
            <Heading content={title} />
            <Text content={description} />
          </div>
          </AnchorLink>
          {/* <div className="image">
            <NextImage src={image} alt="Built Logo" />
          </div> */}
         
        </ContentWrapper>
      </Container>
    </SectionWrapper>
  );
};

export default DesignedAndBuilt;
