import TwitterIcon from './icons/twitter.svg'
import MediumIcon from './icons/medium.svg'
import DocsIcon from './icons/docs.svg'
import DiscordIcon from './icons/discord.svg'
import GithubIcon from './icons/github.svg'

const FooterIcon = ({src}) => <img src={src} alt="" className="opacity-70 hover:opacity-100"/>

export const Footer = () => <div className="flex items-center space-x-7">
  <FooterIcon src={TwitterIcon}/>
  <FooterIcon src={MediumIcon}/>
  <FooterIcon src={DocsIcon}/>
  <FooterIcon src={DiscordIcon}/>
  <FooterIcon src={GithubIcon}/>
</div>
