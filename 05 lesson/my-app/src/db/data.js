// create structure for each animal:
class Animal{
    id;
    name;
    img;

    constructor(name, img){
        this.id = Math.random();
        this.name = name;
        this.img = img;
    }
}

// create the 3 arrays:
export let arrLandAnimals = [
    new Animal('Lion', 'https://i.pinimg.com/originals/0b/09/5a/0b095a6effe91b76d587123eb4107ee4.jpg'),
    new Animal('Tiger', 'https://wallpapershome.ru/images/wallpapers/tigr-3840x2160-tigr-16685.jpg'),
    new Animal('Wolf', 'https://d.newsweek.com/en/full/1242403/gettyimages-158275387.jpg'),
    new Animal('Gireffe', 'https://kipmu.ru/wp-content/uploads/setchzhrf.jpg'),
    new Animal('Elephant', 'https://web-zoopark.ru/wp-content/uploads/2018/07/11-47-768x463-4.jpg'),
]

export let arrSkyAnimals = [
    new Animal('Eagle', ''),
    new Animal('bird', ''),
    new Animal('butterfly', ''),
    new Animal('owl', ''),
    new Animal('dragon', ''),
]

export let arrSeaAnimals = [
    new Animal('Dolphin', 'https://lookw.ru/9/934/1566940324-3.jpg'),
    new Animal('fish', 'https://postila.ru/data/e9/e1/08/6a/e9e1086a915bae3fe189d2f070541b40757c6b3cb4a3d9190df657de944ead29.jpg'),
    new Animal('salmon', 'https://kipmu.ru/wp-content/uploads/2021/01/smgk.jpg'),
    new Animal('sea-turtle', 'https://i.pinimg.com/originals/7c/56/3f/7c563ff1fbb9f9f7e310595751b9906d.jpg'),
    new Animal('shark', 'https://kipmu.ru/wp-content/uploads/akulavyprygivaet-scaled.jpg'),
]


