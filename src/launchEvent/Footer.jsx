import TwitterIcon from './footerIcons/twitter.svg'
import MediumIcon from './footerIcons/medium.svg'
import DocsIcon from './footerIcons/docs.svg'
import DiscordIcon from './footerIcons/discord.svg'
import GithubIcon from './footerIcons/github.svg'

export const Footer = () => <div className="flex items-center space-x-7">
    <img src={TwitterIcon} alt=""/>
    <img src={MediumIcon} alt=""/>
    <img src={DocsIcon} alt=""/>
    <img src={DiscordIcon} alt=""/>
    <img src={GithubIcon} alt=""/>
</div>
