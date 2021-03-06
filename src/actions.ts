import {
  EXEC_GO,
  EXEC_PAUSE,
  NEW_STOP_WATCH,
  SET_FINISH,
  SET_MENU_INDEX,
  SET_NEXT_TIMER,
  SET_REMAIN_TIME,
  SET_STOP_WATCH
} from "./constants";
import { StopWatch } from "./models/StopWatch";

interface ISetRemainTime {
  type: SET_REMAIN_TIME;
  payload: {
    remainTime: string;
  };
}

interface IExecPause {
  type: EXEC_PAUSE;
}

interface IExecGo {
  type: EXEC_GO;
}

interface ISetMenuIndex {
  type: SET_MENU_INDEX;
  payload: {
    menuIndex: number;
  };
}

interface ISetFinish {
  type: SET_FINISH;
}

interface ISetNextTimer {
  type: SET_NEXT_TIMER;
}

interface INewStopWatch {
  type: NEW_STOP_WATCH;
  payload: {
    onTick: (sw: StopWatch) => void;
    onFinish: (sw: StopWatch) => void;
  };
}

interface ISetStopWatch {
  type: SET_STOP_WATCH;
  payload: {
    stopWatch: StopWatch;
  };
}

export type ModelAction =
  | ISetRemainTime
  | IExecPause
  | IExecGo
  | ISetMenuIndex
  | ISetFinish
  | ISetNextTimer
  | INewStopWatch
  | ISetStopWatch;

export const setRemainTime = (remainTime: string): ISetRemainTime => ({
  type: SET_REMAIN_TIME,
  payload: {
    remainTime
  }
});

export const execPause = (): IExecPause => ({
  type: EXEC_PAUSE
});

export const execGo = (): IExecGo => ({
  type: EXEC_GO
});

export const setMenuIndex = (menuIndex: number): ISetMenuIndex => ({
  type: SET_MENU_INDEX,
  payload: {
    menuIndex
  }
});

export const setFinish = (): ISetFinish => ({
  type: SET_FINISH
});

export const setNextTimer = (): ISetNextTimer => ({
  type: SET_NEXT_TIMER
});

export const newStopWatch = (
  onTick: (sw: StopWatch) => void,
  onFinish: (sw: StopWatch) => void
): INewStopWatch => ({
  type: NEW_STOP_WATCH,
  payload: {
    onTick,
    onFinish
  }
});
export const setStopWatch = (stopWatch: StopWatch): ISetStopWatch => {
  return {
    type: SET_STOP_WATCH,
    payload: {
      stopWatch
    }
  };
};
