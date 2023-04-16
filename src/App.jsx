import Directory from './components/directory/directory.component';

const response = await fetch('./categories.json');
const directoryItems = await response.json();

const App = () => {
  return (
    <>
      <Directory directoryItems={directoryItems} />
    </>
  );
};

export default App;
