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

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  console.log('Storing data in the database');
  const myDatabase = await openDB('myDatabase', 1);
  const transaction = myDatabase.transaction('myCollection', 'readwrite');
  const objectStore = transaction.objectStore('myCollection');
  const putRequest = objectStore.put({ id: 1, value: content });
  const result = await putRequest;
  console.error('putDb not implemented')};

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => console.error('getDb not implemented');

initdb();
