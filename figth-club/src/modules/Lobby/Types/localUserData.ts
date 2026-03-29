export type UserData = {
    userId: string;
    username: string;
    email: string;
    role: string;
};
  

export const userDataRaw = localStorage.getItem('user_data');
export  const userDataLocalStorage: UserData | null = userDataRaw 
      ? JSON.parse(userDataRaw) 
      : null;