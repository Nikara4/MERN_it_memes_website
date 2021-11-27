import { useState, useEffect } from 'react';
import Caption from './Caption';
import ButtonGenerator from './Button';
import Picture from './Picture';

const MemeGenerator = () => {
  const [topText, setTopText] = useState('');
  const [bottomText, setBottomText] = useState('');
  const [meme, setMeme] = useState('');
  const [allMemes, setAllMemes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await fetch('./data/memesAPI.json')
        .then(response => response.json())
        .then(data => {
          const newMemes = [];
          Object.entries(data.memes).forEach(([key, values]) => {
            const newMeme = {
              memeId: key,
              ...values,
            };
            newMemes.push(newMeme);
            setAllMemes(newMemes);
            //   setLoading(true);
          });
        })
        .catch(error => {
          console.error(error);
          //   setLoading(false);
          //   setError(true);
        });
    };
    fetchData();
  }, []);

  const handleClick = () => {
    console.log('works');
  };

  const handleTopChange = event => setTopText(event.target.value);
  const handleBottomChange = event => setBottomText(event.target.value);

  const handleSubmit = e => {
    e.preventDefault();
    const randomNumber = Math.floor(Math.random() * allMemes.length);
    const randomMeme = allMemes[randomNumber].url;
    setMeme(randomMeme);
  };

  return (
    <div>
      <form type="submit" onSubmit={handleSubmit} className="form">
        <Caption
          name="topText"
          placeholder="Top Text for the Meme"
          text={topText}
          handleChange={handleTopChange}
        />
        <Caption
          name="bottomText"
          placeholder="Bottom Text for the Meme"
          text={bottomText}
          handleChange={handleBottomChange}
        />
        <Picture
          memeImg={meme}
          memeTopText={topText}
          memeBottomText={bottomText}
        />
        <ButtonGenerator handleClick={handleSubmit}>Generate</ButtonGenerator>
      </form>
    </div>
  );
};

export default MemeGenerator;
