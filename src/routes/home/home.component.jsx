import Directory from './../../components/directory/directory.component';

const response = await fetch('./categories.json');
const directoryItems = await response.json();

const Home = () => <Directory directoryItems={directoryItems} />;

export default Home;
