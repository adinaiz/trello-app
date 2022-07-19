import React from 'react'
import AddCard from './AddCard'
import TrelloList from './TrelloList'
import styled from 'styled-components'
import Header from  '../../layout/Header'

const Container = styled.div`
	height: 100vh;
	width: 100%;
	position: absolute;
	background-image: url('https://i.pinimg.com/originals/97/64/78/976478ff7fef704f3860680f73889ae2.jpg');
	background-size: cover;
`

const Content = styled.div`
	display: flex;
	padding: 20px;
	background-size: cover;
`

function MainPage() {
	return (
		<>
		<Header/>
			<Container>
				<Content>
					<TrelloList />
					<AddCard />
				</Content>
			</Container>
		</>
	)
}

export default MainPage


