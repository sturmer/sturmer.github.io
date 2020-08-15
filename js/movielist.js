// Copied from booklist.js
const flags = {
  argentina: "&#x1f1e6;&#x1f1f7;",
  austria: "&#x1F1E6;&#x1F1F9;",
  belgium: "&#x1f1e7;&#x1f1ea;",
  brazil: "&#127463;&#127479;",
  canada: "&#127464;&#127462;",
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
  morocco: "&#127474;&#127462;",
  peru: "&#127477;&#127466;",
  poland: "&#127477;&#127473;",
  portugal: "&#x1F1F5;&#x1F1F9;",
  russia: "&#x1F1F7;&#x1F1FA;",
  scotland: "&#x1F3F4;&#xE0067;&#xE0062;&#xE0073;&#xE0063;&#xE0074;&#xE007F;",
  south_africa: "&#127487;&#127462;",
  sweden: "&#x1f1f8;&#x1f1ea;",
  uk: "&#127468;&#127463;",
  us: "&#127482;&#127480;",
};

Vue.component("movielist", {
  props: ["s"],
  template: `
    <div>
      <h2>{{ s.year }} (<span v-if="s.comment">{{
          s.comment
        }} &mdash; </span><span>{{ s.movies.filter(s => !!s.link).length }} reviews / {{
          s.movies.length
        }} seen)
        </span>
      </h2>

      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Year</th>
            <th>Starring</th>
            <th>Directed by</th>
            <th>Country</th>
            <th>IMDB</th>
          </tr>
        </thead>
     
        <tbody v-for="movie in s.movies.slice().sort((a, b) => {
          if (a.year == b.year) {
            return b.title - a.title;
          } else {
            return b.year - a.year;
          }
        })">
          <tr>
            <td v-if="movie.link">
              <a :href="movie.link"><b>{{ movie.title }}</b></a>
            <td v-else>
              <b>{{ movie.title }}</b>
            </td>
            </td>
            <td>{{ movie.year }}</td>
            <td>{{ movie.starring.join(", ") }}</td>
            <td>{{ movie.directors.join(", ") }}</td>
            <td><span v-html="movie.from"></span></td>
            <td>
              <a :href="movie.imdb" target="_blank">
                <img src="/images/external-link-512.png" alt="IMDB page (opens new tab)" width="16" height="16" />
              </a>
            </td>
          </tr>
        </tbody>
        
      </table>
    </div>`,
});

Vue.component("counter", {
  props: ["all_seen"],
  template: `<p>Stats: I've seen approximately {{
      all_seen
        .map(s => s.movies)
        .flat()
        .length
    }} movies since June 2020. I wrote reviews for {{
      all_seen
        .map(s => s.movies)
        .flat()
        .filter(b => !!b.link)
        .length
    }} of them.</p>`,
});

new Vue({
  el: "#app",
  data: {
    seen: [
      {
        year: 2020,
        movies: [
          {
            title: "The Irony of Fate, or Enjoy Your Bath!",
            grade: 4,
            from: flags.russia,
            year: 1976,
            directors: ["Eldar Ryazanov"],
            starring: ["Liya Akhedzhakova", "Aleksandr Belyavskiy", "Barbara Brylska"],
            imdb: "https://www.imdb.com/title/tt0073179/"
          },
          {
            title: "Talve",
            from: flags.estonia,
            grade: 7,
            year: 2020,
            starring: ["Rein Aedma", "Tõnu Alveus", "Riina Hein"],
            directors: ["Ergo Kuld"],
            imdb: "https://www.imdb.com/title/tt11704012/"
          },
          {
            title: "The Diamond Arm",
            starring: ["Yuriy Nikulin", "Nina Grebeshkova", "Andrey Mironov"],
            directors: ["Leonid Gaidai"],
            grade: 7,
            imdb: "https://www.imdb.com/title/tt0062759/",
            from: flags.russia, // todo Apparently there's no flag for Soviet Russia
            year: 1969,
          },
          {
            title: "The Equalizer 2",
            starring: ["Denzel Washington", "Pedro Pascal", "Ashton Sanders"],
            directors: ["Antoine Fuqua"],
            grade: 4,
            imdb: "https://www.imdb.com/title/tt3766354/",
            from: flags.us,
            year: 2018,
          },
          {
            title: "The Equalizer",
            starring: ["Denzel Washington", "Marton Csokas", "Chloë Grace Moretz"],
            directors: ["Antoine Fuqua"],
            grade: 7,
            imdb: "https://www.imdb.com/title/tt0455944/",
            from: flags.us,
            year: 2014,
          },
          {
            title: "No Reservations",
            starring: ["Catherine Zeta-Jones", "Aaron Eckhart", "Abigail Breslin"],
            imdb: "https://www.imdb.com/title/tt0481141/",
            year: 2007,
            from: flags.us,
            grade: 6,
            directors: ["Scott Hicks"]
          },
          {
            title: "BlacKKKlansman",
            starring: ["John David Washington", "Adam Driver", "Laura Harrier"],
            directors: ["Spike Lee"],
            imdb: "https://www.imdb.com/title/tt7349662/",
            grade: 9,
            from: flags.us,
            year: 2018,
          },
          {
            title: "Venom",
            year: 2018,
            starring: ["Tom Hardy", "Michelle Williams", "Riz Ahmed"],
            imdb: "https://www.imdb.com/title/tt1270797/",
            directors: ["Ruben Fleischer"],
            grade: 5,
            from: flags.us
          },
          {
            title: "Due Date",
            starring: ["Robert Downey Jr.", "Zach Galifianakis", "Michelle Monaghan"],
            imdb: "https://www.imdb.com/title/tt1231583/",
            year: 2010,
            from: flags.us,
            grade: 5,
            directors: ["Todd Phillips"]
          },
          {
            title: "Jurassic Park",
            starring: ["Sam Neill", "Laura Dern", "Jeff Goldblum"],
            imdb: "https://www.imdb.com/title/tt0107290/",
            year: 1993,
            from: flags.us,
            grade: 5,
            directors: ["Steven Spielberg"]
          },
          {
            title: "The Lego Movie",
            year: 2014,
            imdb: "https://www.imdb.com/title/tt1490017/",
            from: flags.us,
            grade: 7,
            directors: ["Christopher Miller", "Phil Lord"],
            starring: ["Chris Pratt", "Will Ferrell", "Elizabeth Banks"]
          },
          {
            title: "El Camino",
            year: 2019,
            imdb: "https://www.imdb.com/title/tt9243946/",
            from: flags.us,
            grade: 7,
            directors: ["Vince Gilligan"],
            starring: ["Aaron Paul", "Jonathan Banks", "Matt Jones"]
          }
        ],
      },
      {
        year: "Seen before June 2020",
        movies: [
          {
            title: "Il Caimano",
            starring: ["Silvio Orlando", "Margherita Buy", "Jasmine Trinca"],
            imdb: "https://www.imdb.com/title/tt0429727/",
            year: 2006,
            from: flags.italy,
            grade: 10,
            directors: ["Nanni Moretti"]
          },
          {
            title: "Nirvana",
            year: 1997,
            starring: ["Christopher Lambert", "Diego Abatantuono", "Sergio Rubini"],
            imdb: "https://www.imdb.com/title/tt0119794/",
            grade: 8,
            from: flags.italy,
            directors: ["Gabriele Salvatores"]
          },
          {
            title: "Nuovo Cinema Paradiso",
            year: 1988,
            from: flags.italy,
            starring: ["Philippe Noiret", "Enzo Cannavale", "Antonella Attili"],
            imdb: "https://www.imdb.com/title/tt0095765/",
            grade: 10,
            directors: ["Giuseppe Tornatore"]
          },
          {
            title: "La vita è bella",
            year: 1997,
            from: flags.italy,
            starring: ["Roberto Benigni", "Nicoletta Braschi", "Giorgio Cantarini"],
            imdb: "https://www.imdb.com/title/tt0118799/",
            grade: 9,
            directors: ["Roberto Benigni"]
          }
        ]
      }
    ],
  },
});
