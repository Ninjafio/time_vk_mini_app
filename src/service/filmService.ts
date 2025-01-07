export const fetchFilms = async () => {
  try {
    const response = await fetch("https://nav8vx-77-222-122-62.ru.tuna.am/films", {
      method: "GET",
    });
    if (!response.ok) {
      throw new Error("GG WP");
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const fetchLists = async (userId: number) => {
  try {
    const response = await fetch(
      `https://nav8vx-77-222-122-62.ru.tuna.am/user/list/${userId}`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch dogs");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};

export const addList = async ( 
  id: number,
  name: string,
  summ: number,
  // time:number,
  //userId: number,
) =>{
  try {
      const response = await fetch(`https://nav8vx-77-222-122-62.ru.tuna.am/user/list/createList`, {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, summ,id}),
      })
      if (!response.ok){
          throw new Error(`HTTP error! status: ${response.status}`);
      }

      return await response.json();
  } catch (error) {
      console.error("Error postong data:", error);
  }
};

export const putFilm = async (
  where: { id: number },
  data: {
    title: string;
    descr: string;
    age: number;
    year: number;
    tags: string;
    img: string;
    genre: string;
    country: string;
  }
) => {
  try {
    const response = await fetch(`https://nav8vx-77-222-122-62.ru.tuna.am/films/${where.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ where, data }),
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error postong data:", error);
  }
};
