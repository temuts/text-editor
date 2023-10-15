import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

export const putDb = async (content) => {
  console.log('Storing data in the database');
  const myDatabase = await openDB('myDatabase', 1);
  const transaction = myDatabase.transaction('myCollection', 'readwrite');
  const objectStore = transaction.objectStore('myCollection');
  const putRequest = objectStore.put({ id: 1, value: content });
  const result = await putRequest;
  console.log('Data saved in the database', result.value);
};

export const getDb = async () => {
  console.log('Retrieving data from the database');
  const myDatabase = await openDB('myDatabase', 1);
  const transaction = myDatabase.transaction('myCollection', 'readonly');
  const objectStore = transaction.objectStore('myCollection');
  const getRequest = objectStore.get(1);
  const result = await getRequest;
  if (result) {
    console.log('Data retrieved from the database');
  } else {
    console.error('getDb not implemented');
  }
  return result?.value;
};
  

initdb();
