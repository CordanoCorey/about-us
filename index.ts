// Import stylesheets
import './style.css';

class TeamMember {
  name = '';
  title = '';
  imageSrc = '';
  bio: string[] = [];
  funFacts: string[] = [];

  render() {
    return `
    <div class="team-member scene">
      <div class="spacer2">
        <span class="name">${this.name}</span> 
        <span class="title">${this.title}</span>
      </div>
      <div class="card">
        <div class="card-face card-front">
          ${this.renderImage()}
        </div>
        <div class="card-face card-back">
          <div class="bio">${this.renderBio()}</div>
          <div class="fun-facts">${this.renderFunFacts()}</div>
        </div>
      </div>
    </div>
    `;
  }

  renderBio(): string {
    return this.bio.reduce((acc, x) => {
      return `${acc}<p class="list-item">${x}</p>`;
    }, '');
  }

  renderFunFacts(): string {
    return this.funFacts.reduce((acc, x) => {
      return `${acc}<p class="list-item">${x}</p>`;
    }, '');
  }

  renderImage(): string {
    return this.imageSrc ? `<img src="./assets/images/team-members/${this.imageSrc}">` : '';
  }
}

function renderTeam(team: TeamMember[]) {
  return team.reduce((acc, x) => {
    return `${acc}${x.render()}`;
  }, '');
}

const teamMembers: TeamMember[] = [
  Object.assign(new TeamMember(), {
    name: 'Holly Brzycki',
    title: 'Supervisor of Online Learning',
    imageSrc: 'Holly Brzycki.jpg',
    bio: [
      'Holly Brzycki is the Supervisor of Online Learning at the Capital Area Intermediate Unit. She oversees CAOLA, a regional online learning program for 123 schools, districts, programs & Intermediate Units in PA. Holly has been in education for over 23 years in the roles of teacher, curriculum director, principal and supervisor in traditional and cyber schools. Holly has spent the past 16 years dedicated to online learning and merging her passion for education and technology. She holds a teaching degree as well as a Masters of Education in Ed. Leadership and Principal certification.'
    ],
    funFacts: ['Holly has visited 42 states with a life goal of visiting all 50 states.']
  }),
  Object.assign(new TeamMember(), {
    name: 'Bryan Guerrisi',
    title: ' Online Support Administrator',
    imageSrc: 'Bryan Guerrisi.jpg',
    bio: [
      'Bryan Guerrisi is the Online Support Administrator for the Capital Area Online Learning Association at the Capital Area Intermediate Unit. He is in charge of the professional development of CAOLA members as it pertains to vendors and the learning management systems used by the CAOLA consortium.',
      'Bryan has a Bachelor’s degree from Lock Haven University and a Master’s degree from Penn State University. '
    ],
    funFacts: ['I am ambidextrous.']
  }),
  Object.assign(new TeamMember(), {
    name: 'Aaron Clarke',
    title: 'Online Learning Account Manager',
    imageSrc: 'Aaron Clarke.jpg',
    bio: [
      'Aaron Clarke is the Online Learning Account Manager for the CAOLA Program. In this role, Aaron works with IU and School District partners to support and grow their respective online learning programs through the use of CAOLA.'
    ],
    funFacts: ['I operate a successful DJ business, MAC2 DJ Entertainment. I also enjoy showing my classic car, a Pontiac 20th Anniversary Turbo Trans Am.']
  }),
  Object.assign(new TeamMember(), {
    name: 'Kristen Gross',
    title: 'Online Learning Support Administrator',
    imageSrc: 'Kristen Gross.jpg',
    bio: [
      'Kristen Gross is the Online Learning Support Administrator for the CAOLA program at the Capital Area Intermediate Unit. She supports CAOLA by maintaining the course catalog and monitoring students as an advisor for school districts in our program. Kristen received her undergraduate degree in Elementary and Special Education from Lebanon Valley College.'
    ],
    funFacts: ['I currently raise 5 backyard chickens. Their names are Sara, Duck, Rose, Snowy and Pancakes.']
  }),
  Object.assign(new TeamMember(), {
    name: 'Casey Stepp',
    title: 'Program Secretary for Online Learning',
    imageSrc: 'Casey Stepp.jpg',
    bio: [
      'Casey Stepp is the Program Secretary for Online Learning at the Capital Area Intermediate Unit. She supports CAOLA by keeping the line of communication open between the CAIU Staff and districts/IUs, Schedule/organize meetings, prepares invoicing and provides administrative support for CAOLA staff.'
    ],
    funFacts: ['I live on a 40 acre farm, I was proposed to with an entire field of sunflowers and I can play the piano, flute and piccolo.']
  }),
  Object.assign(new TeamMember(), {
    name: 'Tammy True',
    title: 'Program Assistant',
    imageSrc: 'Tammy True.jpg',
    bio: [
      'Tammy True is a Program Assistant with Capital Area Intermediate Unit (CAIU) providing assistance with management and oversight of the Capital Area Online Learning Association’s (CAOLA) Online Learning Program. She provides advising services assisting member districts and students in the Program.',
      'Tammy worked for PADEP for 13 years, was a Realtor with Jack Gaughen ERA and worked on the CAIU Student Services Team for 10 years prior to joining the CAOLA Team.'
    ],
    funFacts: ['Tammy’s favorite location is the beach. “Life’s just right with the beach in sight.”']
  }),
  Object.assign(new TeamMember(), {
    name: 'Keisha Cree',
    title: 'Program Assistant',
    imageSrc: 'Keisha Cree.jpg',
    bio: [
      'Keisha Cree is a Program Assistant for the CAOLA program. Her role involves advising school districts and students to navigate through their courses and offer support to be successful. Prior to CAOLA, she worked with children with developmental delays and before that was a Pre-K teacher. She is very invested in the educational success of students of all ages.'
    ],
    funFacts: ['Keisha owns and runs a photography business outside of her work at CAOLA!']
  }),
  Object.assign(new TeamMember(), {
    name: 'Beth Cappello',
    imageSrc: 'Elizabeth Cappello.jpg',
    title: 'Special Projects Coordinator',
    bio: [
      'Beth Cappello is the cyber advisor for Big Spring School District. In this role, she advises students to navigate through their courses and offers support to families to help the student be academically successful. She received her undergraduate degree in Middle Grades Mathematics from West Chester University and will complete her Special Education Masters degree from Shippensburg University Spring 2020!'
    ],
    funFacts: [
      'Beth took a 37-day road trip across the United States in the summer of 2018 with her husband. They traveled through 26 different states and can’t wait to do something like this again!'
    ]
  }),
  Object.assign(new TeamMember(), {
    name: 'Dave Nichols',
    title: 'Technology Support Supervisor',
    imageSrc: 'Dave Nichols.jpg',
    bio: [
      'David Nichols is the Technology Support Supervisor at the Capital Area Intermediate Unit, where he oversees the CAOLA Help Desk, CAIU Help Desk, and Application Support Team. He has been working for the CAIU since June of 2011, where he started at the Application Support Specialist position. Prior to that, he has been working in technology for 13 years after receiving his Bachelors of Science in Information Science and Technology from Pennsylvania State University.'
    ],
    funFacts: ['David proposed to his then girlfriend on a cruise, in the middle of the ocean at midnight over New Years.']
  }),
  Object.assign(new TeamMember(), {
    name: 'Andrew Rhoads',
    title: 'Application Support Specialist',
    imageSrc: 'Andrew Rhoads.jpg',
    bio: [
      'Andrew Rhoads is an Application Support Specialist for the CAOLA helpdesk. Andrew works with students and district personnel to assist with any issues or questions they may have when using the CAOLA platform.'
    ],
    funFacts: ['Andrew has no middle name!']
  }),
  Object.assign(new TeamMember(), {
    name: 'Aaron Sica',
    title: 'Application Support Specialist',
    imageSrc: 'Aaron Sica.jpg',
    bio: [
      'Aaron Sica is an Application Support Specialist and has worked with the CAOLA program for the last 5 years, providing technical help to districts all over Pennsylvania who have enrolled in the program. He received a Bachelor’s Degree in Data Communications and Networking from Pennsylvania College of Technology.'
    ],
    funFacts: [
      'One of Aaron’s favorite sports is baseball, and he visits one new major league park every year. The last few years have included trips to Phoenix and Oakland to see their ballparks.'
    ]
  }),
  Object.assign(new TeamMember(), {
    name: 'Adam Shank',
    title: 'Application Support Specialist',
    imageSrc: 'Adam Shank.jpg',
    bio: [
      'Adam Shank is an Application Support Specialist for the CAOLA Helpdesk.  Adam assists students and school representatives with course questions within the CAOLA platform, as well as prepares and manages CAOLA student issued laptops and devices.'
    ],
    funFacts: ['Adam flew for the first time in November 2018.']
  }),
  Object.assign(new TeamMember(), {
    name: 'Matthew Brightbill',
    title: 'Application Support Specialist',
    imageSrc: 'Matt Brightbill.jpg',
    bio: [
      'Matthew Brightbill is one of the application support specialists for the CAOLA Program. In this role, Matt supports IU’s and school districts with any technical related concerns that students or district personnel may have while using the CAOLA platform.'
    ],
    funFacts: ['Matt was a cyber-school student throughout much of his middle school and high school career.  He also did many courses online in college as well.']
  })
];

window.onload = init;

function init() {
  const appDiv: HTMLElement = document.getElementById('our-team');
  appDiv.innerHTML = `<div id="team">${renderTeam(teamMembers)}</div>`;

  const cards = document.getElementsByClassName('card');
  Array.from(cards).forEach(card => {
    card.addEventListener('mouseenter', function(e) {
      toBack(card);
    });
    card.addEventListener('mouseover', function(e) {
      toBack(card);
    });
    card.addEventListener('mouseleave', function(e) {
      toFront(card);
    });
    card.addEventListener('click', function(e) {
      card.classList.toggle('flipped');
    });
  });
}

function toBack(card) {
  card.classList.add('flipped');
  card.classList.add('flipping');
  setTimeout(() => {
    card.classList.remove('flipping');
  }, 800);
}

function toFront(card) {
  const timer = setInterval(() => {
    if (!card.classList.contains('flipping')) {
      card.classList.remove('flipped');
      clearInterval(timer);
    }
  }, 300);
}
