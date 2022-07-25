import React from 'react';
import Link from 'next/link';
import Box from 'common/components/Box';
import Text from 'common/components/Text';
import Image from 'common/components/Image';
import Logo from 'common/components/UIElements/Logo';
import Heading from 'common/components/Heading';
import Container from 'common/components/UI/Container';
import FooterArea, {
  WidgetArea,
  MenuArea,
  Menu,
  MenuItem,
  CopyrightText,
} from './footer.style';

import { footer } from 'common/data/AppModern';

const Footer = () => {
  const { logo, twitter, youtube, discord, menu, widgets } = footer;
  const date = new Date();
  const year = date.getFullYear();

  return (
    <FooterArea>
      <Container>
        <WidgetArea>
          <div className='soc'>
          <Logo
            className="socials"
            href="https://twitter.com/Seemeo_app"
            logoSrc={twitter}
            target="_blank"
            title="Twitter"
          />

          <Logo
            className="socials"
            href="https://www.youtube.com/channel/UCTIOIG5OAhTw1nZPtCR21mw"
            logoSrc={youtube}
            target="_blank"
            title="Youtube"
          />
          <Logo
            className="socials"
            href="https://discord.gg/b8JcWTCd2p"
            logoSrc={discord}
            target="_blank"
            title="Discord"
          />
           </div>
        </WidgetArea>
        {/* End of footer widgets area */}
        <MenuArea>
          <Logo
            className="logo"
            href="/"
            logoSrc={logo}
            title="Seemeo App"
          />
          <Menu>
            {menu.map((item) => (
              <MenuItem key={`footer-link${item.id}`}>
                <Link href={item.link}>
                  <a>{item.text}</a>
                </Link>
              </MenuItem>
            ))}
          </Menu>
          <CopyrightText>Copyright {year} By Seemeo</CopyrightText>
        </MenuArea>
        {/* End of footer menu area */}
      </Container>
    </FooterArea>
  );
};

export default Footer;
