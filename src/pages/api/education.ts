import type { NextApiRequest, NextApiResponse } from 'next';

export default (req: NextApiRequest, res: NextApiResponse) => {
	const education = [
		{
			institute: 'Mepco Schlenk Engineering College, Anna University',
			website: 'https://www.mepcoeng.ac.in/',
			course: 'B.E Electronics & Communication Engineering',
			endDate: '2014-03-31',
			place: 'Sivakasi, Tamil Nadu, India',
			percentage: '8.0 CGPA',
			technologies: [],
		},
		{
			institute: 'Sri Vaiyapuri Vidyalaya Hr.Sec School',
			website: 'https://vaiyapurischool.org/',
			course: 'Class XII',
			endDate: '2010-03-31',
			place: 'Sankarankovil, Tamil Nadu, India',
			percentage: '95.96%',
			technologies: [],
		},
		{
			institute: 'Sri Vaiyapuri Vidyalaya Hr.Sec School',
			website: 'https://vaiyapurischool.org/',
			course: 'Class X',
			endDate: '2007-03-31',
			place: 'Sankarankovil, Tamil Nadu, India',
			percentage: '93.36%',
			technologies: [],
		},
	];

	res.status(200).json({ education });
};
