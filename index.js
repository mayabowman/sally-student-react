'use strict'

function App(props) {
  return (
    <header>
      <h1>{props.name}</h1>
      <address>
        <a href={`sally.student@somewhere.com`}>{props.email}</a><br />
        <p>{props.phone}</p>
      </address>
        <img className="picSize" src={`https://m.media-amazon.com/images/M/MV5BMTY5NzE3NzU3MF5BMl5BanBnXkFtZTgwMjg0NTQ5MDE@._V1_.jpg`} alt={`very smart and hilarious lady with curly hair wearing a yellow shirt with zebras`} />
    </header>
    <main>
      <section>
        <header>
          <h2>Education</h2>
        </header>
        <h3>Thinkful</h3>
        <p>Full Stack Flex Program</p>
        <p>01/2018 - 05/2018</p>
        <h3>Indiana University</h3>
        <p>Bachelor of Music, Jacobs School of Music</p>
        <p>08/1998 - 05/2002</p>
      </section>
      <section>
        <header>
          <h2>Employment History</h2>
        </header>
        <h3>The Bunker</h3>
        <p>Studio Manager</p>
        <p>05/2007 - 12/2017</p>
        <p>Shaman et distillery, yr officia sed shoreditch. Sed iPhone chillwave kogi cardigan pinterest. Irure mustache yr, dolor humblebrag quis occupy trust fund flannel offal banjo locavore.</p>
        <h3>Mission Sound</h3>
        <p>Instrument Technician</p>
        <p>09/1999 - 04/2007</p>
        <p>Id tacos green juice enim selvage put a bird on it esse raw denim unicorn pariatur. Knausgaard farm-to-table pitchfork, ennui taiyaki edison bulb laboris chia subway tile whatever narwhal shaman intelligentsia. Semiotics live-edge flannel, viral la croix roof party craft beer actually.</p>
      </section>
    </main>
};

const appRoot = document.querySelector('#root');
ReactDOM.render(
  <App 
    name='Sally Student'
    email='sally.student@somewhere.com'
    phone='919-123-4567'
  />,
  appRoot
);