'use strict'

window.addEventListener('DOMContentLoaded', () => {
	// Navbar
	const menuToggle = document.querySelector('.menu_toggle'),
		navigation = document.querySelector('.main_navigation')

	menuToggle.addEventListener('click', () => {
		navigation.classList.toggle('open')
		navigation.addEventListener('mouseleave', () => {
			setTimeout(() => {
				navigation.classList.remove('open')
			}, 2000)
		})
	})
	// /Navbar

	// Main section img rotate
	setInterval(() => {
		document.querySelector('.main_section_images').classList.toggle('rotated')
	}, 5000)
	// Main section img rotate

	// Projects section Slider
	const imageContainer = document.querySelector('.projects_slider_inner'),
		images = imageContainer.querySelectorAll('img'),
		total = document.querySelector('#total'),
		current = document.querySelector('#current')
	const nextBtn = document.querySelector('.projects_slider_next')
	const prevBtn = document.querySelector('.projects_slider_prev')

	let imagesIndex = 1,
		move = 0,
		width = '600px'
	// console.log(width.replace(/\D/gi, ''))
	// console.log(parseInt(width, 10))

	if (images.length < 10) {
		total.textContent = `0${images.length}`
		current.textContent = `0${imagesIndex}`
	} else {
		total.textContent = images.length
		current.textContent = imagesIndex
	}

	function numberForm(number) {
		return number < 10 ? `0${number}` : `${number}`
	}

	nextBtn.addEventListener('click', () => {
		if (move === +width.replace(/\D/gi, '') * (images.length - 1)) {
			move = 0
		} else {
			move += +width.replace(/\D/gi, '')
		}
		imageContainer.style.transform = `translateX(-${move}px)`

		imagesIndex === images.length ? (imagesIndex = 1) : imagesIndex++
		current.textContent = numberForm(imagesIndex)
	})

	prevBtn.addEventListener('click', () => {
		if (move === 0) {
			move = +width.replace(/\D/gi, '') * (images.length - 1)
		} else {
			move -= +width.replace(/\D/gi, '')
		}
		imageContainer.style.transform = `translateX(-${move}px)`

		imagesIndex === 1 ? (imagesIndex = images.length) : imagesIndex--
		current.textContent = numberForm(imagesIndex)
	})

	// /Projects section Slider

	// Theme button function
	const body = document.querySelector('body')
	const themeBtn = document.querySelector('.theme_btn')

	window.onload = function () {
		let savedTheme = localStorage.getItem('portfolio-theme')
		if (savedTheme) {
			body.classList.add(savedTheme)
		}
	}

	themeBtn.addEventListener('click', () => {
		if (body.classList.contains('dark')) {
			body.classList.remove('dark')
			localStorage.setItem('portfolio-theme', 'light')
		} else {
			body.classList.add('dark')
			localStorage.setItem('portfolio-theme', 'dark')
		}
	})

	// /Theme button function

	// Navbar action
	// Add active class to the current button (highlight it)
	const ahrefs = document.querySelectorAll('.main_navigation_item')
	for (let i = 0; i < ahrefs.length; i++) {
		ahrefs[i].addEventListener('click', function () {
			let current = document.querySelector('.active')
			if (current != this) {
				current.classList.remove('active')
			}
			this.classList.add('active')
		})
	}
	// Navbar action

	// Timer
	const hour = document.querySelector('#hours'),
		minute = document.querySelector('#minutes'),
		second = document.querySelector('#seconds')

	function setTimer() {
		setInterval(() => {
			let time = new Date()
			hour.textContent = formatNumber(time.getHours())
			minute.textContent = formatNumber(time.getMinutes())
			second.textContent = formatNumber(time.getSeconds())
		})

		function formatNumber(number) {
			if (number >= 0 && number < 10) {
				return `0${number}`
			} else {
				return number
			}
		}
	}

	setTimer()
	// /Timer

	// Contact us
	const form = document.querySelector('.contact_form'),
		telegramTokenBot = '8040180794:AAGoEDWf3eJwj_lBR5uSxtygDb9u9aFdRgs',
		chatId = '814090258'

	const message = {
		success: 'Thanks for contacting with us',
		failure: 'Something went wrong',
	}

	form.addEventListener('submit', event => {
		event.preventDefault()
		// For data don't come to link

		const formData = new FormData(form)
		const object = {}
		formData.forEach((value, key) => {
			object[key] = value
		})

		fetch(`https://api.telegram.org/bot${telegramTokenBot}/sendMessage`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				chat_id: chatId,
				text: `Username: ${object.name}. Email: ${object.email}. Message: ${object.message}`,
			}),
		})
			.then(() => {
				showStatusMessage(message.success)
				form.reset()
			})
			.catch(() => showStatusMessage(message.failure))
		// .finally(() => console.log("Everythink ok!"))
	})

	function showStatusMessage(message) {
		const contactInputInfo = document.querySelector('.contact_info'),
			status = document.createElement('div')
		status.classList.add('form_status')
		status.innerHTML = `
				<i class="form_status_icon fa-solid fa-hourglass-half"></i>`
		contactInputInfo.append(status)
		setTimeout(() => {
			if (message == 'Thanks for contacting with us') {
				status.innerHTML = `
			<i class="fa-solid fa-circle-check"></i>${message}`
				status.querySelector('i').style.marginRight = '15px'
			} else {
				status.innerHTML = message
			}
		}, 3000)
		setTimeout(() => {
			status.remove()
		}, 5000)
	}

	// /Contact us
})
