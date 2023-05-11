interface tale {
    preview: {
        title: string;
        description: string;
        image: string;
		backImage: string;
    }
    name: string;
	link: string;
    content: {
        type: string,
        text: string,
        image: string,
    }[]
}

const tales: tale[] = [
    {
        preview: {
            title: 'Дракон',
            description: 'фыв',
            image: '/src/pics/cards/dragon.jpg',
			backImage: '/src/pics/about.png',
        },
        name: 'Dragon',
		link: '/Dragon',
        content: [
            {
                type: '',
                text: '',
                image: ''
            }
        ]
    },
    {
        preview: {
            title: 'Море',
            description: 'фыв',
            image: '/src/pics/cards/sea.jpg',
			backImage: '/src/pics/layer_bottom.png',
        },
        name: 'Sea',
		link: '/Sea',
        content: [
            {
                type: '',
                text: '',
                image: ''
            }
        ]
    },
    {
        preview: {
            title: 'Башня',
            description: 'фыв',
            image: '/src/pics/cards/tower.jpg',
			backImage: '/src/pics/layer_bottom.png',
        },
        name: 'Tower',
		link: '/Tower',
        content: [
            {
                type: '',
                text: '',
                image: ''
            }
        ]
    },
    {
        preview: {
            title: 'Статуя',
            description: 'фыв',
            image: '/src/pics/cards/statue.jpg',
			backImage: '/src/pics/layer_bottom.png',
        },
        name: 'Statue',
		link: '/Statue',
        content: [
            {
                type: '',
                text: '',
                image: ''
            }
        ]
    },
    {
        preview: {
            title: 'Пустошь',
            description: 'фыв',
            image: '/src/pics/cards/wastes.jpg',
			backImage: '/src/pics/layer_bottom.png',
        },
        name: 'Wasteland',
		link: '/Wasteland',
        content: [
            {
                type: '',
                text: '',
                image: ''
            }
        ]
    },
    {
        preview: {
            title: 'Герой',
            description: 'фыв',
            image: '/src/pics/cards/hero.jpg',
			backImage: '/src/pics/layer_bottom.png',
        },
        name: 'Hero',
		link: '/Hero',
        content: [
            {
                type: '',
                text: '',
                image: ''
            }
        ]
    },
    
]

export default tales;