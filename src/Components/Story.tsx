import { useState } from "react";
import IMG3 from "../Images/char3.png";
import IMG from "../Images/maincgar.png";
import IMG2 from "../Images/thunderCh.png";
import { IStory } from "../Interface/interface";
import { ButtonComp } from "./ButtonComp";
import { Skip } from "./Icons/Skip";
import { text1, text2, text3 } from "./text";
import { TopStory } from "./TopStory";
const Story = () => {
  const [storyState, setStoryState] = useState<IStory["state"]>({
    top: true,
    middle: false,
    bottom: false,
    completed: true,
  });
  return (
    <div className="story--wrapper">
      <main className="story--main">
        {storyState.top && (
          <TopStory
            val={text1}
            IMG={IMG}
            id="middle"
            classname="top--story"
            setval={{ storyState, setStoryState }}
          />
        )}
        {storyState.middle && (
          <TopStory
            val={text2}
            IMG={IMG2}
            id="bottom"
            classname="middle--story"
            setval={{ storyState, setStoryState }}
          />
        )}
        {storyState.bottom && (
          <TopStory
            val={text3}
            IMG={IMG3}
            id="completed"
            classname="bottom--story"
            setval={{ storyState, setStoryState }}
          />
        )}

        {storyState.completed && (
          <ButtonComp
            Wc="skip--wrapper"
            Bc="skip--button"
            val="skip"
            comp={<Skip />}
            ty='Position'
          />
        )}
      </main>
    </div>
  );
};
export { Story };
