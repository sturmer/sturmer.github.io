const flags = {
  argentina: "&#x1f1e6;&#x1f1f7;",
  austria: "&#x1F1E6;&#x1F1F9;",
  belgium: "&#x1f1e7;&#x1f1ea;",
  brazil: "&#127463;&#127479;",
  canada: "&#127464;&#127462;",
  chile: "&#127464;&#127473;",
  china: "&#127464;&#127475;",
  colombia: "&#127464;&#127476;",
  czechia: "&#x1f1e8;&#x1f1ff;",
  dominican_republic: "&#127465;&#127476;",
  egypt: "&#x1f1ea;&#x1f1ec",
  estonia: "&#127466;&#127466;",
  finland: "&#127467;&#127470;",
  france: "&#127467;&#127479;",
  germany: "&#127465;&#127466;",
  greece: "&#x1f1ec;&#x1f1f7;",
  india: "&#127470;&#127475;",
  ireland: "&#127470;&#127466;",
  israel: "&#127470;&#127473;",
  italy: "&#127470;&#127481;",
  jamaica: "&#127471;&#127474;",
  japan: "&#x1f1ef;&#x1f1f5;",
  morocco: "&#127474;&#127462;",
  peru: "&#127477;&#127466;",
  poland: "&#127477;&#127473;",
  portugal: "&#x1F1F5;&#x1F1F9;",
  russia: "&#x1f1f7;&#x1f1fa;",
  scotland: "&#x1F3F4;&#xE0067;&#xE0062;&#xE0073;&#xE0063;&#xE0074;&#xE007F;",
  south_africa: "&#127487;&#127462;",
  sweden: "&#x1f1f8;&#x1f1ea;",
  uk: "&#127468;&#127463;",
  us: "&#127482;&#127480;",
};

Vue.component("booklist", {
  props: ["r"],
  template: `
    <div>
      <h2>{{ r.year }} (<span v-if="r.comment">{{
          r.comment
        }} &mdash; </span><span>{{ r.books.filter(b => !!b.link).length }} reviews / {{
          r.books.length
        }} read)
        </span>
      </h2>

      <ul>
        <div v-for="book in r.books">
          <li>
            <span v-if="book.lt">
            <a :href="book.lt"><b>{{ book.title }}</b></a>
            </span>
            <span v-else><b>{{ book.title }}</b></span> <span v-if="book.link"><sup><a :href="book.link">[review]</a></sup></span> <span v-if="book.pubdate"> ({{book.pubdate}})</span> &mdash; by {{ book.author }}
            <span v-html="book.from"></span>({{ book.grade }}/10).
          </li>
        </div>
      </ul>
    </div>`,
});

Vue.component("counter", {
  props: ["all_reads"],
  template: `<p>Stats: I've reviewed {{
      all_reads
        .map(r => r.books)
        .flat()
        .filter(b => !!b.link)
        .length
    }} out of the approximately {{
      all_reads
        .map(r => r.books)
        .flat()
        .length
    }} books I've read since October 2016.</p>`,
});

new Vue({
  el: "#app",
  data: {
    reads: [
      {
        year: 2021,
        books: [
          // {
          //   title: "Torto Arado",
          //   author: "Itamar Vieira Junior",
          //   grade: 10,
          //   link: "/reviews/2021/torto-arado.html",
          //   pubdate: 2019,
          //   lt: "//www.openlibrary.org/works/OL24141556W"
          // },
          {
            title: "American Pastoral",
            author: "Philip Roth",
            grade: 8,
            link: "/reviews/2021/american-pastoral.html",
            pubdate: 1997,
            lt: "//www.openlibrary.org/works/OL1009341M"
          },
        ]
      },
      {
        year: 2020,
        books: [
          {
            title: "Stoner",
            author: "John Williams",
            grade: 9,
            link: "/reviews/2020/stoner.html",
            pubdate: 1965,
            lt: "//www.librarything.com/work/169174/"
          },
          {
            title: "Real-Time Phoenix",
            author: "Stephen Bussey",
            grade: 7,
            link: "/2020/12/26/real-time-phoenix/",
            lt: "//www.librarything.com/work/25306228/"
          },
          {
            title: "The Fountainhead",
            author: "Ayn Rand",
            grade: 8,
            link: "/reviews/2020/the-fountainhead.html",
            pubdate: 1943,
            lt: "//www.librarything.com/work/3702"
        },
          {
            title: "Jonathan Strange & Mr. Norrell",
            author: "Susanna Clarke",
            grade: 10,
            link: null,
            from: flags.uk
          },
          {
            title: "Atomic Habits",
            author: "James Clear",
            grade: 8,
            link: null,
            from: flags.us
          },
          {
            title: "The Death of Ivan Ilyich",
            author: "Leo Tolstoy",
            grade: 9,
            link: null
          },
          {
            title: "Sputnik Sweetheart",
            author: "Murakami Haruki",
            grade: 8,
            link: null,
            from: flags.japan
          },
          {
            title: "Wuthering Heights",
            author: "Emily Brönte",
            grade: 4,
            link: null,
            from: flags.uk
          },
          {
            title: "Le garçon",
            author: "Marcus Malte",
            grade: 9,
            link: "/reviews/2020/le-garçon.html",
            from: flags.france,
            pubdate: 2016,
            lt: "//www.librarything.com/work/14272499/"
          },
          {
            title: "Ripper",
            author: "Isabel Allende",
            grade: 3,
            link: null,
            from: flags.chile,
            pubdate: 2013
          },
          {
            title: "Purge",
            author: "Sofi Oksanen",
            grade: 8,
            link: null,
            from: flags.finland,
            pubdate: 2008
          },
          {
            title: "The Tragedies, vol. 1",
            author: "Euripides",
            grade: 7,
            link: null,
            from: flags.greece,
          },
          {
            title: "The Shadow of the Wind",
            author: "Carlos Ruiz Zafón",
            grade: 6,
            link: null,
            from: flags.spain,
            pubdate: 2001,
          },
          {
            title: "The Dream of the Celt",
            author: "Mario Vargas Llosa",
            grade: 5,
            link: null,
            from: flags.peru,
            pubdate: 2010,
          },
          {
            title: "The Savage Detectives",
            author: "Roberto Bolaño",
            grade: 8,
            link: null,
            from: flags.chile,
            pubdate: 1998,
          },
          {
            title: "Humboldt's Gift",
            author: "Saul Bellow",
            grade: 7,
            link: "/reviews/2020/humboldt-s-gift.html",
            from: flags.us,
            pubdate: 1975,
            lt: "//www.librarything.com/work/10094/"
          },
          {
            title: "Death's End",
            author: "Cixin Liu",
            grade: 8,
            link: "/reviews/2020/death-s-end.html",
            from: flags.china,
            pubdate: 2010,
            lt: "//www.librarything.com/work/15960642/"
          },
          {
            title: "A Tale of Two Cities",
            author: "Charles Dickens",
            grade: 7,
            link: "/reviews/2020/a-tale-of-two-cities.html",
            from: flags.uk,
            pubdate: 1859,
            lt: "//www.librarything.com/work/17728/"
          },
          {
            title: "Storm in a Teacup: The Physics of Everyday Life",
            author: "Helen Czerski",
            grade: 5,
            link: "/reviews/2020/storm-in-a-teacup.html",
            from: flags.uk,
            pubdate: 2016,
            lt: "//www.librarything.com/work/18419267/"
          },
          {
            title: "La Pornographie",
            author: "Witold Gombrowicz",
            grade: 9,
            link: "/reviews/2020/la-pornographie.html",
            from: flags.poland,
            pubdate: 1960,
            lt: "//www.librarything.com/work/90350661/"
          },
          {
            title: "12 Rules for Life: An Antidote to Chaos",
            author: "Jordan B. Peterson",
            grade: 7,
            link: null,
            from: flags.canada,
            pubdate: 2018,
          },
          {
            title: "Collected Fictions",
            author: "Jorge Luis Borges",
            grade: 8,
            link: null,
            from: flags.argentina,
            pubdate: "1935-1983",
          },
          {
            title: "Malombra",
            author: "Antonio Fogazzaro",
            grade: 7,
            link: null,
            from: flags.italy,
            pubdate: 1881,
          },
          {
            title: "Extension du domaine de la lutte",
            author: "Michel Houellebecq",
            grade: 10,
            link: "/reviews/2020/extension-du-domaine-de-la-lutte.html",
            from: flags.france,
            pubdate: 1994,
            lt: "//www.librarything.com/work/16151/"
          },
          {
            title: "Swing Time",
            author: "Zadie Smith",
            grade: 8,
            link: "/reviews/2020/swing-time.html",
            from: flags.uk,
            pubdate: 2016,
            lt: "//www.librarything.com/work/17897154"
          },
          {
            title: "V for Vendetta",
            author: "Alan Moore",
            grade: 4,
            link: null,
            from: flags.uk,
            pubdate: "1982-1989",
          },
          {
            title: "A Scanner Darkly",
            author: "Philip K. Dick",
            grade: 8,
            link: null,
            from: flags.us,
            pubdate: 1977,
          },
          {
            title: "Life on Mars",
            author: "Tracy K. Smith",
            grade: 6,
            link: "/reviews/2020/life-on-mars.html",
            from: flags.us,
            pubdate: 2011,
            lt: "//www.librarything.com/work/11092458/"
          },
          {
            title: "Double Star",
            author: "Robert A. Heinlein",
            grade: 7,
            link: "/reviews/2020/double-star.html",
            from: flags.us,
            pubdate: 1956,
            lt: "//www.librarything.com/work/7502/"
          },
          {
            title: "Who Rules the World?",
            author: "Noam Chomsky",
            grade: 9,
            link: null,
            from: flags.us,
            pubdate: 2016,
          },
          {
            title: "Scythe",
            author: "Neal Shusterman",
            grade: 3,
            link: null,
            from: flags.us,
            pubdate: 2016,
          },
          {
            title: "Operation Shylock",
            author: "Philip Roth",
            grade: 7,
            link: null,
            from: flags.us,
            pubdate: 1993,
          },
          {
            // Jan 19-24
            title: "A Horse Walks into a Bar",
            author: "David Grossman",
            grade: 7,
            link: null,
            from: flags.israel,
            pubdate: 2014,
          },
          {
            title: "It",
            author: "Stephen King",
            grade: 1,
            link: null,
            from: flags.us,
            pubdate: 1986,
          },
          {
            title: "Everything is F*cked",
            author: "Mark Manson",
            grade: 6,
            link: null,
            from: flags.us,
            pubdate: 2019,
          },
        ],
      },
      {
        year: 2019,
        books: [
          {
            title: "One Hundred Years of Solitude",
            author: "Gabriel García Márquez",
            grade: 6,
            link: null,
            from: flags.colombia,
          },
          {
            title: "Whitethorn Woods",
            author: "Maeve Binchy",
            grade: 8,
            link: null,
            from: flags.ireland,
          },
          {
            title: "Educated",
            author: "Tara Westover",
            grade: 6,
            link: null,
            from: flags.us,
          },
          {
            title: "The Unbearable Lightness of Being",
            author: "Milan Kundera",
            grade: 10,
            link: null,
            from: `${flags.france}/${flags.czechia}`,
            pubdate: 1984,
          },
          {
            title: "In Asia",
            author: "Tiziano Terzani",
            grade: 9,
            link: null,
            from: flags.italy,
          },

          {
            title: "The Dark Forest",
            author: "Liu Cixin",
            grade: 7,
            link: null,
            from: flags.china,
            pubdate: 2008,
          },
          {
            title: "The Clown",
            author: "Heinrich Böll",
            grade: 6,
            link: null, // ❯ node myscripts/review.js -t "The Clown" -a "Heinrich Böll" -g 6 -i 65736
            from: flags.germany,
            pubdate: 1963,
          },
          {
            title: "Les Liaisons dangereuses",
            author: "Pierre Choderlos de Laclos",
            grade: 5,
            link: "/reviews/2019/les-liaisons-dangereuses.html",
            from: flags.france,
          },
          {
            title: "Node.js in Action",
            author: "Alex Young et al.",
            grade: 5,
            link: "/2019/12/29/nodejs-in-action/",
          },
          {
            title: "The Time Machine",
            author: "Herbert George Wells",
            grade: 3,
            link: "/reviews/2019/the-time-machine.html",
            from: flags.uk,
          },
          {
            title: "Extremely Loud and Incredibly Close",
            author: "Jonathan Safran Foer",
            grade: 7,
            link: "/reviews/2019/extremely-loud-and-incredibly-close.html",
            from: flags.us,
          },
          {
            title: "The Art of Life",
            author: "Zygmunt Bauman",
            grade: 4,
            link: "/reviews/2019/the-art-of-life.html",
            from: flags.poland,
          },
          {
            title: "Interview with the Vampire",
            author: "Anne Rice",
            grade: 2,
            link: "/reviews/2019/interview-with-the-vampire.html",
            from: flags.us,
          },
          {
            title: "The Ocean at the End of the Lane",
            author: "Neil Gaiman",
            grade: 7,
            link: "/reviews/2019/the-ocean-at-the-end-of-the-lane.html",
            from: flags.uk,
          },
          {
            title: "Ready Player One",
            author: "Ernest Cline",
            grade: 5,
            link: "/reviews/2019/ready-player-one.html",
            from: flags.us,
          },
          {
            title: "Palace Walk",
            author: "Naguib Mahfouz",
            grade: 8,
            link: "/reviews/2019/palace-walk.html",
            from: flags.egypt,
          },
          {
            title: "Hillbilly Elegy",
            author: "J.D. Vance",
            grade: 6,
            link: "/reviews/2019/hillbilly-elegy.html",
            from: flags.us,
          },
          {
            title: "Dans les bois éternels",
            author: "Fred Vargas",
            grade: 3,
            link: "/reviews/2019/dans-les-bois-éternels.html",
            from: flags.france,
          },
          {
            title: "Factfulness",
            author: "Hans Rosling",
            grade: 10,
            link: "/reviews/2019/factfulness.html",
            from: flags.sweden,
          },
          {
            title: "Sapiens: A Brief History of Humankind",
            author: "Yuval Noah Harari",
            grade: 9,
            link: "/reviews/2019/sapiens-a-brief-history-of-humankind.html",
            from: flags.israel,
          },
          {
            title: "Lullaby",
            author: "Leïla Slimani",
            grade: 4,
            link: "/reviews/2019/lullaby.html",
            from: `${flags.france}/${flags.morocco}`,
          },
          {
            title: "Homo Deus",
            author: "Yuval Noah Harari",
            grade: 8,
            link: "/reviews/2019/homo-deus.html",
            from: flags.israel,
          },
          {
            title: "Peopleware: Productive Projects and Teams",
            author: "Tom DeMarco and Timothy Lister",
            grade: 4,
            link: "/2019/04/06/review-peopleware/",
            from: flags.us,
          },
          {
            title: "Os Maias",
            author: "Eça de Queiroz",
            grade: 5,
            link: "/reviews/2019/os-maias.html",
            from: flags.portugal,
          },
          {
            title: "Eleanor Oliphant Is Completely Fine",
            author: "Gail Honeyman",
            grade: 8,
            link: "/reviews/2019/eleanor-oliphant-is-completely-fine.html",
            from: flags.scotland,
          },
          {
            title: "The Man Who Spoke Snakish",
            author: "Andrus Kivirähk",
            grade: 7,
            link: "/reviews/2019/the-man-who-spoke-snakish.html",
            from: flags.estonia,
          },
          {
            title: "Born a Crime",
            author: "Trevor Noah",
            grade: 8,
            link: "/reviews/2019/born-a-crime.html",
            from: flags.south_africa,
          },
        ],
      },
      {
        year: 2018,
        books: [
          {
            title: "When Breath Becomes Air",
            author: "Paul Kalanithi",
            grade: 10,
            link: "/reviews/2019/when-breath-becomes-air.html",
            from: flags.us,
          },
          {
            grade: 6,
            title: "Forge Your Future with Open Source",
            link: "/2019/01/05/forge-your-future-with-open-source/",
            author: "VM (Vicky) Brasseur",
            from: flags.us,
          },
          {
            grade: 7,
            title: "The Subtle Art of Not Giving A F*ck",
            link: "/reviews/2018/the-subtle-art-of-not-giving-a-fuck.html",
            author: "Mark Manson",
            from: flags.us,
          },
          {
            grade: 7,
            title: "Sing, Unburied, Sing",
            link: "/reviews/2018/sing-unburied-sing.html",
            author: "Jesmyn Ward",
            from: flags.us,
          },
          {
            grade: 8,
            title: "Little Fires Everywhere",
            link: "/reviews/2018/little-fires-everywhere.html",
            author: "Celeste Ng",
            from: flags.us,
          },
          {
            grade: 8,
            title: "The Handmaid's Tale",
            link: "/reviews/2018/the-handmaid-s-tale.html",
            author: "Margaret Atwood",
            from: flags.canada,
          },
          {
            grade: 9,
            title: "Shoe Dog",
            link: "/reviews/2018/shoe-dog.html",
            author: "Phil Knight",
            from: flags.us,
          },
          {
            grade: 5,
            title: "Le plus grande philosophe de France",
            link: "/reviews/2018/le-plus-grande-philosophe-de-france.html",
            author: "Joann Sfar",
            from: flags.france,
          },
          {
            grade: 9,
            title: "The State of Affairs",
            link: "/reviews/2018/the-state-of-affairs.html",
            author: "Esther Perel",
            from: flags.belgium,
          },
          {
            grade: 10,
            title: "Lincoln in the Bardo",
            link: "/reviews/2018/lincoln-in-the-bardo.html",
            author: "George Saunders",
            from: flags.us,
          },
          {
            grade: 10,
            title: "The Three-Body Problem",
            link: "/reviews/2018/the-three-body-problem.html",
            author: "Liu Cixin",
            from: flags.china,
          },
          {
            grade: 7,
            title: "Psychopathologie de la vie quotidienne",
            link: "/reviews/2018/psychopathologie-de-la-vie-quotidienne.html",
            author: "Sigmund Freud",
            from: flags.austria,
          },
          {
            grade: 9,
            title: "Atonement",
            link: "/reviews/2018/atonement.html",
            author: "Ian McEwan",
            from: flags.uk,
          },
          {
            grade: 8,
            title: "Harry Potter and the Cursed Child",
            link: "/reviews/2018/harry-potter-and-the-cursed-child.html",
            author: "J.K. Rowling",
            from: flags.uk,
          },
          {
            grade: 7,
            title: "Mort",
            link: "/reviews/2018/mort.html",
            author: "Terry Pratchett",
            from: flags.uk,
          },
          {
            grade: 2,
            title: "L'immoraliste/La porte étroite",
            author: "André Gide",
            link: "/reviews/2018/l-immoraliste.html",
            from: flags.france,
          },
          {
            grade: 7,
            title: "La Symphonie Pastorale",
            link: "/reviews/2018/la-symphonie-pastorale.html",
            author: "André Gide",
            from: flags.france,
          },
          {
            grade: 7,
            title: "Éloge de la lucidité",
            author: "Ilios Kotsou",
            link: "/reviews/2018/éloge-de-la-lucidité.html",
          },
          {
            grade: 3,
            title: "Clara dos Anjos",
            link: "/reviews/2018/clara-dos-anjos.html",
            author: "Lima Barreto",
            from: flags.brazil,
          },
          {
            grade: 9,
            title: "A Little Life",
            link: "/reviews/2018/a-little-life.html",
            author: "Hanya Yanagihara",
            from: flags.us,
          },
          {
            grade: 6,
            title: "The Weekend Effect",
            link: "/reviews/2018/the-weekend-effect.html",
            author: "Katrina Onstad",
            from: flags.canada,
          },
          {
            grade: 2,
            title: "The Rabbit Back Literature Society",
            link: "/reviews/2018/the-rabbit-back-literature-society.html",
            author: "Pasi Ilmari Jääskeläinen",
            from: flags.finland,
          },
          {
            grade: 8,
            title: "The Light Fantastic",
            link: "/reviews/2018/the-light-fantastic.html",
            author: "Terry Pratchett",
            from: flags.uk,
          },
          {
            grade: 5,
            title: "La Horde du Contrevent",
            link: "/reviews/2018/la-horde-du-contrevent.html",
            author: "Alain Damasio",
            from: flags.france,
          },
          {
            grade: 9,
            title: "The God of Small Things",
            link: "/reviews/2018/the-god-of-small-things.html",
            author: "Arundhati Roy",
            from: flags.india,
          },
          {
            grade: 3,
            title: "The Colour of Magic",
            link: "/reviews/2018/the-colour-of-magic.html",
            author: "Terry Pratchett",
            from: flags.uk,
          },
          {
            grade: 8,
            title: "The Gospel According to Jesus Christ",
            link: "/reviews/2018/the-gospel-according-to-jesus-christ.html",
            author: "José Saramago",
            from: flags.portugal,
          },
          {
            grade: 7,
            title: "H is for Hawk",
            link: "/reviews/2018/h-is-for-hawk.html",
            author: "Helen Macdonald",
            from: flags.uk,
          },
          {
            grade: 6,
            title: "L'Abyssin",
            author: "Jean-Christophe Rufin",
            link: "/reviews/2018/l-abyssin.html",
            from: flags.france,
          },
          {
            grade: 10,
            title: "The Moon and Sixpence",
            link: "/reviews/2018/the-moon-and-sixpence.html",
            author: "William Somerset Maugham",
            from: flags.uk,
          },
          {
            grade: 6,
            title: "The Book of Night Women",
            link: "/reviews/2018/the-book-of-night-women.html",
            author: "Marlon James",
            from: flags.jamaica,
          },
          {
            grade: 6,
            title: "Naissance",
            link: "/reviews/2018/naissance.html",
            author: "Yann Moix",
            from: flags.france,
          },
          {
            grade: 5,
            title: "Designing Data-Intensive Applications",
            link: "/2018/02/17/review-designing-data-intensive-applications/",
            author: "Martin Kleppmann",
            from: `${flags.uk}/${flags.germany}`,
          },
          {
            grade: 6,
            title: "Firestarter",
            link: "/reviews/2018/firestarter.html",
            author: "Stephen King",
            from: flags.us,
          },
        ],
      },
      {
        year: 2017,
        comment: "complete, but few reviewed",
        books: [
          {
            grade: 7,
            title: "The War of the End of the World",
            link: "/reviews/2018/the-war-of-the-end-of-the-world.html",
            author: "Mario Vargas Llosa",
            from: flags.peru,
          },
          {
            grade: 6,
            title: "O Quinze",
            link: "/reviews/2017/o-quinze.html",
            author: "Rachel de Queiroz",
            from: flags.brazil,
          },
          {
            grade: 5,
            title: "A Hora da Estrela",
            link: null,
            author: "Clarice Lispector",
            from: flags.brazil,
          },
          {
            grade: 8,
            title: "Eles Eram Muitos Cavalos",
            link: null,
            author: "Luiz Ruffato",
            from: flags.brazil,
          },
          {
            grade: 5,
            title: "Triste Fim de Policarpo Quaresma",
            link: null,
            author: "Lima Barreto",
            from: flags.brazil,
          },
          {
            grade: 3,
            title: "Brave New World",
            link: null,
            author: "Aldous Huxley",
            from: flags.uk,
          },
          {
            grade: 6,
            title: "Luxúria",
            author: "Fernando Bonassi",
            link: null,
            from: flags.brazil,
          },
          {
            grade: 5,
            title: "Ender's Game",
            author: "Orson Scott Card",
            link: null,
            from: flags.us,
          },
          {
            grade: 9,
            title: "The Grapes of Wrath",
            link: null,
            author: "John Steinbeck",
            from: flags.us,
          },
          {
            grade: 3,
            title: "The Louvre Murder Club",
            link: null,
            author: "Christos Markogiannakis",
            from: flags.greece,
          },
          {
            grade: 6,
            title: "The Childhood of Jesus",
            link: null,
            author: "J.M. Coetzee",
            from: flags.south_africa,
          },
          {
            grade: 8,
            title: "The Brief Wondrous Life of Oscar Wao",
            link: null,
            author: "Junot Díaz",
            from: `${flags.dominican_republic}/${flags.us}`,
          },
          {
            grade: 6,
            title: "Realm of Racket: Learn to Program, One Game at a Time!",
            author: "Matthias Felleisen",
            link: null,
            from: `${flags.germany}/${flags.us}`,
          },
          {
            grade: 7,
            title: "Guns, Germs, and Steel: The Fates of Human Societies",
            author: "Jared Diamond",
            link: null,
            from: flags.us,
          },
          {
            grade: 6,
            title: "Stories of Your Life and Others",
            link: null,
            author: "Ted Chiang",
            from: flags.us,
          },
          {
            grade: 7,
            title: "Cloud Atlas",
            link: null,
            author: "David Mitchell",
            from: flags.uk,
          },
          {
            grade: 8,
            title: "Germinal",
            link: null,
            author: "Emile Zola",
            from: flags.france,
          },
          {
            grade: 8,
            title: "Fontamara",
            link: null,
            author: "Ignazio Silone",
            from: flags.italy,
          },
          {
            grade: 5,
            title: "Khadija. L'épouse du prophète",
            author: "Marek Halter",
            link: null,
            from: flags.france,
          },
          {
            grade: 6,
            title: "Il Codice di Perelà",
            author: "Aldo Palazzeschi",
            link: null,
            from: flags.italy,
          },
          {
            grade: 7,
            title: "Les Fleurs Bleus",
            link: null,
            author: "Raymond Queneau",
            from: flags.france,
          },
          {
            grade: 6,
            title: "Os Anjos do Badarò",
            author: "Mario Prata",
            link: null,
            from: flags.brazil,
          },
          {
            grade: 6,
            title: "The Association of Small Bombs",
            link: null,
            author: "Karan Mahajan",
            from: `${flags.india}/${flags.us}`,
          },
          {
            grade: 4,
            title: "Linchpin",
            link: null,
            author: "Seth Godin",
            from: flags.us,
          },
          {
            grade: 8,
            title: "Wherever You Go, There You Are",
            link: null,
            author: "John Kabat-Zinn",
            from: flags.us,
          },
        ],
      },
      {
        year: 2016,
        comment: "largely incomplete",
        books: [
          {
            grade: 8,
            title: "Zero to One",
            link: "/reviews/2016/zero-to-one.html",
            author: "Peter Thiel",
            from: flags.us,
          },
          {
            grade: 5,
            title: "La nuit de feu",
            link: "/reviews/2016/la-nuit-de-feu.html",
            author: "Eric-Emmanuel Schmitt",
            from: `${flags.france}/${flags.belgium}`,
          },
          {
            grade: 6,
            title: "Il pendolo di Foucault",
            link: "/reviews/2016/foucaults-pendulum.html",
            author: "Umberto Eco",
            from: flags.italy,
          },
        ],
      },
    ],
  },
});
