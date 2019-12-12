import { applySnapshot, onSnapshot } from 'mobx-state-tree';

const PERSIST_KEY = 'data';

const createPersist = (store, storage) => {
  const getData = async () => {
    const snapshot = await storage.getItem(PERSIST_KEY);

    if (snapshot) {
      applySnapshot(store, JSON.parse(snapshot));
    }
  };

  const cleanData = () => {
    storage.removeItem(PERSIST_KEY);
  };

  onSnapshot(store, snapshot => storage.setItem(PERSIST_KEY, JSON.stringify(snapshot)));

  return {
    getData,
    cleanData
  };
};

export default createPersist;