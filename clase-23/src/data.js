const data = [
	{
		id: 1,
		name: "Brote Emocional",
		profilePicture: "grupo.jpg",
		backgroundColor: "#FF7777",
		status: "Viva la pizza con anana y queso",
		color: "#FFAAAA",
		categoria: "no",
		chatHistory: [
			{
				author: 'Yo',
				content: '¡Hola, equipo! ¿Cómo están hoy?',
				date: 'Hoy',
				state: 'entregado',
				id: 1
			},
			{
				author: 'Alegría',
				content: '¡Estoy genial! Hoy es un día perfecto para ser feliz. ¿Qué vamos a hacer?',
				date: 'Hoy',
				state: 'entregado',
				id: 2
			},
			{
				author: 'Tristeza',
				content: 'Bueno, no sé. A veces las cosas pueden ser un poco… grises.',
				date: 'Hoy',
				state: 'entregado',
				id: 3
			},
			{
				author: 'Terror',
				content: '¡Oh no! ¿Y si algo sale mal? ¿Y si nos enfrentamos a una situación aterradora? ',
				date: 'Hoy',
				state: 'entregado',
				id: 4
			},
			{
				author: 'Desagrado',
				content: '¡Ugh, no me gusta la idea de ensuciarme o enfrentarme a algo repugnante!',
				date: 'Hoy',
				state: 'entregado',
				id: 5
			},
			{
				author: 'Furia',
				content: '¡Yo estoy listo para cualquier cosa! Si algo nos molesta, ¡simplemente le damos un buen golpe!',
				date: 'Hoy',
				state: 'entregado',
				id: 6
			},
			{
				author: 'Yo',
				content: '¡Perfecto, equipo! ¡Vamos a disfrutar de esta noche!',
				date: 'Hoy',
				state: 'entregado',
				id: 19
			}
		]
	},
	{
		id: 2,
		name: "Alegria",
		profilePicture: "alegria.jpg",
		backgroundColor: "#f0d78a",
		status: "¡Hoy es un gran día para sonreír y ser feliz! 😊🌟",
		color: "#e7e8b4",
		categoria: "no",
		chatHistory: [
			{
				author: 'Yo',
				content: 'Hola, Alegría. ¿Cómo estás?',
				date: 'Hoy a 07:00',
				state: 'visto',
				id: 1
			},
			{
				author: 'Alegria',
				content: '¡Hola! Estoy muy bien. ¿Y tú?',
				date: 'Hoy a 07:35',
				state: 'visto',
				id: 2
			},
			{
				author: 'Yo',
				content: 'Un poco cansado, la verdad. ',
				date: 'Hoy a 07:36',
				state: 'visto',
				id: 3
			},
			{
				author: 'Alegria',
				content: 'Entiendo. ¿Qué tal si te tomas un descanso para hacer algo que disfrutes?',
				date: 'Hoy a 07:37',
				state: 'visto',
				id: 4
			},
			{
				author: 'Yo',
				content: 'Me encantaría leer, pero he estado muy ocupado.',
				date: 'Hoy a 07:38',
				state: 'visto',
				id: 5
			},
			{   
				author: 'Alegria',
				content: ' Intenta encontrar un momento para eso, puede ayudarte a relajarte.',
				date: 'Hoy a 07:38',
				state: 'visto',
				id:6
			},
			{
				author: 'Yo',
				content: 'Buena idea, lo haré. Gracias Alegría.',
				date: 'Hoy a 07:39',
				state: 'entregado',
				id: 7
			}
		]
	},
	{
		id: 3,
		name: "Tristeza",
		profilePicture: "tristeza.jpg",
		backgroundColor: "#6482AD",
		status: "A veces, las nubes en el cielo también tienen su lugar. 🌧️",
		color: "#5e729d",
		categoria: "no",
		chatHistory: [
			{
				author: 'Tristeza',
				content: 'Hola, ¿tienes un momento?',
				date: 'hoy a 10:00',
				state: 'visto',
				id: 1
			},
			{
				author: 'Yo',
				content: 'Hola ¿Qué pasa?',
				date: 'hoy a 10:01',
				state: 'visto',
				id: 2
			},
			{
				author: 'Tristeza',
				content: 'Me siento bastante triste hoy. No han salido bien algunas cosas que esperaba..',
				date: 'hoy a 10:02',
				state: 'visto',
				id: 3
			},
			{
				author: 'Yo',
				content: '¿Te gustaría hablar sobre eso??',
				date: 'hoy a 10:03',
				state: 'visto',
				id: 4
			},
			{
				author: 'Tristeza',	
				content : "Sí, creo que hablar puede ayudarme.",
				date: 'hoy a 10:04',
				state: 'visto',
				id: 5
			},
			{
				author: 'Yo',
				content: 'Perfecto',
				date: 'hoy a 10:05',
				state: 'entregado',
				id: 6
			}
		]
	},
	{
		id: 4,
		name: "Furia",
		profilePicture: "furia.jpg",
		backgroundColor: "#C40C0C",
		status: "Estoy tan enojado que hasta mi café está temblando. 😱",
		color: "#BB6464",
		categoria: "no",
		chatHistory: [
			{
				author: 'Furia',
				content: ' Estoy realmente furioso.',
				date: 'hoy a 12:00',
				state: 'visto',
				id: 1
			},
			{
				author: 'Yo',
				content: 'Por qué?',
				date: 'hoy a 12:01',
				state: 'visto',
				id: 2
			},
			{
				author: 'Furia',
				content: 'Nos robaron en el partido con River',
				date: 'hoy a 12:02',
				state: 'visto',
				id: 3
			},
			{
				author: 'Yo',
				content: 'Si yo tambien lo vi, me senti muy furioso.',
				date: 'hoy a 12:03',
				state: 'visto',
				id: 4
			},
			{
				author: 'Furia',
				content: 'Vayamos a romper el McDonals del Obelisco',
				date: 'hoy a 12:03',
				state: 'entregado',
				id: 4
			},
		]
	},
	{
		id: 5,
		name: "Temor",
		profilePicture: "temor.jpg",
		backgroundColor: "#987D9A",
		status: "Si ves a alguien huyendo sin motivo, soy yo. 🏃‍♂️😅",
		color: "#b69cc3",
		categoria: "no",
		chatHistory: [
			{
				author: 'Temor',
				content: 'No puedo dejar de sentir que algo terrible está a punto de pasar',
				date: 'hoy a 14:00',
				state: 'visto',
				id: 1
			},
			{
				author: 'Yo',
				content: '¿Qué es lo que te está asustando?',
				date: 'hoy a 14:01',
				state: 'visto',
				id: 2
			},
			{
				author: 'Temor',
				content: ' No se, tengo una sensación de pánico que no se va.',
				date: 'hoy a 14:02',
				state: 'visto',
				id: 3
			},
			{
				author: 'Yo',
				content: 'Intenta ponerte una musica relajante',
				date: 'hoy a 14:03',
				state: 'visto',
				id: 4
			},
			{
				author: 'Yo',
				content: 'o un te de tilo',
				date: 'hoy a 14:03',
				state: 'visto',
				id: 4
			},
			{
				author: 'Temor',
				content: 'Lo voy a intentar, gracias',
				date: 'hoy a 14:02',
				state: 'visto',
				id: 5
			},
		]
	},
	{
		id: 6,
		name: "Desagrado",
		profilePicture: "desagrado.jpg",
		backgroundColor: "#6C946F",
		status: "Mi cara cuando alguien menciona pizza con anana: 😒🍕",
		color: "#d5f1c6",
		categoria: "no",
		chatHistory: [
			{
				author: 'Desagrado',
				content: 'No estoy muy seguro sobre tu outfit para la fiesta.',
				date: 'sabado a 14:00',
				state: 'visto',
				id: 1
			},
			{
				author: 'Yo',
				content: 'Porque?',
				date: 'sabado a 14:01',
				state: 'visto',
				id: 2
			},
			{
				author: 'Desagrado',
				content: 'Bueno, el color y el estilo parecen un poco fuera de lugar para la ocasión.',
				date: 'sabado a 14:02',
				state: 'visto',
				id: 3
			},
			{
				author: 'Yo',
				content: '¿Que puedo cambiar?',
				date: 'sabado a 14:03',
				state: 'visto',
				id: 4
			},
			{
				author: 'Desagrado',
				content: 'Capaz un color mas neutral y un estilo mas casual.',
				date: 'sabado a 14:05',
				state: 'visto',
				id: 5
			},
			{
				author: 'Yo',
				content: 'Dale, ahora lo cambio, gracias.',
				date: 'sabado a 14:05',
				state: 'visto',
				id: 6
			},
			{
				author: 'Desagrado',
				content: 'Denada, si hay pizza con Anana, NO LA COMAS!!',
				date: 'sabado a 14:05',
				state: 'visto',
				id: 6
			},
		],
	},
			{
				id: 7,
				name: "Ansiedad",
				profilePicture: "ansiedad.jpg",
				backgroundColor: "#FF8343",
				status: "",
				color: "#FFEEAD",
				categoria: "Pubertad", 
				chatHistory: [
					{
						author: 'Ansiedad',
						content: 'No estoy muy seguro sobre tu outfit para la fiesta.',
						date: 'sabado a 14:00',
						state: 'visto',
						id: 1
					},
					{
						author: 'Yo',
						content: 'Porque?',
						date: 'sabado a 14:01',
						state: 'visto',
						id: 2
					},
					{
						author: 'Ansiedad',
						content: 'Bueno, el color y el estilo parecen un poco fuera de lugar para la ocasión.',
						date: 'sabado a 14:02',
						state: 'visto',
						id: 3
					},
					{
						author: 'Yo',
						content: '¿Que puedo cambiar?',
						date: 'sabado a 14:03',
						state: 'visto',
						id: 4
					},
					{
						author: 'Ansiedad',
						content: 'Capaz un color mas neutral y un estilo mas casual.',
						date: 'sabado a 14:05',
						state: 'visto',
						id: 5
					},
					{
						author: 'Yo',
						content: 'Dale, ahora lo cambio, gracias.',
						date: 'sabado a 14:05',
						state: 'visto',
						id: 6
					},
					{
						author: 'Ansiedad',
						content: 'Denada, si hay pizza con Anana, NO LA COMAS!!',
						date: 'sabado a 14:05',
						state: 'visto',
						id: 6
					}
				]
			},
			{
				id: 8,
				name: "Verguenza",
				profilePicture: "verguenza.jpg",
				backgroundColor: "#F0A8D0",
				status: "",
				color: "#EECAD5",
				categoria: "Pubertad",
				chatHistory: [
					{
						author: 'Verguenza',
						content: 'No estoy muy seguro sobre tu outfit para la fiesta.',
						date: 'sabado a 14:00',
						state: 'visto',
						id: 1
					},
					{
						author: 'Yo',
						content: 'Porque?',
						date: 'sabado a 14:01',
						state: 'visto',
						id: 2
					},
					{
						author: 'Verguenza',
						content: 'Bueno, el color y el estilo parecen un poco fuera de lugar para la ocasión.',
						date: 'sabado a 14:02',
						state: 'visto',
						id: 3
					},
					{
						author: 'Yo',
						content: '¿Que puedo cambiar?',
						date: 'sabado a 14:03',
						state: 'visto',
						id: 4
					},
					{
						author: 'Verguenza',
						content: 'Capaz un color mas neutral y un estilo mas casual.',
						date: 'sabado a 14:05',
						state: 'visto',
						id: 5
					},
					{
						author: 'Yo',
						content: 'Dale, ahora lo cambio, gracias.',
						date: 'sabado a 14:05',
						state: 'visto',
						id: 6
					},
					{
						author: 'Verguenza',
						content: 'Denada, si hay pizza con Anana, NO LA COMAS!!',
						date: 'sabado a 14:05',
						state: 'visto',
						id: 6
					}
				]
			},
			{
				id: 9,
				name: "Envidia",
				profilePicture: "envidia.jpg",
				backgroundColor: "#36C2CE",
				status: "",
				color: "#91DDCF",
				categoria: "Pubertad",
				chatHistory: [
					{
						author: 'Envidia',
						content: 'No estoy muy seguro sobre tu outfit para la fiesta.',
						date: 'sabado a 14:00',
						state: 'visto',
						id: 1
					},
					{
						author: 'Yo',
						content: 'Porque?',
						date: 'sabado a 14:01',
						state: 'visto',
						id: 2
					},
					{
						author: 'Envidia',
						content: 'Bueno, el color y el estilo parecen un poco fuera de lugar para la ocasión.',
						date: 'sabado a 14:02',
						state: 'visto',
						id: 3
					},
					{
						author: 'Yo',
						content: '¿Que puedo cambiar?',
						date: 'sabado a 14:03',
						state: 'visto',
						id: 4
					},
					{
						author: 'Envidia',
						content: 'Capaz un color mas neutral y un estilo mas casual.',
						date: 'sabado a 14:05',
						state: 'visto',
						id: 5
					},
					{
						author: 'Yo',
						content: 'Dale, ahora lo cambio, gracias.',
						date: 'sabado a 14:05',
						state: 'visto',
						id: 6
					},
					{
						author: 'Envidia',
						content: 'Denada, si hay pizza con Anana, NO LA COMAS!!',
						date: 'sabado a 14:05',
						state: 'visto',
						id: 6
					}
				]
			},
			{
				id: 10,
				name: "Aburrimiento",
				profilePicture: "aburrimiento.jpg",
				backgroundColor: "#577B8D",
				status: "",
				color: "#508C9B",
				categoria: "Pubertad",
				chatHistory: [
					{
						author: 'Aburrimiento',
						content: 'No estoy muy seguro sobre tu outfit para la fiesta.',
						date: 'sabado a 14:00',
						state: 'visto',
						id: 1
					},
					{
						author: 'Yo',
						content: 'Porque?',
						date: 'sabado a 14:01',
						state: 'visto',
						id: 2
					},
					{
						author: 'Aburrimiento',
						content: 'Bueno, el color y el estilo parecen un poco fuera de lugar para la ocasión.',
						date: 'sabado a 14:02',
						state: 'visto',
						id: 3
					},
					{
						author: 'Yo',
						content: '¿Que puedo cambiar?',
						date: 'sabado a 14:03',
						state: 'visto',
						id: 4
					},
					{
						author: 'Aburrimiento',
						content: 'Capaz un color mas neutral y un estilo mas casual.',
						date: 'sabado a 14:05',
						state: 'visto',
						id: 5
					},
					{
						author: 'Yo',
						content: 'Dale, ahora lo cambio, gracias.',
						date: 'sabado a 14:05',
						state: 'visto',
						id: 6
					},
					{
						author: 'Aburrimiento',
						content: 'Denada, si hay pizza con Anana, NO LA COMAS!!',
						date: 'sabado a 14:05',
						state: 'visto',
						id: 6
					}
				]
			}
		]
				
	




export default data;
