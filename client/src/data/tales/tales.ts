interface tale {
    preview: {
        title: string;
        description: string;
        image: string;
		backImage: string;
    }
    name: string;
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
        name: 'Дракон',
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
        name: 'Море',
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
        name: 'Башня',
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
        name: 'Статуя',
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
        name: 'Пустошь',
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
        name: 'Герой',
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