import * as person from './person.json'

export const alerter = (word: string): void => {
  alert(word);
  console.log('json person name', person.firstName);
};