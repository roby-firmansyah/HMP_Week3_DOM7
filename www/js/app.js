var $ = Dom7;

var movies=[];
  movies.push({judul:'Avenger Infinity War', 
    sinopsis:'Iron Man, Thor, the Hulk and the rest of the Avengers unite to battle their most powerful enemy yet -- the evil Thanos. On a mission to collect all six Infinity Stones, Thanos plans to use the artifacts to inflict his twisted will on reality. ',
    poster:'http://riset.club/images/1.jpg'});
  movies.push({judul:'Joker', 
    sinopsis:'Forever alone in a crowd, failed comedian Arthur Fleck seeks connection as he walks the streets of Gotham City. Arthur wears two masks --       the one he paints for his day job as a clown, and the guise he projects in a futile attempt to feel like he is part of the world around him. ',
    poster:'http://riset.club/images/2.jpg'});
  movies.push({judul:'OnWard', 
    sinopsis:'Teenage elf brothers Ian and Barley embark on a magical quest to spend one more day with their late father.        Like any good adventure, their journey is filled with cryptic maps, impossible obstacles and unimaginable discoveries.',
    poster:'http://riset.club/images/3.jpg'});
  movies.push({judul:'Knives Out', 
    sinopsis:'The circumstances surrounding the death of crime novelist Harlan Thrombey are mysterious, but there is one thing that renowned Detective Benoit Blanc knows for sure -- everyone in the wildly dysfunctional Thrombey family is a suspect. ',
    poster:'http://riset.club/images/4.jpg'});
  movies.push({judul:'Mulan', 
    sinopsis: 'A young Chinese maiden disguises herself as a male warrior in order to save her father. ',
    poster:'http://riset.club/images/5.jpg'});
  movies.push({judul:'Tenet', 
    sinopsis: 'In a twilight world of international espionage, an unnamed CIA operative, known as The Protagonist, is recruited by a mysterious organization called Tenet to participate in a global assignment that unfolds beyond real time.',
  poster:'http://riset.club/images/6.jpg'});

var actors=[];
  actors.push({name:'Anthony Edward Stark', 
    profile:'Anthony Edward Stark, more commonly known as Tony Stark, is a fictional character portrayed by Robert Downey Jr. in the Marvel Cinematic Universe (MCU) film franchise—based on the Marvel Comics character of the same name—commonly known by his alter ego, Iron Man. In the films, Stark is an industrialist, genius inventor, hero and former playboy who is CEO of Stark Industries. At the beginning of the series, he is a chief weapons manufacturer for the U.S. military, until he has a change of heart and redirects his technical knowledge into the creation of mechanized suits of armor which he uses to defend against those that would threaten peace around the world. Stark is one of the central figures of the MCU, having appeared in eleven films since his introduction in Iron Man (2008). The character and Downeys performance have been credited with helping to cement the MCU as a multi-billion-dollar franchise, with Starks evolution often being considered the defining arc of the series.',
    photo:'https://upload.wikimedia.org/wikipedia/en/f/f2/Robert_Downey_Jr._as_Tony_Stark_in_Avengers_Infinity_War.jpg'});
  actors.push({name:'Jason Statham', 
    profile:'Jason Statham was born on July 26, 1967 in Shirebrook, Derbyshire, to Eileen and Barry Statham. He had an older brother named Lee and both took interest in martial arts. But Statham had other athletic passions, one of which was diving, and he began working on those skills, eventually becoming a part of the British Olympic Team that traveled to Seoul, Korea in 1988. After the Olympics, he continued as a member of the National Diving Squad for the next decade. However, after some disappointing finishes at the World Championships and Olympic trials, he decided to focus on the next chapter of his career. A few years later, his athletic build caught the eye of a talent agent and landed Statham a gig in an ad campaign for the European clothing retailer French Connection. An appearance in a Levis Jeans commercial and work for Hilfiger followed and soon Statham had a modeling career. This helped him land jobs as a background dancer in early 90s music videos like The Shamens "Comin On" and Erasures "Run to the Sun."',
    photo:'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Jason_Statham_2018.jpg/330px-Jason_Statham_2018.jpg'});
  actors.push({name:'Vin Diesel',
    profile:'Vin Diesel was born Mark Sinclair in Alameda County, California, along with his fraternal twin brother, Paul Vincent. He was raised by his astrologer/psychologist mother, Delora Sherleen (Sinclair), and adoptive father, Irving H. Vincent, an acting instructor and theatre manager, in an artists housing project in New York Citys Greenwich Village. He never knew his biological father. His mother is white (with English, German, Scottish, and Irish ancestry), and his adoptive father is African-American; referring to his biological fathers background, Diesel has said that he himself is "definitely a person of colour". His first break in acting happened by chance, when at the age of seven he and his friends broke into a theatre to vandalize it. A woman stopped them and offered them each a script and $20, on the condition that they would attend everyday after school. From there, Vins fledgling career progressed from the New York repertory company run by his father, to the Off-Off-Broadway circuit. At age seventeen and already sporting a well-honed physique, he became a bouncer at some of New Yorks hippest clubs to earn himself some extra cash. It was at this time that he changed his name to Vin Diesel. Following high school, Vin enrolled as an English major at Hunter College, but dropped out after three years to go to Hollywood to further his acting career. Being an experienced theatre actor did not make any impression in Hollywood and after a year of struggling to make his mark, he returned to New York. His mother then gave him a book called "Feature Films at used Car Prices" by Rick Schmidt. The book showed him that he could take control of his career and make his own movies. He wrote a short film based on his own experiences as an actor, called Multi-Facial (1995), which was shot in less than three days at a cost of $3,000. Multi-Facial (1995) was eventually accepted for the 1995 Cannes Film Festival where it got a tumultuous reception. Afterwards, Vin returned to Los Angeles and raised almost $50,000 through telemarketing to fund the making of his first feature, Strays (1997). Six months after shooting, the film was accepted for the 1997 Sundance Film Festival, and although it received a good reception, it did not sell as well as hoped. Yet again Vin returned disappointed to New York only to receive a dream phone call. Steven Spielberg was impressed by Multi-Facial (1995) and wanted to meet Vin, leading him to be cast in Saving Private Ryan (1998). Multi-Facial (1995) earned Vin more work, when the director of The Iron Giant (1999) saw it and decided to cast Vin in the title role. From there, Vin career steadily grew, with him securing his first lead role, as Richard B. Riddick in the sci-fi film Pitch Black (2000). The role has earned him a legion of devoted fans and the public recognition he deserves. Since then, he has headlined a series of blockbusters, often but not only centered on fast-driving motor vehicles: The Fast and the Furious (2001), xXx (2002), The Pacifier (2005), Fast & Furious (2009), Fast Five (2011), Furious 6 (2013), and Fast & Furious 7 (2015). He also voiced Groot in Guardians of the Galaxy (2014) and starred in the lower-budgeted courtroom drama Find Me Guilty (2006), the latter directed by Sidney Lumet.',
    photo:'https://m.media-amazon.com/images/M/MV5BMjExNzA4MDYxN15BMl5BanBnXkFtZTcwOTI1MDAxOQ@@._V1_.jpg'});
  actors.push({name:'Cillian Murphy',
    profile:'Striking Irish actor Cillian Murphy was born in Douglas, the oldest child of Brendan Murphy, who works for the Irish Department of Education, and a mother who is a teacher of French. He has three younger siblings. Murphy was educated at Presentation Brothers College, Cork. He went on to study law at University College Cork, but dropped out after about a year. During this time Murphy also pursued an interest in music, playing guitar in various bands. Upon leaving University, Murphy joined the Corcadorca Theater Company in Cork, and played the lead role in "Disco Pigs", amongst other plays. Various film roles followed, including a film adaptation of Disco Pigs (2001). However, his big film break came when he was cast in Danny Boyle 28 Days Later... (2002), which became a surprise international hit. This performance earned him nominations for Best Newcomer at the Empire Awards and Breakthrough Male Performance at the MTV Movie Awards. Murphy went on to supporting roles in high-profile films such as Cold Mountain (2003) and Girl with a Pearl Earring (2003), and then was cast in two villain roles: Dr. Jonathan Crane, aka The Scarecrow, in Batman Begins (2005) and Jackson Rippner in Red Eye (2005). Although slight in nature for a villain, Murphy piercing blue eyes helped to create creepy performances and critics began to take notice. Manhola Dargis of the New York Times cited Murphy as a "picture-perfect villain", while David Denby of The New Yorker noted he was both "seductive" and "sinister". Later that year, Murphy starred as Patrick "Kitten" Braden, an Irish transgender in search of her mother, in Neil Jordan Breakfast on Pluto (2005), a film adaptation of the Pat McCabe novel. Although the film was not a box office success, Murphy was nominated for a Golden Globes for Best Actor in a Comedy or Musical and he won Best Actor for the Irish Film and Television Academy Awards. The following year, Murphy starred in Ken Loach The Wind that Shakes the Barley (2006). The film was the most successful independent Irish film and won the Palm DOr at the 2006 Cannes Film Festival. Murphy continued to take roles in a number of independent films, and also reprised his role as the Scarecrow in Christopher Nolan The Dark Knight (2008). Nolan is known for working with actors in multiple films, and cast Murphy in Inception (2010), as Robert Fischer, the young heir of the multi-billion dollar empire, who was the target of DiCaprio dream team. Murphy continues to appear in high profile films such as In Time (2011), Red Lights (2012), and The Dark Knight Rises (2012), the final film in Nolans Batman trilogy. Murphy is married to Yvonne McGuinness, an artist. The couple has two sons, Malachy and Aran.',
    photo:'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/022bd71fc82b109c77ac3f42dce954e2-1564052342.jpg'});
  actors.push({name:'Tobey Maguire', 
    profile:'Tobias Vincent Maguire was born in Santa Monica, California. His parents were 18 and 20, and not yet married, when he was born. His mother, Wendy (Brown), did advertising, publicity, and acting in Hollywood for years as she coached and managed Tobey. His father, Vincent Maguire, was a cook and sometimes a construction worker. Tobey did not finish high school in order to pursue and focus on acting roles, but he did end up getting his GED. He did several commercials (he was a model dancer for Nordstrom by age six), and he had some roles on various TV shows before landing a starring role on the Fox comedy Great Scott! (1992). That role lasted nine weeks before the show was canceled. Fox-made series were not doing well in general at the time. He avoids drugs and alcohol, and his best friend is Leonardo DiCaprio. Tobey is a vegan and studies yoga. He now has two beautiful children with his wife Jennifer Meyer Maguire. Their names are Ruby Sweetheart and Otis Tobias Maguire. Another little known fact is that his two half-brothers, Jopaul and Weston Epp, were the child actors who handed Tobey (Peter Parker) his mask after the train scene in Spider-Man 2.',
    photo:'https://m.media-amazon.com/images/M/MV5BMTYwMTI5NTM2OF5BMl5BanBnXkFtZTcwODk3MDQ2Mg@@._V1_UY317_CR4,0,214,317_AL_.jpg'});
  actors.push({name:'Johnny Depp', 
    profile:'Johnny Depp is perhaps one of the most versatile actors of his day and age in Hollywood. He was born John Christopher Depp II in Owensboro, Kentucky, on June 9, 1963, to Betty Sue (Wells), who worked as a waitress, and John Christopher Depp, a civil engineer. Depp was raised in Florida. He dropped out of school when he was 15, and fronted a series of music-garage bands, including one named The Kids. When he married Lori Anne Allison (Lori A. Depp) he took a job as a ballpoint-pen salesman to support himself and his wife. A visit to Los Angeles, California, with his wife, however, happened to be a blessing in disguise, when he met up with actor Nicolas Cage, who advised him to turn to acting, which culminated in Depp film debut in the low-budget horror film, A Nightmare on Elm Street (1984), where he played a teenager who falls prey to dream-stalking demon Freddy Krueger. In 1987 he shot to stardom when he replaced Jeff Yagher in the role of undercover cop Tommy Hanson in the popular TV series 21 Jump Street (1987). In 1990, after numerous roles in teen-oriented films, his first of a handful of great collaborations with director Tim Burton came about when Depp played the title role in Edward Scissorhands (1990). Following the film success, Depp carved a niche for himself as a serious, somewhat dark, idiosyncratic performer, consistently selecting roles that surprised critics and audiences alike. He continued to gain critical acclaim and increasing popularity by appearing in many features before re-joining with Burton in the lead role of Ed Wood (1994). In 1997 he played an undercover FBI agent in the fact-based film Donnie Brasco (1997), opposite Al Pacino; in 1998 he appeared in Fear and Loathing in Las Vegas (1998), directed by Terry Gilliam; and then, in 1999, he appeared in the sci-fi/horror film The Astronaut Wife (1999). The same year he teamed up again with Burton in Sleepy Hollow (1999), brilliantly portraying Ichabod Crane. Depp has played many characters in his career, including another fact-based one, Insp. Fred Abberline in From Hell (2001). He stole the show from screen greats such as Antonio Banderas in the finale to Robert Rodriguez "mariachi" trilogy, Once Upon a Time in Mexico (2003). In that same year he starred in the marvelous family blockbuster Pirates of the Caribbean: The Curse of the Black Pearl (2003), playing a character that only the likes of Depp could pull off: the charming, conniving and roguish Capt. Jack Sparrow. The film enormous success has opened several doors for his career and included an Oscar nomination. He appeared as the central character in the Stephen King-based movie, Secret Window (2004); as the kind-hearted novelist James Barrie in the factually-based Finding Neverland (2004), where he co-starred with Kate Winslet; and Rochester in the British film, The Libertine (2004). Depp collaborated again with Burton in a screen adaptation of Roald Dahl novel, Charlie and the Chocolate Factory (2005), and later in Alice in Wonderland (2010) and Dark Shadows (2012). Off-screen, Depp has dated several female celebrities, and has been engaged to Sherilyn Fenn, Jennifer Grey, Winona Ryder and Kate Moss. He was married to Lori Anne Allison in 1983, but divorced her in 1985. Depp has two children with French singer/actress Vanessa Paradis: Lily-Rose Melody, born in 1999 and Jack, born in 2002. He married actress/producer Amber Heard in 2015.',
    photo:'https://m.media-amazon.com/images/M/MV5BMTM0ODU5Nzk2OV5BMl5BanBnXkFtZTcwMzI2ODgyNQ@@._V1_UY317_CR4,0,214,317_AL_.jpg'});

var device = Framework7.getDevice();
var app = new Framework7({
  name: 'MyMovie', // App name
  theme: 'auto', // Automatic theme detection
  el: '#app', // App root element


  // App store
  store: store,
  // App routes
  routes: routes,

  on: {
    init: function () {
      var f7 = this;
      if (f7.device.cordova) {
        cordovaApp.init(f7);
      }

      $('#btnalert').on('click', function() {
        app.dialog.alert("Hi!");
      });

      $(document).on('page:init', function(e, page) {
        if(page.name == 'intheaters') {
          //$('.page-content').append("<p>Diubah melalui DOM7</p>");
          
          //Movies
          movies.forEach((t,index) => {
            $("#movies").append(
              "<div class='col-50'><div class='card'>"+
              "<div class='card-header'>" + t.judul +
              "</div><div class='card-content'>"+
              "<img src='"+ t.poster + "' width='100%'>"+ 
              "</div><div class='card-footer'><a href='/detailmovie/" + index + "'>Read More</a></div>" +
              "</div></div>");  
          });
        } else if(page.name == 'detailmovie') {
          var id = page.router.currentRoute.params.id;
          $('.page-content').html(
            "<div class='card'>"+
            "<div class='card-header'>"+
            movies[id].judul +
            "</div><div class='card-content'>"+
            "<img src='"+ movies[id].poster + "' width='100%'>"+
            "<br><div class='block'><p>"+
            movies[id].sinopsis +
            "</p></div> </div></div>"
          );
        }
        //Actors
        if(page.name == 'actors') {          
          actors.forEach((t,index) => {
            $("#actors").append(
              "<div class='col-50'><div class='card'>"+
              "<div class='card-header'>" + t.name +
              "</div><div class='card-content'>"+
              "<a href='/detailactors/" + index + "'><img src='" + t.photo + "' width='100%'></a>" +
              "</div><div class='card-footer'><a href='/detailactors/" + index + "'>Read More</a></div>" +
              "</div></div>");
          });
        } else if(page.name == 'detailactors') {
          var id = page.router.currentRoute.params.id;
          $('.page-content').html(
            "<div class='card'>"+
            "<div class='card-header'>"+
            actors[id].name +
            "</div><div class='card-content'>"+
            "<img src='"+ actors[id].photo + "' width='100%'>"+
            "<br><div class='block'><p>"+
            actors[id].profile +
            "</p></div> </div></div>"
          );
        }
      });
    },
  },
});