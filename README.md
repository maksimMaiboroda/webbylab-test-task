#  Тестовое задание в компанию WebbyLab

Данное приложение выводит список фильмов, 
в нем есть возможность добовлять свои фильмы с помошью формы
или импортировать с текстового документа, документ должен 
быть  отформатирован подобным образом:

```
Title: Blazing Saddles
Release Year: 1974
Format: VHS
Stars: Mel Brooks, Clevon Little, Harvey Korman, Gene Wilder, Slim Pickens, Madeline Kahn

Title: Casablanca
Release Year: 1942
Format: DVD
Stars: Humphrey Bogart, Ingrid Bergman, Claude Rains, Peter Lorre

Title: Charade
Release Year: 1953
Format: DVD
Stars: Audrey Hepburn, Cary Grant, Walter Matthau, James Coburn, George Kennedy
```

Для запуска приложения выполните такие действия:

* Склонируйте репозиторий к себе на компьютер, или скачайте zip архив и распакуйте,
для клонирования нужно выполнить команду в терминале в папке в которой вы хотите поместить проект.
```
$ git clone git@github.com:maksimMaiboroda/webbylab-test-task.git
```
* Далее выполните команды для установки зависемостей сервера:
```
$ npm install
```
* После этого перейдите в папку клиекта и выполните там установку зависимостей клиента:
```
$ cd client
$ npm install
```
* Далее нужно выйти в корневую папку приложения и выполнить команду для сборки приложения 
в режиме разработки:
```
$ cd ..
$ npm run dev
```


>>P.S. На данный момент у приложения есть небольшая особенность в поведении, 
>>после загрузки текстового файла, нужно вернутся на прудидущуюю вкладку и выполнить перезагрузку страници.
>>В дальнейшем это будет доработано.

