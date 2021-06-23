// import Image from 'next/image';
import styled from 'styled-components';

import { Container } from 'Atoms/Container';
import { List } from 'Atoms/List';
import { SeoHead } from 'Atoms/SeoHead';

// import desk from 'Public/assets/desk.jpg';

function Home() {
	return (
		<>
			<SeoHead
				title="Sankaranarayanan S.E Uses ... - FullStack Software Developer"
				description="This is a list of tech equipment I currently use for my day-to-day work as a software engineer."
			/>

			<Container>
				<Headline>/uses</Headline>
				<p>
					This is a list of tech equipment I currently use for my day-to-day
					work as a software engineer. Still it is in work progress 👻.
				</p>
				{/* <Image
					src={desk}
					width={1920}
					height={1080}
					alt="A photo of my desk"
					placeholder="blur"
				/> */}
				<h3>Computer & Hardware</h3>
				<List>
					<li>
						<strong>
							<a
								href="https://amzn.to/3ySbHP2"
								target="_blank"
								rel="noopener noreferrer"
							>
								Macbook Pro 13&quot;
							</a>
						</strong>{' '}
						(M1 chip with 8‑core CPU, 8‑core GPU, 16GB RAM, 512GB SSD)
					</li>
					<li>
						<strong>
							<a
								href="https://www.amazon.in/gp/product/B07T7NLLJJ"
								target="_blank"
								rel="noopener noreferrer"
							>
								Lenovo Legion Y540
							</a>
						</strong>{' '}
						(Intel i7, 15.6 inch, 16GB RAM/ 1TB HDD + 256 GB SSD)
					</li>
					<li>
						<strong>
							<a
								href="https://www.amazon.in/dp/B07W86N3JV/"
								target="_blank"
								rel="noopener noreferrer"
							>
								HyperX Alloy Origins Core
							</a>
						</strong>{' '}
						Red Switch
					</li>
					<li>
						<strong>
							<a
								href="https://www.amazon.in/Razer-DeathAdder-Ergonomic-Wireless-Lighting/dp/B08JWNHGPH"
								target="_blank"
								rel="noopener noreferrer"
							>
								Razer DeathAdder V2
							</a>
						</strong>{' '}
						Pro Ergonomic Wireless Gaming Mouse
					</li>
					<li>
						<strong>
							<a
								href="https://www.amazon.in/Sony-WF-XB700-Wireless-Bluetooth-Headphones/dp/B085VQFZ8Z"
								target="_blank"
								rel="noopener noreferrer"
							>
								Sony WF-XB700 Buds
							</a>
						</strong>{' '}
						Truly Wireless Extra Bass Bluetooth Earbuds
					</li>
					<li>
						<strong>
							<a
								href="https://www.oneplus.in/oneplus-nord"
								target="_blank"
								rel="noopener noreferrer"
							>
								OnePlus Nord
							</a>
						</strong>{' '}
						(256 GB)
					</li>
					<li>
						<strong>
							<a
								href="https://www.amazon.in/Sennheiser-HD-4-50-BT-Cancellation"
								target="_blank"
								rel="noopener noreferrer"
							>
								Sennheiser HD 4.50 BT NC
							</a>
						</strong>{' '}
						Bluetooth Wireless Headphones with Active Noise Cancellation
					</li>
					<li>
						<strong>
							<a
								href="https://www.amazon.in/Echo-Plus-2nd-Gen/dp/B07CTTL5GR"
								target="_blank"
								rel="noopener noreferrer"
							>
								Alexa EchoPlus
							</a>
						</strong>{' '}
						as Speaker/Smart Home 🤔
					</li>
				</List>
				<h3>Development Tools</h3>
				<List>
					<li>
						<strong>
							<a
								href="https://code.visualstudio.com/"
								target="_blank"
								rel="noopener noreferrer"
							>
								VS Code
							</a>
						</strong>{' '}
						with the{' '}
						<strong>
							<a
								href="https://marketplace.visualstudio.com/items?itemName=sdras.night-owl"
								target="_blank"
								rel="noopener noreferrer"
							>
								Night Owl
							</a>
						</strong>{' '}
						theme and{' '}
						<strong>
							<a
								href="https://gumroad.com/l/dank-mono"
								target="_blank"
								rel="noopener noreferrer"
							>
								Dank Mono
							</a>
						</strong>{' '}
						font
					</li>
					<li>
						<strong>
							<a
								href="https://www.iterm2.com/"
								target="_blank"
								rel="noopener noreferrer"
							>
								iTerm 2
							</a>
						</strong>{' '}
						Terminal
					</li>
					<li>
						<strong>
							<a
								href="https://www.postman.com/"
								target="_blank"
								rel="noopener noreferrer"
							>
								Postman
							</a>
						</strong>{' '}
						to test REST and GraphQL API&apos;s
					</li>
				</List>
				<h3>Design Tools</h3>
				<List>
					<li>
						<strong>
							<a
								href="https://www.abstract.com/"
								target="_blank"
								rel="noopener noreferrer"
							>
								Abstract
							</a>
						</strong>
					</li>
					<li>
						<strong>
							<a
								href="https://www.figma.com/"
								target="_blank"
								rel="noopener noreferrer"
							>
								Figma
							</a>
						</strong>
					</li>
					<li>
						<strong>
							<a
								href="https://www.sketch.com/"
								target="_blank"
								rel="noopener noreferrer"
							>
								Sketch
							</a>
						</strong>
					</li>
					<li>
						<strong>
							<a
								href="https://www.adobe.com/in/products/photoshop.html"
								target="_blank"
								rel="noopener noreferrer"
							>
								Adobe Photoshop
							</a>
						</strong>
					</li>
					<li>
						<strong>
							<a
								href="https://www.figma.com/"
								target="_blank"
								rel="noopener noreferrer"
							>
								Adobe Illustrator
							</a>
						</strong>
					</li>
				</List>
				<h3>Productivity Tools</h3>
				<List>
					<li>
						<strong>
							<a
								href="https://www.notion.so/?r=008f1f1395694a2594659c43f8d666d8"
								target="_blank"
								rel="noopener noreferrer"
							>
								Notion
							</a>
						</strong>{' '}
						for notes and to-do lists
					</li>
					<li>
						<strong>
							<a
								href="https://www.atlassian.com/software/jira"
								target="_blank"
								rel="noopener noreferrer"
							>
								Jira
							</a>
						</strong>{' '}
						for project management
					</li>
					<li>
						<strong>
							<a
								href="https://slack.com/"
								target="_blank"
								rel="noopener noreferrer"
							>
								Slack
							</a>
						</strong>{' '}
						for communication
					</li>
					<li>
						<strong>
							<a
								href="https://workspace.google.com/"
								target="_blank"
								rel="noopener noreferrer"
							>
								Google Workspace
							</a>
						</strong>{' '}
						for email, calendars and Google Drive
					</li>
				</List>
				<h3>Various other software</h3>
				<List>
					<li>
						<strong>
							<a
								href="https://www.google.com/chrome/canary/"
								target="_blank"
								rel="noopener noreferrer"
							>
								Chrome Canary browser
							</a>
						</strong>{' '}
					</li>
					<li>
						<strong>
							<a
								href="https://www.globaldelight.com/boom"
								target="_blank"
								rel="noopener noreferrer"
							>
								Boom2
							</a>
						</strong>{' '}
						for my macbook speaker
					</li>
					<li>
						<strong>
							<a
								href="https://magnet.crowdcafe.com/"
								target="_blank"
								rel="noopener noreferrer"
							>
								Magnet
							</a>
						</strong>{' '}
						to manage windows
					</li>
				</List>{' '}
			</Container>
		</>
	);
}

const Headline = styled.h2`
	font-size: 2rem;

	span {
		display: none;
	}

	@media screen and (min-width: 768px) {
		font-size: 3rem;

		span {
			display: inline-block;
		}

		@keyframes wave {
			0% {
				transform: rotate(0);
			}
			50% {
				transform: rotate(-10deg);
			}
			100% {
				transform: rotate(10deg);
			}
		}

		&:hover span {
			animation: wave 0.5s ease infinite;
		}
	}
`;

export default Home;
