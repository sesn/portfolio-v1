import { FC } from 'react';
import { StyledSocialIcons } from './styles';

import { Icon } from 'Atoms/Icon';

const SocialIcons: FC = () => {
	return (
		<StyledSocialIcons>
			<li>
				<a
					href="https://github.com/sesn"
					target="_blank"
					rel="noopener noreferrer"
					title="Github"
				>
					<Icon icon="GITHUB" />
				</a>
			</li>
			<li>
				<a
					href="https://twitter.com/sesankar11"
					target="_blank"
					rel="noopener noreferrer"
					title="Twitter"
				>
					<Icon icon="TWITTER" />
				</a>
			</li>
			<li>
				<a
					href="https://www.linkedin.com/in/sesankar11"
					target="_blank"
					rel="noopener noreferrer"
					title="LinkedIn"
				>
					<Icon icon="LINKEDIN" />
				</a>
			</li>
			<li>
				<a
					href="https://www.instagram.com/sesankar11"
					target="_blank"
					rel="noopener noreferrer"
					title="Instagram"
				>
					<Icon icon="INSTAGRAM" />
				</a>
			</li>
		</StyledSocialIcons>
	);
};

export { SocialIcons };
