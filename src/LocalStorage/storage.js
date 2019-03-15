import { AsyncStorage } from 'react-native';

const STORAGE_KEY = 'KEY';

const exampleSubList = [
  { itemName: 'Fruit', active: true },
  { itemName: 'Veggie', active: false },
  { itemName: 'Bread', active: true },
  { itemName: 'Milk', active: false },
  { itemName: 'Eggs', active: true },
  { itemName: 'Flour', active: true },
];

const DEFAULT_LISTS = [
  { name: "Example List 1", icon: "https://images.pexels.com/photos/3243/pen-calendar-to-do-checklist.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500", date: "3/12/2019, 8:13:24 PM", itemList: exampleSubList },
  { name: "Example List 2", icon: "https://images.pexels.com/photos/3243/pen-calendar-to-do-checklist.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500", date: "3/12/2019, 8:13:24 PM", itemList: exampleSubList },
  { name: "Example List 3", icon: "https://images.pexels.com/photos/3243/pen-calendar-to-do-checklist.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500", date: "3/12/2019, 8:13:24 PM", itemList: exampleSubList },
];

export const load = async () => {
  try {
    let lists = await AsyncStorage.getItem(STORAGE_KEY);
    if (lists == null) {
      return DEFAULT_LISTS
    }
    return JSON.parse(lists);
  } catch (e){
    console.log(e);
  }
}

export const saveSettings = (lists) => {
  AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(lists));
}