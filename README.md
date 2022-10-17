# NT118.M22_ReactMangaApp

<p align="center">
  <img src="https://user-images.githubusercontent.com/56221762/111880949-da1dd580-89e0-11eb-876c-a68752260d3b.png">
</p>

# Introduction
Ứng dụng đọc truyện tranh online 

## Member

|Order|    Member         |  ID        | Role 
|:---:| :-----------:     | :--:       | :--: 
|1    |   Trần Phi Long   | 19521804 | Member
|2    |   Đỗ Lê Anh Khoa   |  19520631	  | Member
|3    |   Thân Trung Hiếu	  |  19521513	  | Member
|3    |   Nguyễn Tăng Hảo		|  19521479		 | Member

## Packages Used
- [firebase v9](https://firebase.google.com/docs)
- [react-navigation v6](https://reactnavigation.org/docs/getting-started)
- [axios](https://github.com/axios/axios)
- [cheerio](https://github.com/cheeriojs/cheerio)
- [react-native-picker/picker](https://github.com/react-native-picker/picker)
- [react-native-viewport-units](https://github.com/jmstout/react-native-viewport-units)
## Run Locally
```bash
  git clone https://github.com/hacco2801/MangaReactApp.git
```

Install dependencies

```bash
  npm install
```
After the installation is done. Replace the following to your (node_modules > react-native-viewport-unit > viewport-unit.js) file
```bash
  import { Dimensions } from 'react-native';
export const vw = number => Dimensions.get('window').width * (number / 100);
export const vh = number => Dimensions.get('window').height * (number / 100);
export const vmin = number => Math.min(Dimensions.get('window').width * (number / 100), Dimensions.get('window').height * (number / 100));
export const vmax = number => Math.max(Dimensions.get('window').width * (number / 100), Dimensions.get('window').height * (number / 100));
```
Start the app
```bash
  npx react-native run-android
```


### LogIn UI
![Sign in UI](assets/screenshot/Login.png)

### Register UI
![Home/Feed Screen UI](assets/screenshot/Register.png)

### Home UI
![Sign in UI](assets/screenshot/HomeScreen.png)

### MangaDetail UI
![Sign in UI](assets/screenshot/MangaDetail.png)

### ChapterManga UI
![Sign in UI](assets/screenshot/ChapterRead.png)

### SearchManga UI
![Sign in UI](assets/screenshot/SearchScreen.png)

### FilterGenres UI
![Sign in UI](assets/screenshot/FilterGenres.png)

### PickerManga UI
![Sign in UI](assets/screenshot/SelectChapter.png)

### MangaInGenres UI
![Sign in UI](assets/screenshot/MangaInGenres.png)

### Bookmark UI
![Sign in UI](assets/screenshot/Bookmark.png)

### Comment UI
![Sign in UI](assets/screenshot/CommentManga.png)

### Profile UI
![Sign in UI](assets/screenshot/ChangePassword.png)

### EditProfile UI
![Sign in UI](assets/screenshot/EditProfile.png)


### ChangePassword UI
![Sign in UI](assets/screenshot/ChangePassword.png)
