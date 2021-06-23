import type { NextApiRequest, NextApiResponse } from 'next';

export default (req: NextApiRequest, res: NextApiResponse) => {
	const positions = [
		{
			company: 'Zetwerk',
			website: 'https://www.zetwerk.com/',
			jobTitle: 'SDE-III',
			startDate: '2019-03-01',
			endDate: null,
			place: 'Bengaluru, India',
			description: `* Joined Zetwerk as a senior software engineer, eventually moved up to lead level within six months
* Joint Tech lead in developing a custom-built project management, supplier portal and Mobile App ecosystem
* Lead the development and integration process of RBL and ICICI bank payments integration into Zetwerk's Order Management system which involes the daily transactions of 20L-75L rupee
* Built highly complex Task Module in Project Management System which helped in visualizing and monitoring project status
* Built Textract javascript library for extracting Bill of Materials from Drawings which saves around 50% of manual work
* Optimised performance and accessibility of applications`,
			technologies: [
				'Node',
				'Express',
				'MongoDb',
				'Angular',
				'Kafka',
				'Python',
				'REST API',
			],
		},
		{
			company: 'Wieden + Kennedy',
			website: 'https://www.wk.com/',
			jobTitle: 'Web Developer',
			startDate: '2014-09-01',
			endDate: '2019-02-20',
			place: 'New Delhi, India',
			description: `* Developed web applications using PHP, Wordpress, JavaScript, Node js, Nextjs, React and Sass
* Contributed to the development of more than 20 websites for clients like Make In India, Audi, Indigo etc.
* Developed custom CMS Campaign tool both in PHP and Express framework which helps in the reduction of development time of the websites
* Built an Automated HTML Email Builder which reduced manual work by 50% and also helps in faster work delivery
* Streamlined the development workflow and trained the team members to implement to ease out the development
* Developed internal Hashtag Tracking Tool to quantify the impact of marketing efforts for brands`,
			technologies: [
				'JavaScript',
				'React',
				'ES6',
				'PHP',
				'MySql',
				'MongoDB',
				'Sass',
				'Webpack',
				'Node.js',
				'Express',
				'Wordpress',
				'Woocommerce',
			],
		},
	];

	res.status(200).json({ positions });
};
