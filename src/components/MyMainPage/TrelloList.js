import React from 'react'
import { useSelector } from 'react-redux'
import TrelloCard from '../Card/TrelloCard'
import styled from 'styled-components'

const Container = styled.div`
    display:flex;
    justify-content:space-between;
`

function TrelloList() {
	const todos = useSelector((state) => state.task)
	return (
		<Container>
			{todos.map((todo) => {
				return <TrelloCard key={todo.id} todo={todo.task} id={todo.id} todos={todo.todos}/>
			})}
		</Container>
	)
}

export default TrelloList