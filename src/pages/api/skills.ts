import type { NextApiRequest, NextApiResponse } from 'next';

export default (req: NextApiRequest, res: NextApiResponse) => {
	const technologies = [
		'JavaScript',
		'TypeScript',
		'Node',
		'PHP',
		'RESTful APIs',
		'HTML',
		'CSS',
	];
	const frameworks = ['React', 'Next.js', 'Express', 'Redux', 'React Native'];
	const databases = ['MongoDB', 'MySQL'];
	const cms = ['WordPress', 'Woocommerce'];
	const various = ['SEO', 'Agile', 'Jira', 'Confluence'];
	const design = [
		'Adobe Illustrator',
		'Invision',
		'Adobe Photoshop',
		'Sketch',
		'Figma',
	];
	const softSkills = [
		'Strong communicator',
		'Leadership',
		'Problem solving',
		'Creative thinking',
		'Flexible and adaptive',
		'Team player',
		'Always on time',
	];
	const languages = [
		{
			language: 'English',
			level: 'bilingual',
			icon: '🇬🇧',
		},
		{
			language: 'Tamil',
			level: 'bilingual',
			icon: '🇮🇳',
		},
		{
			language: 'Hindi',
			level: 'intermediate',
			icon: '🇮🇳',
		},
	];

	res.status(200).json({
		technologies,
		frameworks,
		databases,
		cms,
		various,
		design,
		softSkills,
		languages,
	});
};
