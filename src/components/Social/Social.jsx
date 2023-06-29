import { socials } from "../../contentOption";

import { SocialWrapp, SocialList, SocialItem, SocialText, Facebook, Github, Instagram, Linkedin } from "./Social.styled";

const Social = (params) => {
  return (
    <SocialWrapp>
      <SocialList>
        {socials.github && (
          <SocialItem>
            <a href={socials.github}>
              <Github />
            </a>
          </SocialItem>
              )}
        {socials.linkedin && (
          <SocialItem>
            <a href={socials.linkedin}>
              <Linkedin />
            </a>
          </SocialItem>
        )}
              {socials.instagram && (
          <SocialItem>
            <a href={socials.instagram}>
              <Instagram />
            </a>
          </SocialItem>
        )}

        {socials.facebook && (
          <SocialItem>
            <a href={socials.facebook}>
              <Facebook />
            </a>
          </SocialItem>
        )}

      </SocialList>
      <SocialText>Follow Me</SocialText>
    </SocialWrapp>
  );
};

export default Social;