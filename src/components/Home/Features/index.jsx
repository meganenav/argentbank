import Feature from '../Feature'
import chatIcon from '../../../img/icon-chat.png'
import moneyIcon from '../../../img/icon-money.png'
import securityIcon from '../../../img/icon-security.png'

export default function Features() {

	return (
		<section className="features">
			<h2 className="sr-only">Features</h2>
			<Feature img={chatIcon} alt="Chat Icon" title="You are our #1 priority" 
				description="Need to talk to a representative? You can get in touch through our
            	24/7 chat or through a phone call in less than 5 minutes." />
			<Feature img={moneyIcon} alt="Chat Icon" title="More savings means higher rates" 
				description="The more you save with us, the higher your interest rate will be!" />
			<Feature img={securityIcon} alt="Chat Icon" title="Security you can trust" 
				description="We use top of the line encryption to make sure your data and money is always safe." />
		</section>
	)
}