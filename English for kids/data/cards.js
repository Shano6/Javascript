const categories = [
  {
    word:'Action (set A)',
    image:'img/dance.jpg'
  }, 
  {
    word:'Action (set B)',
    image:'img/open.jpg'
  }, 
  {
    word:'Animal (set A)',
    image:'img/cat.jpg'
  }, 
  {
    word:'Animal (set B)',
    image:'img/bird.jpg'
  }, 
  {
    word:'Clothes',
    image:'img/skirt.jpg'
  }, 
  {
    word:'Emotions',
    image:'img/laugh.jpg',
  },
  {
    word:'Transport',
    image:'img/car.png',
  },
  {
    word:'Food',
    image:'img/meat.png',
  }
]

const cards = [ 
  [
    {
      word: 'cry',
      translation: 'ტირილი',
      image: 'img/cry.jpg',
      audioSrc: 'audio/cry.mp3'
    },
    {
      word: 'dance',
      translation: 'ცეკვა',
      image: 'img/dance.jpg',
      audioSrc: 'audio/dance.mp3'
    },
    {
      word: 'dive',
      translation: 'ყვინთვა',
      image: 'img/dive.jpg',
      audioSrc: 'audio/dive.mp3'
    },
    {
      word: 'draw',
      translation: 'ხატვა',
      image: 'img/draw.jpg',
      audioSrc: 'audio/draw.mp3'
    },
    {
      word: 'fish',
      translation: 'თევზაობა',
      image: 'img/fish.jpg',
      audioSrc: 'audio/fish.mp3'
    },
    {
      word: 'fly',
      translation: 'ფრენა',
      image: 'img/fly.jpg',
      audioSrc: 'audio/fly.mp3'
    },
    {
      word: 'hug',
      translation: 'ჩახუტება',
      image: 'img/hug.jpg',
      audioSrc: 'audio/hug.mp3'
    },
    {
      word: 'jump',
      translation: 'ახტომა',
      image: 'img/jump.jpg',
      audioSrc: 'audio/jump.mp3'
    }
  ],
  [
    {
      word: 'open',
      translation: 'გახსნა',
      image: 'img/open.jpg',
      audioSrc: 'audio/open.mp3'
    },
    {
      word: 'play',
      translation: 'თამაში',
      image: 'img/play.jpg',
      audioSrc: 'audio/play.mp3'
    },
    {
      word: 'point',
      translation: 'მითითება',
      image: 'img/point.jpg',
      audioSrc: 'audio/point.mp3'
    },
    {
      word: 'ride',
      translation: 'ტარება',
      image: 'img/ride.jpg',
      audioSrc: 'audio/ride.mp3'
    },
    {
      word: 'run',
      translation: 'სირბილი',
      image: 'img/run.jpg',
      audioSrc: 'audio/run.mp3'
    },
    {
      word: 'sing',
      translation: 'სიმღერა',
      image: 'img/sing.jpg',
      audioSrc: 'audio/sing.mp3'
    },
    {
      word: 'skip',
      translation: 'გადახტომა',
      image: 'img/skip.jpg',
      audioSrc: 'audio/skip.mp3'
    },
    {
      word: 'swim',
      translation: 'ცურვა',
      image: 'img/swim.jpg',
      audioSrc: 'audio/swim.mp3'
    }
  ],
  [
    {
      word: 'cat',
      translation: 'კატა',
      image: 'img/cat.jpg',
      audioSrc: 'audio/cat.mp3'
    },
    {
      word: 'chick',
      translation: 'წიწილა',
      image: 'img/chick.jpg',
      audioSrc: 'audio/chick.mp3'
    },
    {
      word: 'chicken',
      translation: 'ქათამი',
      image: 'img/chicken.jpg',
      audioSrc: 'audio/chicken.mp3'
    },
    {
      word: 'dog',
      translation: 'ძაღლი',
      image: 'img/dog.jpg',
      audioSrc: 'audio/dog.mp3'
    },
    {
      word: 'horse',
      translation: 'ცხენი',
      image: 'img/horse.jpg',
      audioSrc: 'audio/horse.mp3'
    },
    {
      word: 'pig',
      translation: 'ღორი',
      image: 'img/pig.jpg',
      audioSrc: 'audio/pig.mp3'
    },
    {
      word: 'rabbit',
      translation: 'კურდღელი',
      image: 'img/rabbit.jpg',
      audioSrc: 'audio/rabbit.mp3'
    },
    {
      word: 'sheep',
      translation: 'ცხვარი',
      image: 'img/sheep.jpg',
      audioSrc: 'audio/sheep.mp3'
    }
  ],
  [
    {
      word: 'bird',
      translation: 'ჩიტი',
      image: 'img/bird.jpg',
      audioSrc: 'audio/bird.mp3'
    },
    {
      word: 'fish',
      translation: 'თევზი',
      image: 'img/fish1.jpg',
      audioSrc: 'audio/fish.mp3'
    },
    {
      word: 'frog',
      translation: 'ბაყაყი',
      image: 'img/frog.jpg',
      audioSrc: 'audio/frog.mp3'
    },
    {
      word: 'giraffe',
      translation: 'ჟირაფი',
      image: 'img/giraffe.jpg',
      audioSrc: 'audio/giraffe.mp3'
    },
    {
      word: 'lion',
      translation: 'ლომი',
      image: 'img/lion.jpg',
      audioSrc: 'audio/lion.mp3'
    },
    {
      word: 'mouse',
      translation: 'თაგვი',
      image: 'img/mouse.jpg',
      audioSrc: 'audio/mouse.mp3'
    },
    {
      word: 'turtle',
      translation: 'კუ',
      image: 'img/turtle.jpg',
      audioSrc: 'audio/turtle.mp3'
    },
    {
      word: 'dolphin',
      translation: 'დელფინი',
      image: 'img/dolphin.jpg',
      audioSrc: 'audio/dolphin.mp3'
    }
  ],
  [
    {
      word: 'skirt',
      translation: 'ქვედაბოლო',
      image: 'img/skirt.jpg',
      audioSrc: 'audio/skirt.mp3'
    },
    {
      word: 'pants',
      translation: 'შარვალი',
      image: 'img/pants.jpg',
      audioSrc: 'audio/pants.mp3'
    },
    {
      word: 'blouse',
      translation: 'ბლუზი',
      image: 'img/blouse.jpg',
      audioSrc: 'audio/blouse.mp3'
    },
    {
      word: 'dress',
      translation: 'კაბა',
      image: 'img/dress.jpg',
      audioSrc: 'audio/dress.mp3'
    },
    {
      word: 'boot',
      translation: 'ჩექმა',
      image: 'img/boot.jpg',
      audioSrc: 'audio/boot.mp3'
    },
    {
      word: 'shirt',
      translation: 'პერანგი',
      image: 'img/shirt.jpg',
      audioSrc: 'audio/shirt.mp3'
    },
    {
      word: 'coat',
      translation: 'პალტო',
      image: 'img/coat.jpg',
      audioSrc: 'audio/coat.mp3'
    },
    {
      word: 'shoe',
      translation: 'ფეხსაცმელი',
      image: 'img/shoe.jpg',
      audioSrc: 'audio/shoe.mp3'
    }
  ],
  [
    {
      word: 'sad',
      translation: 'მოწყენილი',
      image: 'img/sad.jpg',
      audioSrc: 'audio/sad.mp3'
    },
    {
      word: 'angry',
      translation: 'გაბრაზებული',
      image: 'img/angry.jpg',
      audioSrc: 'audio/angry.mp3'
    },
    {
      word: 'happy',
      translation: 'ბედნიერი',
      image: 'img/happy.jpg',
      audioSrc: 'audio/happy.mp3'
    },
    {
      word: 'tired',
      translation: 'დაღლილი',
      image: 'img/tired.jpg',
      audioSrc: 'audio/tired.mp3'
    },
    {
      word: 'surprised',
      translation: 'გაკვირვებული',
      image: 'img/surprised.jpg',
      audioSrc: 'audio/surprised.mp3'
    },
    {
      word: 'scared',
      translation: 'შეშინებული',
      image: 'img/scared.jpg',
      audioSrc: 'audio/scared.mp3'
    },
    {
      word: 'smile',
      translation: 'ღიმილი',
      image: 'img/smile.jpg',
      audioSrc: 'audio/smile.mp3'
    },
    {
      word: 'laugh',
      translation: 'სიცილი',
      image: 'img/laugh.jpg',
      audioSrc: 'audio/laugh.mp3'
    }
  ],[
    {
      word: 'train',
      translation: 'მატარებელი',
      image: 'img/train.png',
      audioSrc: 'audio/train.mp3'
    },
    {
      word: 'bike',
      translation: 'ველოსიპედი',
      image: 'img/bike.png',
      audioSrc: 'audio/bike.mp3'
    },
    {
      word: 'submarine',
      translation: 'წყალქვეშა გემი',
      image: 'img/submarine.png',
      audioSrc: 'audio/submarine.mp3'
    },
    {
      word: 'ship',
      translation: 'გემი',
      image: 'img/ship.png',
      audioSrc: 'audio/ship.mp3'
    },
    {
      word: 'plane',
      translation: 'თვითმფრინავი',
      image: 'img/plane.png',
      audioSrc: 'audio/plane.mp3'
    },
    {
      word: 'motorbike',
      translation: 'მოტოციკლეტი',
      image: 'img/motorbike.png',
      audioSrc: 'audio/motorbike.mp3'
    },
    {
      word: 'car',
      translation: 'მანქანა',
      image: 'img/car.png',
      audioSrc: 'audio/car.mp3'
    },
    {
      word: 'bus',
      translation: 'ავტობუსი',
      image: 'img/bus.png',
      audioSrc: 'audio/bus.mp3'
    }
  ],
  [
    {
      word: 'bread',
      translation: 'პური',
      image: 'img/bread.png',
      audioSrc: 'audio/bread.mp3'
    },
    {
      word: 'egg',
      translation: 'კვერცხი',
      image: 'img/egg.png',
      audioSrc: 'audio/egg.mp3'
    },
    {
      word: 'meat',
      translation: 'ხორცი',
      image: 'img/meat.png',
      audioSrc: 'audio/meat.mp3'
    },
    {
      word: 'onion',
      translation: 'ხახვი',
      image: 'img/onion.png',
      audioSrc: 'audio/onion.mp3'
    },
    {
      word: 'pizza',
      translation: 'პიცა',
      image: 'img/pizza.png',
      audioSrc: 'audio/pizza.mp3'
    },
    {
      word: 'salad',
      translation: 'სალათი',
      image: 'img/salad.png',
      audioSrc: 'audio/salad.mp3'
    },
    {
      word: 'soup',
      translation: 'სუპი',
      image: 'img/soup.png',
      audioSrc: 'audio/soup.mp3'
    },
    {
      word: 'cheese',
      translation: 'ყველი',
      image: 'img/cheese.png',
      audioSrc: 'audio/cheese.mp3'
    }
  ]
]

const colors = {
  play:[
        ['--sidebar-background', 'linear-gradient(180deg, rgb(252, 172, 0) 0%, rgb(209, 132, 17) 100%)'],
        ['--card-hover-color', 'linear-gradient(124deg, #ec7d14, #f0b74d, #f0c229)'],
        ['--btn-color', '#f37500'],
        ['--card-background', 'radial-gradient(#ffb429, #ffb429)']
  ],
  train:[
        ['--sidebar-background', 'linear-gradient(180deg, rgba(63, 186, 254, 1) 0%, rgba(31, 228, 245, 1) 100%)'],
        ['--card-hover-color', 'linear-gradient(124deg, #1ddde8, #6a88eb, #00c2f3)'],
        ['--btn-color', '#00c2f3'],
        ['--card-background', 'radial-gradient(#1fe4f5, #3fbafe)']
  ]
}

export {categories,cards,colors}