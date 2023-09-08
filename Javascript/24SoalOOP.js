class Person{
    constructor(name, type){
        this.name = name;
        this.type=type;
    }
}

class Author extends Person{
    constructor(name){
        super(name, "Author");
    }
}


class Reader extends Person{
    constructor(name){
        super(name, "READER")

        this.read = function (post){
            post.readers.push(this);
        }
    }
}

class Post{
    constructor(title, author){
        this.title=title;
        this.author=author;
        this.readers=[];
    }
}

const fahmi = new Author("fahmi");
console.log(fahmi.type);

const hidayat =  new Reader("hidayat");
console.log(hidayat.type);

const andre = new Reader("andre")
console.log(andre.type);

const berita = new Post("kompas", fahmi);

hidayat.read(berita);
andre.read(berita);

console.log(berita);