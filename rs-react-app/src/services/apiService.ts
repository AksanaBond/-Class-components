§const API_BASE_URL = 'potterapi-fedeperin.vercel.app/en/characters';
export interface ApiResponseCharacter {
  fullName: string;
  nickname: string;
  hogwartsHouse: string;
  interpretedBy: string;
  children: string[];
  image: string;
  birthdate: string;
  index: number;
}
export const fetchItems = async (
  searchParameter?: string
): Promise<ApiResponseCharacter[]> => {
  try {
    const url = searchParameter
      ? `${API_BASE_URL}?search=${searchParameter}`
      : API_BASE_URL;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data);
    return data as ApiResponseCharacter[];
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
};
