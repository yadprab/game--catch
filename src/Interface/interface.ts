export interface IPosition {
  state: {
    x: number;
    y: number;
    width: number;
    height: number;
    top: number;
    right: number;
    bottom: number;
    left: number;
  };
}

export interface IState {
  state: {
    isPlay: boolean;
    isStory: boolean;
    isPosition: boolean;
    positionSet: boolean;
    catcherPosition?: IPosition["state"];
    ThunderPosition?: IPosition["state"];
    count: boolean;
    gameStart: boolean;
  };
}

export type ACTIONTYPES =
  | { type: "Play"; payload?: IPosition["state"] }
  | { type: "Story"; payload?: IPosition["state"] }
  | { type: "Position"; payload?: IPosition["state"] }
  | { type: "Set Position"; payload?: IPosition["state"] };

export type ACTIONTYPES2 = {
  type: string;
  payload?: IPosition["state"];
};

export interface IContext {
  ctx: {
    state: IState["state"];
    dispatch: React.Dispatch<ACTIONTYPES | ACTIONTYPES2>;
  };
}

export interface IStory {
  state: {
    top: boolean;
    middle: boolean;
    bottom: boolean;
    completed: boolean;
  };
}

export interface ISstate {
  state: {
    storyState: IStory["state"];
    setStoryState: React.Dispatch<React.SetStateAction<IStory["state"]>>;
  };
}

export interface ICount {
  state: {
    three: boolean;
    two: boolean;
    one: boolean;
    img: boolean;
  };
}
