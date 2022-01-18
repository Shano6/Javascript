import {
  categories,
  cards,
  colors,
} from './data/cards.js';

class English {
  constructor() {
    this.categoryId = null;
    this.categories = categories;
    this.cards = null;
    this.display = 'categories';
    this.div = document.createElement('div');
    this.playButton = document.getElementsByClassName('playButton')[0];
    this.playmode = false;
    this.colors = colors;
    this.start = this.startGame.bind(this);
    this.isHardWords = false;
    this.game = {
      started: false,
      words: [],
      correct: 0,
      wrong: 0,
      openModal: false,
    };
    this.sortparameter = {
      isSort: false,
      arr: null,
      field: null,
      desc: false,
    };
  }

  init() {
    this.buildCards();
    this.setCardEventListeners();
    this.buildMenu();
    this.setEventListeners();
    this.createStatistics();
  }

  buildCards() {
    if (this.game.started) {
      this.endGame();
    }

    this.div.innerHTML = '';
    this.div.setAttribute('class', 'cards');

    const stars = document.createElement('div');
    stars.classList.add('stars');
    this.div.appendChild(stars);

    this[this.display].forEach((e) => {
      const row = document.createElement('div');
      row.classList.add('row');

      const flipper = document.createElement('div');
      flipper.classList.add('flipper');

      const front = document.createElement('div');
      front.setAttribute('class', 'front-card card card-1');

      front.innerHTML = `
                <img class="cardImage ${this.playmode ? 'roundImage' : ''}" src="./data/${e.image}">
                <div ${this.display === 'categories' ? '' : `class="titleContainer ${this.playmode ? 'hide' : ''}"`}>
                    <h2 class="card__title">${e.word}</h2>
                    ${this.display === 'categories' ? '' : '<img class="flipArrow" src="./data/img/arrow.png">'}
                </div>
            `;

      const back = document.createElement('div');
      back.setAttribute('class', 'back-card card card-1');

      back.innerHTML = `
                <h2 class="card__title__back">${e.translation}</h2>
                <img class="cardImageBack" src="./data/${e.image}">
            `;
      flipper.appendChild(front);
      flipper.appendChild(back);
      this.div.appendChild(flipper);
    });

    const cardsContainer = document.getElementById('cardsContainer');
    const mainContainer = document.getElementsByClassName('mainContainer')[0];

    const oldtable = document.getElementsByClassName('statisticsTable')[0];
    if (oldtable) {
      mainContainer.removeChild(oldtable);
    }

    const oldbutton = document.getElementsByClassName('buttonDiv')[0];
    if (oldbutton) {
      mainContainer.removeChild(oldbutton);
    }

    cardsContainer.appendChild(this.div);
    cardsContainer.style.display = 'block';
    document.getElementsByClassName('playButton')[0].style.display = 'inline';

    if (this.playmode && this.display === 'cards') {
      this.playButton.classList.add('playButtonActive');
    } else {
      this.playButton.classList.remove('playButtonActive');
    }
  }

  buildMenu() {
    const menu = document.getElementsByClassName('sideBarItems')[0];
    this.categories.forEach((e, index) => {
      const item = document.createElement('a');
      item.setAttribute('href', '#');
      item.classList.add('menuItem');
      item.classList.add('m');
      item.innerHTML = `<i class="fas fa-link"></i><span class="menuItem">${e.word}</span> `;

      item.addEventListener('click', () => {
        this.categoryId = index;
        this.loadCards();
        document.querySelector("input[name=menu]").checked=false;
        this.setHighLight(index+1)
      });
      menu.appendChild(item);
    });

    document.getElementsByClassName('mainPage')[0].addEventListener('click', () => {
      this.display = 'categories';
      this.div.innerHTML = '';
      this.buildCards();
      this.setCardEventListeners();
      document.querySelector("input[name=menu]").checked=false;
      this.setHighLight(0)
    });

    document.getElementsByClassName('statisticsNav')[0].addEventListener('click', this.buildStatistics.bind(this));

    document.getElementsByClassName('sidebarMenu')[0].addEventListener('click', (event)=>{
      event.stopPropagation();      
  });
  

    window.addEventListener('click',()=>{
      document.getElementsByClassName('sidebar')[0].classList.remove('showSidebar');
      document.querySelector("input[name=menu]").checked=false;
     })
  }

  setHighLight(i){
    document.querySelectorAll('.m').forEach((e)=>{
      e.classList.remove('highlight')
    })

    if(i || i===0){
      document.getElementsByClassName('m')[i].classList.add('highlight')
    } 
  }

  setCardEventListeners() {
    const activeCards = document.querySelectorAll('.flipper');

    if (this.display === 'categories') {
      activeCards.forEach((card, index) => {
        card.addEventListener('click', () => {
          this.categoryId = index;
          this.loadCards();
          this.setHighLight(index+1)
        });
      });
    } else {
      activeCards.forEach((card, index) => {
        card.addEventListener('click', (e) => {
          if (!e.target.classList.contains('flipArrow') && !e.currentTarget.classList.contains('flip') && !this.playmode) {
            const audio = new Audio(`./data/${this.cards[index].audioSrc}`);
            audio.play();
            if (!this.isHardWords) {
              this.setStorage(this.categoryId, index, 'Trained');
            }
          } else if (!this.playmode) {
            e.currentTarget.classList.add('flip');
            if (!this.isHardWords) {
              this.setStorage(this.categoryId, index, 'Trained');
            }
          }
        });
      });

      activeCards.forEach((e) => {
        e.addEventListener('mouseleave', (i) => {
          if (i.currentTarget.classList.contains('flip')) {
            i.currentTarget.classList.remove('flip');
          }
        });
      });;
    }
  }

  setEventListeners() {
    const toggle = document.getElementById('playCheck');
    toggle.addEventListener('change', (e) => {
      this.switchFunction(e);
    });

    this.playButton.addEventListener('click', this.start);
  }

  switchFunction(e) {
    const root = document.documentElement;
    this.playmode = e.target.checked;
    this.colors[this.playmode ? 'play' : 'train'].forEach((i) => {
      root.style.setProperty(i[0], i[1]);
    });

    if (this.display === 'cards') {
      document.querySelectorAll('.titleContainer').forEach((i) => {
        i.classList.toggle('hide');
      });

      document.querySelectorAll('.front-card').forEach((i) => {
        i.classList.remove('blur');
      });

      document.querySelectorAll('.cardImage').forEach((i) => {
        i.classList.toggle('roundImage');
      });

      this.playButton.classList.toggle('playButtonActive');
      this.playButton.classList.remove('replay');

      if (this.game.started) {
        this.endGame();
      }
    }
  }

  startGame() {
    this.game.words = [];
    this.game.started = true;
    this.playButton.innerHTML = '<img class="replayImg" src="./data/img/replay.png">';
    this.playButton.classList.add('replay');
    for (let i = 0; i < this.cards.length; i++) {
      this.game.words.push(i);
    }

    this.game.words = this.shuffleArray(this.game.words);

    new Audio(`./data/${this.cards[this.game.words[0]].audioSrc}`).play();

    this.playButton.removeEventListener('click', this.start);

    const replayAudio = () => {
      new Audio(`./data/${this.cards[this.game.words[0]].audioSrc}`).play();
    };

    this.playButton.addEventListener('click', replayAudio);

    document.querySelectorAll('.front-card').forEach((e, index) => {
      e.addEventListener('click', (n) => {
        if (this.game.started) {
          if (this.game.words[0] === index) {
            n.currentTarget.classList.add('blur');
            this.game.correct++;
            if (!this.isHardWords) {
              this.setStorage(this.categoryId, index, 'Guess');
            }

            this.game.words.shift();
            new Audio('./data/audio/correct.mp3').play();
            this.addStar(true);
            if (this.game.words.length < 1) {
              this.game.openModal = true;
              this.endGame();
              new Audio('./data/audio/success.mp3').play();
              this.playButton.removeEventListener('click', replayAudio);
              return;
            }
            setTimeout(() => {
              new Audio(`./data/${this.cards[this.game.words[0]].audioSrc}`).play();
            }, 850);
          } else {
            n.preventDefault();
            if (!n.currentTarget.classList.contains('blur')) {
              this.addStar(false);
            }
            this.game.wrong++;
            if (!this.isHardWords) {
              this.setStorage(this.categoryId, this.game.words[0], 'Mistake');
            }
          }
        }
      });
    });
  }

  addStar(win) {
    const starfield = document.querySelectorAll('.stars')[0];
    const star = document.createElement('div');
    star.setAttribute('class', win ? 'star' : 'star star-lose');
    starfield.appendChild(star);
  }

  openModal() {
    const modal = document.getElementById('myModal');
    const win = document.getElementById('win');
    const lose = document.getElementById('lose');
    const status = document.getElementById('status');

    if (this.game.wrong < 1) {
      win.style.display = 'block';
    } else {
      lose.style.display = 'block';
      status.innerHTML = `
            <p>You lost</p>
            <p>Errors: ${this.game.wrong}</p>
            `;
    }

    modal.style.display = 'block';

    setTimeout(() => {
      win.style.display = 'none';
      modal.style.display = 'none';
      lose.style.display = 'none';
      status.innerHTML = 'You Won !!!';
      this.display = 'categories';
      this.buildCards();
      this.setCardEventListeners();
    }, 4000);
  }

  endGame() { // Avengers theme playing
    if (this.game.openModal) {
      this.openModal();
    }

    const toggle = document.getElementById('playCheck');
    toggle.removeEventListener('change', this.switchFunction);

    this.playButton.addEventListener('click', this.start);
    this.playButton.classList.remove('replay');
    this.playButton.innerHTML = 'Play Game';
    this.game = {
      started: false,
      words: [],
      correct: 0,
      wrong: 0,
      openModal: false,
    };
  }

  shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }

  loadCards() {
    if (this.isHardWords && this.hardWords && this.hardWords.length > 0) {
      this.cards = this.hardWords;
    } else {
      this.cards = cards[this.categoryId];
    }

    this.display = 'cards';
    this.isHardWords = false;
    this.buildCards();
    this.setCardEventListeners();
  }

  createStatistics() {
    if (!localStorage.statistics) {
      let arr = [];
      cards.forEach((e) => {
        let cardStats = [];
        e.forEach(() => {
          cardStats = [...cardStats,
            {
              Trained: 0,
              Guess: 0,
              Mistake: 0,
            }];
        });
        arr = [...arr, cardStats];
      });
      localStorage.setItem('statistics', JSON.stringify(arr));
    }
  }

  buildStatistics() {
    this.setHighLight(cards.length+1)
    document.querySelector("input[name=menu]").checked=false;
    this.cards = cards;

    const mainContainer = document.getElementsByClassName('mainContainer')[0];
    document.getElementById('cardsContainer').style.display = 'none';
    document.getElementsByClassName('playButton')[0].style.display = 'none';

    const oldtable = document.getElementsByClassName('statisticsTable')[0];
    if (oldtable) {
      mainContainer.removeChild(oldtable);
    }

    const oldbutton = document.getElementsByClassName('buttonDiv')[0];
    if (oldbutton) {
      mainContainer.removeChild(oldbutton);
    }

    const table = document.createElement('table');
    table.classList.add('statisticsTable');

    const buttonDiv = document.createElement('div');
    buttonDiv.classList.add('buttonDiv');
    buttonDiv.innerHTML = `
        <button class="statButton reset">Reset Statistics</button>
        <button class="statButton hard">Train Hard Words</button>
        `;

    const tr = document.createElement('tr');
    tr.innerHTML = `
            <td class="word">Word</td>
            <td class="sorter">Trained</td>
            <td class="sorter">Guess</td>
            <td class="sorter">Mistake</td>
            <td class="sorter">Percentage</td> 
        `;
    table.appendChild(tr);

    this.categories.forEach((e, index) => {
      const header = document.createElement('td');
      header.classList.add('categoryHeader');
      header.innerHTML = e.word;
      header.classList.add('categoryHeader');
      header.setAttribute('colspan', '5');
      table.appendChild(header);
      let stats = this.cards[index];
      const storageStatistics = JSON.parse(localStorage.getItem('statistics'))[index];
      stats.forEach((n, i) => {
        n.statistics = storageStatistics[i];
        n.statistics.Percentage = Math.trunc(
          n.statistics.Guess > 0
            ? (100 * n.statistics.Guess) / (n.statistics.Mistake + n.statistics.Guess) : 0,
        );
      });


      if (this.sortparameter.isSort) {
        this.sortparameter.arr = stats;
        stats = this.sortCards(stats);
      }

      stats.forEach((card) => {
        const trd = document.createElement('tr');
        trd.innerHTML = ` 
                    <td class="word">${card.word}</td>
                    <td>${card.statistics.Trained}</td>
                    <td>${card.statistics.Guess}</td>
                    <td>${card.statistics.Mistake}</td>
                    <td>${card.statistics.Percentage}%</td>
                `;
        table.appendChild(trd);
      });
      mainContainer.appendChild(buttonDiv);
      mainContainer.appendChild(table);
    });

    document.querySelectorAll('.sorter').forEach((e) => {
      e.addEventListener('click', (i) => {
        this.sortparameter = {
          ...this.sortparameter,
          isSort: true,
          field: i.currentTarget.innerHTML,
          desc: !this.sortparameter.desc,
        };
        this.buildStatistics();
      });
    });

    document.getElementsByClassName('reset')[0].addEventListener('click', () => {
      localStorage.clear();
      this.createStatistics();
      this.buildStatistics();
    });

    document.getElementsByClassName('hard')[0].addEventListener('click', () => {
      this.isHardWords = true;
      this.hardWords = cards.flat();
      const arrayToSort = this.hardWords.filter((n) => n.statistics.Mistake > 0);
      this.sortparameter = {
        ...this.sortparameter,
        isSort: true,
        field: 'Percentage',
        arr: arrayToSort,
        desc: true,
      };

      this.hardWords = this.sortCards();

      if (this.hardWords.length > 0) {
        this.loadCards();
      }
    });
  }

  sortCards() {
    const copyArr = this.sortparameter.arr.slice(0);
    return copyArr.sort((x, y) => {
      if (x.statistics[this.sortparameter.field] < y.statistics[this.sortparameter.field]) {
        return this.sortparameter.desc ? -1 : 1;
      }
      if (x.statistics[this.sortparameter.field] > y.statistics[this.sortparameter.field]) {
        return this.sortparameter.desc ? 1 : -1;
      }
      return 0;
    });
  }

  setStorage(categoryId, id, parameter) {
    let arr = JSON.parse(localStorage.getItem('statistics'));
    arr[categoryId][id][parameter]++;
    arr = JSON.stringify(arr);
    localStorage.setItem('statistics', arr);
  }
}

const page = new English();

page.init();
