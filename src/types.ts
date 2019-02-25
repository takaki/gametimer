import { DataStore } from "./models/DataStore";

export interface IGameTimerProps {
    dataStore: DataStore;
    updateStore: (d: DataStore) => void;
    setRemainTime: (s: string) => void;
    execPause: () => void;
    execGo: () => void;
    setMenuIndex: (i: number) => void;
    setFinish: () => void;
    setNextTimer: () => void;
}
