import { ChangeEvent } from 'react';
import {
	Container,
	Row,
	Col,
	Card,
	CardHeader,
	CardTitle,
	CardSubtitle,
	CardBody,
	CardText,
	InputGroup,
	InputGroupText,
	Input
} from 'reactstrap';
import { useNavigate } from 'react-router-dom';
import useQueryString from 'use-query-string';

import Meta from '../meta';

const Discover = () => {
	const navigate = useNavigate();
	// @ts-ignore
	const [query, setParams] = useQueryString(window.location, navigate);

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { target: { value } } = e;
		if (value)
			setParams({ search: value });
		else
			setParams({ search: null });
	};

	return <Container style={{
			minHeight: 400
		}} fluid='md mt-5 mb-5'>
		<Meta
			title='Discover'
			description='Discover GitHub Campus Experts from India and explore events and more! Campus Experts are student leaders that strive to build and support diverse and inclusive spaces in technical communities.'
			/>
		<Row className='d-block d-lg-none justify-content-center mt-auto mb-auto'>
			<Col xs='12'>
				<h2 className='text-center mb-2'>Discover</h2>
				<h6 className='text-center mb-3'>Explore campus experts and events!</h6>
			</Col>
		</Row>
		<Row className='mt-3 align-items-end'>
			<Col xs='12' lg='9' className='order-2 mt-2 mt-lg-0'>
				<Row className='align-items-center'>
					<Col xs='12' className='d-none d-lg-block'>
						<h2 className='text-center mb-2'>Discover</h2>
						<h6 className='text-center mb-3'>Explore campus experts and events!</h6>
					</Col>
					<Col className='my-3 text-center' xs='5' lg='2'>
						<img src='/assets/logo.png' className='img img-fluid' />
					</Col>
					<Col className='d-none d-lg-block text-center' lg='10'>
						<h1>We are the campus experts!</h1>
						Find your local campus expert to connect.
					</Col>
				</Row>
				<Col xs='12'>
					<InputGroup>
						<InputGroupText>Search for a campus expert:</InputGroupText>
						<Input className='bg-dark text-white' value={query.search ?? ''} onChange={handleChange} type='text' />
					</InputGroup>
				</Col>
			</Col>
			<Col xs='12' lg='3' className='order-1'>
				<Card className='text-dark'>
					<CardHeader>
						<CardTitle>
							<h4>Explore</h4>
						</CardTitle>
						<CardSubtitle>
							<h6>GitHub Campus Experts</h6>
						</CardSubtitle>
					</CardHeader>
					<CardBody>
						<CardText>
							<a target='_blank' href='https://githubcampus.expert/events'
								className='btn mb-1 d-block btn-success text-light'
								>
								🎭 Global Events
							</a>
							<a target='_blank' href='https://education.github.com/experts'
								className='btn mb-1 d-block btn-primary text-light'
								>
								🚩 Experts
							</a>
							<a target='_blank' href='https://education.github.com/pack/offers'
								className='btn mb-1 d-block btn-secondary text-light'
								>
								💻 Developer Pack
							</a>
							<a target='_blank' href='https://www.twitch.tv/githubeducation/schedule'
								className='btn mb-1 d-block btn-danger text-light'
								>
								📺 Campus TV
							</a>
						</CardText>
					</CardBody>
				</Card>
			</Col>
			<Col xs='12' className='order-3 mt-4'>
				<h1 className='text-center'>In progress...</h1>
			</Col>
		</Row>
	</Container>
};

export default Discover;