import { createStore, createEvent, createEffect } from "effector";
import { IFilm, IFIlmUser, IList } from "../types/films";
import { fetchFilms, fetchLists } from "../service/filmService";

export const loadFilmsFx = createEffect(async () => {
  try {
    const FethFilms = await fetchFilms();
    console.log(FethFilms);
    return FethFilms;
  } catch (error) {
    console.error(error);
    return [];
  }
});
loadFilmsFx();

export const $fetchedFilms = createStore<IFilm[]>([]).on(
  loadFilmsFx.doneData,
  (_, FethFilms) => FethFilms
);

export const $selectedFilm = createStore<IFilm | null>(null);
export const $storeActiveModal = createStore<string>("guide_first");

export const loadListsFx = createEffect(async (authorId: any) => {
  try {
    const FethLists = await fetchLists(authorId);
    console.log(FethLists);
    return FethLists;
  } catch (error) {
    console.error(error);
    return [];
  }
});

export const $fetchedLists = createStore<IList[]>([]).on(
  loadListsFx.doneData,
  (_, fetchLists) => fetchLists
);


export const $filmUser = createStore<IFIlmUser>({id: "", createdAt: "", favorite: "", viewed: "", wantToWatch: ""})

export const $selectedSearchFilm = createStore<IFilm[]>([]);
export const $createListTitle = createStore<string>("");
export const $createListDescr = createStore<string>("");
export const $searchByTxt = createStore<string>("");
export const $searchByTag1 = createStore<string>("");
export const $searchByTag2 = createStore<string>("");
export const $searchByTagCounter = createStore<number>(0);
export const $isSearchByTag = createStore<boolean>(false);
export const $collection = createStore<string>("");
export const $isCollection = createStore<boolean>(false);
export const $collectionTitle = createStore<string>("");

export const setSelectedSearchFilm = createStore<[]>([]);
export const setCreateListTitle = createEvent<string>();
export const setCreateListDescr = createEvent<string>();
export const setSearchByTxt = createEvent<string>();
export const setSearchByTag1 = createEvent<string>();
export const setSearchByTag2 = createEvent<string>();
export const setSearchByTagCounter = createEvent<number>();
export const setIsSearchByTag = createEvent<boolean>();
export const setFilmUser = createEvent<IFIlmUser>();
export const setCollection = createEvent<string>("");
export const setIsCollection = createEvent<boolean>();
export const setCollectionTitle = createEvent<string>("");

$collectionTitle.on(setCollectionTitle, (_, state) => state);
$createListTitle.on(setCreateListTitle, (_, state) => state);
$createListDescr.on(setCreateListDescr, (_, state) => state);
$selectedSearchFilm.on(setSelectedSearchFilm, (_, state) => state);
$searchByTxt.on(setSearchByTxt, (_, state) => state);
$searchByTag1.on(setSearchByTag1, (_, state) => state);
$searchByTag2.on(setSearchByTag2, (_, state) => state);
$searchByTagCounter.on(setSearchByTagCounter, (_, state) => state);
$isSearchByTag.on(setIsSearchByTag, (_, state) => state);
$filmUser.on(setFilmUser, (_, setFilmUser) => setFilmUser);
$collection.on(setCollection, (_, setCollection) => setCollection);
$isCollection.on(setIsCollection, (_, setIsCollection) => setIsCollection);

export const setFetchedFilm = createEvent<IFilm>();
export const setSelectedFilm = createEvent<IFilm>();
export const setActiveModal = createEvent<string>();

$selectedFilm.on(setSelectedFilm, (_, state) => state);
$storeActiveModal.on(setActiveModal, (_, state) => state);
