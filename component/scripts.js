new Vue({
    el: '#app',
    data: {
        header: [{
            title: 'home',
            url: 'index.html',
            id: 1
        }, {
            title: 'blog',
            url: 'blog.html',
            id: 2
        }, {
            title: 'click to watch any video wwy',
            url: 'https://www.youtube.com/watch?v=38zftiUmlUo',
            id: 3
        }, {
            title: 'click to watch any video wwy',
            url: 'https://www.youtube.com/watch?v=0obTqOhvJkg',
            id: 4
        }],
        articles: [{
            title: 'Article 01',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque ad iusto tempore doloribus unde possimus? Quae sunt libero repellat recusandae dolores iure ipsa perspiciatis autem magnam nisi, veritatis quas veniam.',
            image: 'https://images3.alphacoders.com/100/thumb-1920-1006921.jpg',
            id: 1
        }, {
            title: 'article 02',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque ad iusto tempore doloribus unde possimus? Quae sunt libero repellat recusandae dolores iure ipsa perspiciatis autem magnam nisi, veritatis quas veniam.',
            image: 'https://w.wallhaven.cc/full/eo/wallhaven-eo1prk.png',
            id: 2
        }, {
            title: 'article 03',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque ad iusto tempore doloribus unde possimus? Quae sunt libero repellat recusandae dolores iure ipsa perspiciatis autem magnam nisi, veritatis quas veniam.',
            image: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f07c1535-c014-4636-b738-4a9af08f7e0d/d81lrtl-b16fe693-d0ea-4ce8-8205-cf12f20ba85b.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvZjA3YzE1MzUtYzAxNC00NjM2LWI3MzgtNGE5YWYwOGY3ZTBkXC9kODFscnRsLWIxNmZlNjkzLWQwZWEtNGNlOC04MjA1LWNmMTJmMjBiYTg1Yi5qcGcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.zmaN0WcsIbMWtZpJxuAfwLFzuI7DHjSHK8ni94SgUvQ',
            id: 3
        }, ],
        search: "",

    },
    components: {
        articles
    }

})