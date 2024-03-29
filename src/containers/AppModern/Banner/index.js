import React from 'react';
import Fade from 'react-reveal/Fade';
import { Icon } from 'react-icons-kit';
import { playCircle } from 'react-icons-kit/fa/playCircle';
import { openModal, closeModal } from '@redq/reuse-modal';
import Text from 'common/components/Text';
import Image from 'common/components/Image';
import NextImage from 'common/components/NextImage';
import Button from 'common/components/Button';
import Heading from 'common/components/Heading';
import Rating from 'common/components/Rating';
import Container from 'common/components/UI/Container';
import BannerWrapper, {
  BannerContent,
  RatingInfo,
  BannerImage,
  ButtonGroup,
  VideoGroup,
  VideoWrapper,
  CustomerWrapper,
  ImageWrapper,
} from './banner.style';

import { client } from 'common/data/AppModern';

import microsoft from 'common/assets/image/appModern/envato-icon.png';
import bannerImg from 'common/assets/image/appModern/banner2.png';
import videoBanner1 from 'common/assets/image/appModern/video-1.png';
import videoBanner2 from 'common/assets/image/appModern/video-2.png';
import circleBorder from 'common/assets/image/appModern/shape.svg';
// close button for modal
const CloseModalButton = () => (
  <Button
    className="modalCloseBtn"
    variant="fab"
    onClick={() => closeModal()}
    icon={<i className="flaticon-plus-symbol" />}
  />
);

const ModalContent = () => (
  <VideoWrapper>
    <iframe
      title="Video"
      src="https://www.youtube.com/embed/NSoFM2Oo9jU"
      frameBorder="0"
    />
  </VideoWrapper>
);

const Banner = () => {
  // modal handler
  const handleVideoModal = () => {
    openModal({
      config: {
        className: 'video-modal',
        disableDragging: true,
        default: {
          width: 'auto',
          height: 'auto',
          x: 0,
          y: 0,
        },
      },
      component: ModalContent,
      componentProps: {},
      closeComponent: CloseModalButton,
      closeOnClickOutside: true,
    });
  };
  return (
    <BannerWrapper id="home">
      <Container>
        <BannerContent>
          <Fade up>
            {/* <RatingInfo>
              <Rating rating={4} />
              4.9 of 5
            </RatingInfo> */}
          </Fade>
          <Fade up delay={100}>
            <Heading
              as="h1"
              content="Connecting people and places locally"
            />
          </Fade>
          <Fade up delay={200}>
            <Text
               content="Seemeo is a geo-social business networking application 
                that connects people and places locally.
                The application simplifies how people get acquaintance with any 
                environment they find themselves. Users can easily connect with 
                people and places near them by changing their location from the application setting."
            />
          </Fade>
          <Fade up delay={300}>
            <ButtonGroup>
            <a href='https://drive.google.com/file/d/1G-KITpXOSUyiM93U_LNFuJWMlhNPZEOP/view?usp=sharing' target='_blank'>  <Button className="primary" title="Litepaper" /> </a>
              <Button
                className="text"
                variant="textButton"
                icon={<Icon icon={playCircle} />}
                iconPosition="left"
                title="Watch Video"
                onClick={handleVideoModal}
              />
            </ButtonGroup>
          </Fade>
          <VideoGroup>
            <NextImage
              src={videoBanner1}
              onClick={handleVideoModal}
              alt="Microsoft"
            />
            <NextImage
              src={videoBanner2}
              onClick={handleVideoModal}
              alt="Microsoft"
            />
          </VideoGroup>
        </BannerContent>
        <BannerImage>
          <Fade up delay={100}>
            <NextImage src={bannerImg} alt="Banner" />
          </Fade>
        </BannerImage>
      </Container>
      <CustomerWrapper>
        {/* <Text content="Trusted by companies like:" /> */}
        {/* <ImageWrapper>
          {client.map((item) => (
            <Image
              key={`client-key${item.id}`}
              src={item.image?.src}
              alt={item.title}
            />
          ))}
        </ImageWrapper> */}
      </CustomerWrapper>
      {/* <img
        className="bannerBottomShape"
        src={circleBorder?.src}
        alt="Bottom Circle"
      /> */}
    </BannerWrapper>
  );
};

export default Banner;
