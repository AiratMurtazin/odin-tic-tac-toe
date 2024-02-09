'use strict'

const allCells = document.querySelectorAll('.cell')
const restartBtn = document.querySelector('#restart-btn')
const stat = document.querySelector('#status')

let count = 0
let winArr = ['', '', '', '', '', '', '', '', '']
let firstWin = 'X,X,X'
let secondtWin = '0,0,0'
let gameover = false
allCells.forEach(c => {
	c.addEventListener('click', () => {
		if (!gameover) {
			makeMove(c)
			enemyMove()
		}
	})
})

function enemyMove() {
	const emptyCells = Array.from(allCells).filter(
		cell => cell.textContent === ''
	)
	if (emptyCells.length > 0) {
		const randomIndex = Math.floor(Math.random() * emptyCells.length)
		emptyCells[randomIndex].textContent = '0'
	}
	if (!gameover) {
		lookForWin()
	}
}

function makeMove(c) {
	c.textContent = 'X'
	lookForWin()
}

function lookForWin() {
	allCells.forEach((c, i) => {
		winArr[i] = c.textContent
	})

	// in a row
	if (
		winArr.slice(0, 3).toString() === firstWin ||
		winArr.slice(3, 6).toString() === firstWin ||
		winArr.slice(6, 9).toString() === firstWin
	) {
		stat.textContent = 'X win'
		gameover = true
	}
	if (
		winArr.slice(0, 3).toString() === secondtWin ||
		winArr.slice(3, 6).toString() === secondtWin ||
		winArr.slice(6, 9).toString() === secondtWin
	) {
		stat.textContent = '0 win'
		gameover = true
	}
	// cross
	if (
		[winArr[0], winArr[4], winArr[8]].toString() === firstWin ||
		[winArr[2], winArr[4], winArr[6]].toString() === firstWin
	) {
		stat.textContent = 'X win'
		gameover = true
	}
	if (
		[winArr[0], winArr[4], winArr[8]].toString() === secondtWin ||
		[winArr[2], winArr[4], winArr[6]].toString() === secondtWin
	) {
		stat.textContent = '0 win'
		gameover = true
	}
	//  column
	if (
		[winArr[0], winArr[3], winArr[6]].toString() === firstWin ||
		[winArr[1], winArr[4], winArr[7]].toString() === firstWin ||
		[winArr[2], winArr[5], winArr[8]].toString() === firstWin
	) {
		stat.textContent = 'X win'
		gameover = true
	}
	if (
		[winArr[0], winArr[3], winArr[6]].toString() === secondtWin ||
		[winArr[1], winArr[4], winArr[7]].toString() === secondtWin ||
		[winArr[2], winArr[5], winArr[8]].toString() === secondtWin
	) {
		stat.textContent = '0 win'
		gameover = true
	}
}

restartBtn.addEventListener('click', () => {
	allCells.forEach(c => {
		c.textContent = ''
		stat.textContent = ''
	})
})
