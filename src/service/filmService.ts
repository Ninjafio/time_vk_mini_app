export const fetchFilms = async () => {
  try {
    const response = await fetch("http://localhost:3001/films", {
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
      `http://localhost:3001/user/list/${userId}`
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
    const response = await fetch(`http://localhost:3001/films/${where.id}`, {
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
