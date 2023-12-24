const data = [
    {
        title: '7:30',
        img: './image/1.png',
        description: 'Kyrgyzstan, Karakol'
    },
    {
        title: '8:15',
        img: './image/2.png',
        description: 'Kyrgyzstan, Bishkek'
    },
    {
        title: 'Translate',
        img: './image/3.png',
        description: 'Russian'
    },
    {
        title: 'Bike',
        img: './image/4.png',
        description: '7.89 Kilometers'
    },
    {
        title: 'Boat',
        img: './image/5.png',
        description: '90 Minutes'
    },
    {
        title: 'Drive',
        img: './image/6.png',
        description: '32 Kilometers'
    },
    {
        title: 'Morning',
        img: './image/7.png',
        description: 'Coffee'
    },
    {
        title: 'Afternoon',
        img: './image/8.png',
        description: 'Gym'
    },
    {
        title: 'Night',
        img: './image/9.png',
        description: 'Hot Tub'
    }
]

let container = document.createElement('div')
container.className = 'container'

const renderBlock = () => {
    let fragment = new DocumentFragment()
    data.map((item,id) => {
        let block = document.createElement('div')
        block.className = 'block__item'
        block.innerHTML = `
        <div class="title">${item.title}</div>
        <img src=${item.img}></img>
        <div class="description">${item.description}</div>`
        fragment.append(block)
    })
    return fragment
}

container.append(renderBlock())

document.body.append(container)