import TwitterIcon from './icons/twitter.svg'
import MediumIcon from './icons/medium.svg'
import DocsIcon from './icons/docs.svg'
import DiscordIcon from './icons/discord.svg'
import GithubIcon from './icons/github.svg'

const FooterIcon = ({ src, url }) => (
  <img
    src={src}
    alt=""
    className="opacity-70 hover:opacity-100"
    onClick={() => (window.location.href = url)}
  />
)

const twitter = 'https://twitter.com/puffpuffmoney'
const medium = 'https://medium.com/@puffpuffmoney'
const github = 'https://github.com/puffpuffmoney/puff_contracts'

export const Footer = () => (
  <div className="flex items-center space-x-9">
    <FooterIcon src={TwitterIcon} url={twitter}/>
    <FooterIcon src={MediumIcon} url={medium}/>
    <FooterIcon src={DocsIcon} />
    <FooterIcon src={DiscordIcon} />
    <FooterIcon src={GithubIcon} url={github}/>
  </div>
)
