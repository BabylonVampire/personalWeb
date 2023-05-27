import { ITaleProps } from "../../types/ITaleProps.interface";

const tales: ITaleProps[] = [
	{
		preview: {
			title: 'Дракон',
			description: 'фыв',
			image: '/src/pics/cards/dragon.jpg',
			backImage: '/src/pics/Dragon/fields.jpg',
		},
		name: 'Dragon',
		link: '/Dragon',
		content: [
			{
				className: 'dragon_paragraph_1',
				type: 'text',
				text: 'Много-много лет назад жил на свете юноша, что любил сказки. Ютился он с остальными людьми в недрах земли, в сырости и холоде. И каждый день приходил он к старику на окраине поселения, что располагалось в глубокой пещере, и слушал его истории. Слушал он о ратных воинах, что одним взмахом могучего меча побеждали драконов, о волшебниках и их чудесах. И в один день после очередной истории спросил он старика: "Ответь мне, дедушка, каждый вечер рассказываешь ты истории свои, но где же я могу стать их частью? Где могу я найти дракона с неотрубленной головой?", на что старик лишь засмеялся и ничего не ответил юноше.',
				image: '',
				options: {
					appearanceDirection: 'left',
					position: 'left'
				}
			},
			{
				className: 'underground_city',
				type: 'image',
				text: '',
				image: '/src/pics/Dragon/underground_city.jpg',
				options: {
					appearanceDirection: 'bottom',
					position: 'center'
				}
			},
			{
				className: 'dragon_paragraph_2',
				type: 'text',
				text: 'На следующий день, собрав все то немногое, что он имел, мальчик отправился в путь. Он ходил по самым мрачным закоулкам подземелья, в котором вырос, залезал в недра катакомб, некогда обитаемых сказочными тварями, но везде находил лишь руины, кости и прах, свидетельствующие о присутствии чего-то великого и невероятно древнего в этих местах, что ныне всеми забыто.',
				image: '',
				options: {
					appearanceDirection: 'right',
					position: 'right'
				}
			},
			{
				className: 'dragon_paragraph_3',
				type: 'text',
				text: 'И как-то раз, во время странствия, предстал перед юношей старик, что сидел у дороги и просил милостыню. "Что же с тобой приключилось, дедушка?" - поинтересовался парень и подал в простертую морщинистую руку старика монету. На что старец ответил: "Ох, мальчик мой... Прожил я долгую жизнь, что посвятил я пути героя. Как ты, странствовал я в потемках подземелий, в поисках места, где моей отваге удалось бы себя проявить, да и потратил на это всю жизнь свою. Коли и ты идешь по моему пути, могу лишь дать тебе напутствие — драконы свободолюбивы. Во мраке подземелий тяжело расправить им свои крылья, а если и удается им это, то быстро умирают они, давясь тесными пещерными сводами. Жизнь их будет коротка, а величия своего они никогда не достигнут. Держи же мой меч. Он служил мне верой и правдой, в годы моих странствий, так пусть же теперь послужит и тебе" — с этими словами он протянул герою пояс с ножнами. Юноша принял дар, поклонился и, не говоря ни слова, отправился в то единственное место, где драконам все еще было место.',
				image: '',
				options: {
					appearanceDirection: 'left',
					position: 'left'
				}
			},
			{
				className: 'dragon_paragraph_4',
				type: 'text',
				text: 'Карабкаясь по крутым сводам отвесного ущелья, содрал герой руки, но глаза его смотрели лишь вверх, на все ярче сияющее лазурное небо, лезть до которого, надо было еще целую вечность. Он потерял счет времени и не знал, сколько он карабкался, день или месяц, год или век. И вот, когда руки его были стерты в кровь, а разум его был на грани безумия, достиг он поверхности. Ослепительно желтое солнце окончательно выжгло у него из головы память и лишь преданный клинок все еще напоминал юноше цель его странствий. Остатками своих пальцев, тяжело было юноше совладать с застежкой на ремне, но все же в один момент ножны упали в густую зеленую траву, что быстро похоронила их в себе. Расправив могучие крылья, юноша взмыл в высь и, окатив воздух струей могучего пламени, улетел в даль.',
				image: '',
				options: {
					appearanceDirection: 'right',
					position: 'right'
				}
			}
		]
	},
	{
		preview: {
			title: 'Море',
			description: 'фыв',
			image: '/src/pics/cards/sea.jpg',
			backImage: '/src/pics/Sea/sea_back.png',
		},
		name: 'Sea',
		link: '/Sea',
		content: [
			{
				className: 'headTitle',
				type: 'title',
				text: 'Море',
				image: '',
				options: {
					appearanceDirection: 'top',
					position: 'center'
				}
			},
			{
				className: 'paragraph1',
				type: 'text',
				text: 'Жил на свете одно время рыбак. Жил он голодно и не знал в быту своем ничего, кроме ловли рыбы. “Кормит море меня” – говорил он вслух временами – “и вечно я ему за это благодарен”. Постоянный вкус рыбы во рту уже не воспринимался рыбаком как что то необычное, а сеть, кою использовал он в качестве одежды своей, совсем уж казалось приросла к телу его. И счастливо жил рыбак, не боясь утонуть в море, благодаря своей старенькой лодке, что даже в шторм возвращала его на берег с уловом.',
				image: '',
				options: {
					appearanceDirection: 'right',
					position: 'right'
				}
			},
			{
				className: 'fish',
				type: 'image',
				text: '',
				image: 'src/pics/Sea/fish.png',
				options: {
					appearanceDirection: 'left',
					position: 'left'
				}
			},
			{
				className: 'paragraph2',
				type: 'text',
				text: 'И вот в одно утро снова он отвязал свою лодку от колышка, торчащего из песка, и отправился по ставшему привычным за многие годы маршруту, ставить сети. За кропотливой работой не замечал он, как солнце уже достигло зенита в вечном танце своем. Вытирая пот со лба, присел он отдохнуть, не заметив, как сон еще более умело расставил во круг него сети свои.',
				image: '',
				options: {
					appearanceDirection: 'left',
					position: 'left'
				}
			},
			{
				className: 'paragraph3',
				type: 'text',
				text: 'Проснувшись от холода, понял рыбак ошибку свою, и что наступила уже глубокая ночь. Взявшись руками, представляющими из себя причудливый узор из костей и сухожилий, за весла, погреб он к берегу, видневшемуся вдалеке. Как вдруг ударилось что-то о лодку. Выглянув в кромешную тьму, увидел несчастный два красных глаза, пронзающих водную тьму и пристально смотрящих на него. Был то хозяин мест этих, лишь его взгляд сиял в самой душе людской. Рыбак многое прочитал в этих светилах. И боль, и азарт, и саму смерть, что манила всякого, кто узрел однажды ее истинный облик.',
				image: '',
				options: {
					appearanceDirection: 'right',
					position: 'right'
				}
			},
			{
				className: 'eyes',
				type: 'image',
				text: '',
				image: 'src/pics/Sea/eyes.gif',
				options: {
					appearanceDirection: 'top',
					position: 'center'
				}
			},
			{
				className: 'paragraph4',
				type: 'text',
				text: 'Улыбка заиграла на лице, давно позабывшем эту гримасу. Желание обуздать владыку тех мест, на коих держится сама суть его жизни пересилила манящий в далеке огонек ставшего родным дома. Однако, как бы долго не гнался за хозяином морей рыбак, не мог он догнать взгляд полный ехидства и задора, до тех пор, пока и вовсе не растворились глаза в пучине морской. И тогда услышал он голос глаз тех, медленно стихающий под завыванием ветра и шумом моря – “Море не простит тебе ошибку, допущенную однажды, забыл ты о нити своей, что порвалась по пути. Теперь участь твоя – вечное плавание в темноте”.',
				image: '',
				options: {
					appearanceDirection: 'left',
					position: 'left'
				}
			},
			{
				className: 'paragraph5',
				type: 'text',
				text: 'Ноги замерзли от ночных вод, а руки устали от работы, огонек дома, являвшийся последним маяком, и вовсе пропал из виду, а лодка, что так долго служила спасением от морских пучин, тихо поскрипывала, терпя редкие удары волн, будучи забытой на далеком берегу.',
				image: '',
				options: {
					appearanceDirection: 'right',
					position: 'right'
				}
			},
			{
				className: 'boat',
				type: 'image',
				text: '',
				image: 'src/pics/Sea/boat.png',
				options: {
					appearanceDirection: 'left',
					position: 'left'
				}
			}
		]
	},
	{
		preview: {
			title: 'Башня',
			description: 'фыв',
			image: '/src/pics/cards/tower.jpg',
			backImage: '/src/pics/MainPage/layer__bottom.png',
		},
		name: 'Tower',
		link: '/Tower',
		content: [{
			className: '',
			type: '',
			text: 'testTitle',
			image: '',
			options: {
				appearanceDirection: 'top',
				position: ''
			}
		}]
	},
	{
		preview: {
			title: 'Статуя',
			description: 'фыв',
			image: '/src/pics/cards/statue.jpg',
			backImage: '/src/pics/MainPage/layer__bottom.png',
		},
		name: 'Statue',
		link: '/Statue',
		content: [{
			className: '',
			type: '',
			text: 'testTitle',
			image: '',
			options: {
				appearanceDirection: 'top',
				position: ''
			}
		}]
	},
	{
		preview: {
			title: 'Пустошь',
			description: 'фыв',
			image: '/src/pics/cards/wastes.jpg',
			backImage: '/src/pics/MainPage/layer__bottom.png',
		},
		name: 'Waste',
		link: '/Waste',
		content: [{
			className: '',
			type: '',
			text: 'testTitle',
			image: '',
			options: {
				appearanceDirection: 'top',
				position: ''
			}
		}]
	},
	{
		preview: {
			title: 'Герой',
			description: 'фыв',
			image: '/src/pics/cards/hero.jpg',
			backImage: '/src/pics/MainPage/layer__bottom.png',
		},
		name: 'Hero',
		link: '/Hero',
		content: [{
			className: '',
			type: '',
			text: 'testTitle',
			image: '',
			options: {
				appearanceDirection: 'top',
				position: ''
			}
		}]
	},

]

export default tales;