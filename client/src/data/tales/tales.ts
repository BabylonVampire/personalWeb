interface tale {
    preview: {
        title: string;
        description: string;
        image: string;
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
            image: '/src/pics/cards/dragon.jpg'
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
            image: '/src/pics/cards/sea.jpg'
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
            image: '/src/pics/cards/tower.jpg'
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
            image: '/src/pics/cards/statue.jpg'
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
            image: '/src/pics/cards/wastes.jpg'
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
            image: '/src/pics/cards/hero.jpg'
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